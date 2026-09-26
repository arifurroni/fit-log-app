"use client";

import { IType } from '@/types/type';
import React, { createContext, ReactNode, useState } from 'react';

type TWorkoutContext = {
    todayWorkouts: IType[];
    setTodayWorkouts: React.Dispatch<React.SetStateAction<IType[]>>;
};

export const WorkoutContext = createContext<TWorkoutContext>({
    todayWorkouts: [],
    setTodayWorkouts: () => {},
});

const WorkoutContextProvider = ({ children }: { children: ReactNode }) => {
    const [todayWorkouts, setTodayWorkouts] = useState<IType[]>([]);

    const sharedData = { 
        todayWorkouts,
        setTodayWorkouts,
    };

    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};


export default WorkoutContextProvider;