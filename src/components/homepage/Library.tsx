import { IType } from "@/types/type";
import React from "react";
import ExerciseCard from "../shared/ExerciseCard";

const GetAllData = async () => {
  const response = await fetch("http://localhost:3000/data.json");
  const data = await response.json();
  return data;
};

const LibraryPage = async () => {
  const data = await GetAllData();

  return (
    <div className="my-20 mx-5">
      {/* Header */}
      <div className="mx-auto space-y-3">
        <h1 className="text-4xl font-bold">THE LIBRARY</h1>
        <p className="text-[15px]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 mx-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((exercise: IType) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;