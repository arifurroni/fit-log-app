"use client";

import { IType } from '@/types/type';
import { WorkoutContext } from '@/context/WorkoutContextProvider';
import React, { useContext } from 'react';
import ExerciseCard from '@/components/shared/ExerciseCard';

const MyPlanPage = () => {
    const {todayWorkouts } = useContext(WorkoutContext);
    return (
        <div className="my-10 mx-5">
      {/* Header */}
      <div className="mx-auto space-y-1">
        <h1 className="text-2xl font-bold">MY PLAN</h1>
        <p className="text-[12px]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Cards */}
        {todayWorkouts.length > 0 ? (
      <div className="mt-10 mx-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {todayWorkouts.map((exercise: IType) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
      </div>
        ) : (
          <p className="text-center font-bold text-lg text-gray-500 mt-20">No workouts added to your plan yet.</p>
        )}
    </div>
    );
};

export default MyPlanPage;