"use client";

import { IType } from '@/types/type';
import { useContext } from 'react';

import { CalendarPlus } from 'lucide-react';
import React from 'react';
import { WorkoutContext } from '@/context/WorkoutContextProvider';

const TodayPlanButton = ({workout}: {workout: IType}) => {
    const {todayWorkouts, setTodayWorkouts } = useContext(WorkoutContext);
    console.log(todayWorkouts, setTodayWorkouts);

    const handleAddToTodayPlan = () => {
        console.log("Add to today plan button triggered", workout)
        setTodayWorkouts([...todayWorkouts, workout]);
    }

    return <button className="mt-4 inline-block rounded-lg bg-lime-400 px-4 py-2 text-black hover:bg-lime-500 mr-2 hover:cursor-pointer" onClick={() => handleAddToTodayPlan()}>
                        <div className="flex items-center gap-2">
                            <div>
                                <CalendarPlus size={16} />
                            </div>
                   
                        <span>Add to today&apos;s plan</span>
                        </div>
                    </button>
};

export default TodayPlanButton;