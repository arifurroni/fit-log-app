import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/banner.png';

const BannerPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl bg-[#15171D] p-4 md:p-10 text-white">
            <div className="grid gap-4 md:w-1/2">
                <p className='text-lime-400 text-[10px]'>WORKOUT LIBRARY</p>
            <h1 className='text-4xl font-bold'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
            <p className="text-[#9CA3AF]">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today&apos;s plan, and watch the week&apos;s work add up.</p>

            <button className="bg-lime-400 text-black hover:bg-lime-500 py-2 px-4 rounded-lg w-50">Browse Workouts</button>
            </div>

            <div>
                <Image src={bannerImage} alt="Banner Image" />
            </div>
        </div>
    );
};

export default BannerPage;