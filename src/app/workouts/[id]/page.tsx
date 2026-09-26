import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GetAllData } from "@/lib/dataFetch";
// import { CalendarPlus } from "lucide-react";
import { Bookmark } from "lucide-react";
import TodayPlanButton from "@/components/Workouts/TodayPlanButton";

interface WorkoutDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailPage = async ({
  params,
}: WorkoutDetailPageProps) => {
  const { id } = await params;

  const data = await GetAllData();

  const workout = data.find(
    (exercise: { id: number }) => exercise.id === Number(id)
  );

  if (!workout) {
    notFound();
  }

  return (
      <main className="mx-auto max-w-6xl px-5 py-16">
          {/* Back Button */}
          <Link
              href="/workouts"
              className="mb-8 inline-block rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800"
          >
              ← Back to Workouts
          </Link>

          <div className="grid gap-10 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-100 overflow-hidden rounded-2xl">
                  <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                  />
              </div>

              {/* Details */}
              <div>
                  {/* Muscle Groups */}


                  <h1 className="text-4xl font-bold">
                      {workout.name}
                  </h1>

                  <p className="mt-3 text-zinc-400">
                      {workout.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                      {workout.muscleGroups.map((muscle: string) => (
                          <span
                              key={muscle}
                              className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                          >
                              {muscle}
                          </span>
                      ))}
                  </div>

                  {/* Workout Stats */}
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div className="rounded-xl bg-zinc-900 p-2">
                          <p className="text-sm text-zinc-500">Duration</p>
                          <p className="mt-1 font-bold">
                              {workout.duration} min
                          </p>
                      </div>

                      <div className="rounded-xl bg-zinc-900 p-2">
                          <p className="text-sm text-zinc-500">Calories</p>
                          <p className="mt-1 font-bold">
                              {workout.caloriesBurned} kcal
                          </p>
                      </div>

                      <div className="rounded-xl bg-zinc-900 p-2">
                          <p className="text-sm text-zinc-500">Sets</p>
                          <p className="mt-1 font-bold">
                              {workout.sets}
                          </p>
                      </div>

                      <div className="rounded-xl bg-zinc-900 p-2">
                          <p className="text-sm text-zinc-500">Reps</p>
                          <p className="mt-1 font-bold">
                              {workout.reps}
                          </p>
                      </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-5 space-y-2">
                      <p>
                          <span className="font-bold">Equipment:</span>{" "}
                          {workout.equipment}
                      </p>

                      <p>
                          <span className="font-bold">Difficulty:</span>{" "}
                          {workout.difficulty}
                      </p>

                      <p>
                          <span className="font-bold">Rating:</span>{" "}
                          ⭐ {workout.rating}
                      </p>

                      {/* Instructions */}
                      <div className="mt-5">
                          <h2 className="text-xl font-bold">
                              Instructions
                          </h2>

                          <ol className="mt-2 space-y-1">
                              {workout.instructions.map(
                                  (instruction: string, index: number) => (
                                      <li
                                          key={index}
                                          className="flex gap-2 rounded-lg bg-zinc-900 p-1"
                                      >
                                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime-400 font-bold text-black text-[10px]">
                                              {index + 1}
                                          </span>

                                          <p className="text-zinc-300 text-[11px]">
                                              {instruction}
                                          </p>
                                      </li>
                                  )
                              )}
                          </ol>
                      </div>
                        
                    <TodayPlanButton workout={workout} />

                    <Link href="/saved" className="mt-2 inline-block rounded-lg bg-zinc-700 px-4 py-2 text-zinc-300 hover:bg-zinc-600 ml-2">
                        <div className="flex items-center gap-2">
                        <Bookmark size={18} />
                        <span>Save for later</span>
                        </div>
                    </Link>
                  </div>


              </div>
          </div>


      </main>
  );
};

export default WorkoutDetailPage;