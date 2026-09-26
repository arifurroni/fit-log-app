"use client";

import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { WorkoutContext } from '@/context/WorkoutContextProvider';

const Navbar = () => {
    const {todayWorkouts } = useContext(WorkoutContext);
    return (

        <nav className='sticky top-0 z-50 bg-base-100'>
            <div className="navbar bg-black shadow-sm shadow-gray-200 flex items-center justify-between px-4 py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-gray-100">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content border border-gray-200 bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/workouts">Workouts</Link></li>
                            <li><Link href="/plans">My Plan</Link></li>
                        </ul>
                    </div>
                    <div className="ml-3">
                        <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="Logo" />
                        <h2 className='text-white'>FITLOG</h2>
                        </Link>
                        {/* <a className="btn btn-ghost text-xl text-gray-200">FITLOG</a> */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/workouts" className='hover:text-lime-400'>Workouts</Link></li>
                        <li><Link href="/plans" className='hover:text-lime-400'>My Plan</Link></li>
                    </ul>
                </div>
                <div className="flex items-center gap-5 text-gray-200">
                    <button className="flex justify-center items-center gap-2">Plan <div className='h-5 w-5 bg-lime-400 rounded-full flex items-center justify-center text-black'>{todayWorkouts.length}</div></button>
                    <button className="flex justify-center items-center gap-2">Saved <div className='h-5 w-5 border border-gray-500 rounded-full flex items-center justify-center text-gray-200'>0</div></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;