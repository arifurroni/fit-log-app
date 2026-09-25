// import { GetAllData } from '@/lib/dataFetch';
// import { IType } from '@/types/type';
// import React from 'react';

// type TExerciseDetailsProps = {
//     params: {
//         id: string;
//     };
// };

// const ExerciseDetails = async ({params}: TExerciseDetailsProps) => {

//     const { id } = await params;
//     const AllExercises = await GetAllData();
//     const exercise = AllExercises.find((exercise: IType) => exercise.id === Number(id));
//     console.log(exercise);
//     return (
//         <div>
//             <h1>Exercise Details Page {id}</h1>
//         </div>
//     );
// };

// export default ExerciseDetails;