import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GetAllData } from "@/lib/dataFetch";

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
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold">
            {workout.name}
          </h1>

          <p className="mt-3 text-zinc-400">
            {workout.description}
          </p>

          {/* Workout Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">Duration</p>
              <p className="mt-1 font-bold">
                {workout.duration} min
              </p>
            </div>

            <div className="rounded-xl bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">Calories</p>
              <p className="mt-1 font-bold">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            <div className="rounded-xl bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">Sets</p>
              <p className="mt-1 font-bold">
                {workout.sets}
              </p>
            </div>

            <div className="rounded-xl bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">Reps</p>
              <p className="mt-1 font-bold">
                {workout.reps}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 space-y-3">
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
          </div>
        </div>
      </div>

      {/* Instructions */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to Perform
        </h2>

        <ol className="mt-6 space-y-4">
          {workout.instructions.map(
            (instruction: string, index: number) => (
              <li
                key={index}
                className="flex gap-4 rounded-xl bg-zinc-900 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
                  {index + 1}
                </span>

                <p className="text-zinc-300">
                  {instruction}
                </p>
              </li>
            )
          )}
        </ol>
      </section>
    </main>
  );
};

export default WorkoutDetailPage;