import ExerciseCard from '@/components/shared/ExerciseCard';
import { GetAllData } from '@/lib/dataFetch';
import { IType } from '@/types/type';
import React from 'react';

const WorkoutsPage = async () => {
    const data = await GetAllData();
    console.log(data, "workouts page data");
    return (
        <div className="my-20 mx-5">
      {/* Header */}
      <div className="mx-auto space-y-3 text-center">
        <h1 className="text-4xl font-bold">All Workouts</h1>
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

export default WorkoutsPage;