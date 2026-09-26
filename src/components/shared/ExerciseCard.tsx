import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { IType } from "@/types/type";
import Link from "next/link";


interface ExerciseCardProps {
  exercise: IType;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (

    <Link
      href={`/workouts/${exercise.id}`}
      className="group block w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#15161b] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-xl"
    >
    <div className="w-full max-w-95 overflow-hidden rounded-2xl border border-zinc-800 bg-[#15161b] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Image */}
      <div className="relative h-47.5 w-full overflow-hidden">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 380px"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#b6f500] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-sm text-zinc-500">
          {exercise.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-zinc-800" />

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-zinc-400">
          
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <Clock3 size={15} strokeWidth={1.8} />
            <span>{exercise.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <Flame size={15} strokeWidth={1.8} />
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <Star size={15} strokeWidth={1.8} />
            <span>{exercise.rating}</span>
          </div>

        </div>

      </div>
    </div>
    </Link>
  );
};

export default ExerciseCard;