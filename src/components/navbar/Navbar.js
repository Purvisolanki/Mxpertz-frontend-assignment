import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChange = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='relative'>
                <header className='bg-indigo-900 bg-opacity-50 fixed top-0 left-0 w-full z-10'>
                    <div className='container mx-auto flex justify-between p-5 items-center'>
                        {/* LOGO */}
                        <div>
                            <Link to='/'>
                                <h3 className='font-bold text-2xl text-white'>
                                   Brainy Lingo
                                </h3>
                            </Link>
                        </div>

                        {/* NAVIGATION */}
                        <div className='hidden md:block text-white'>
                            <ul className='flex items-center text-lg justify-center font-semibold'>
                                <Link to='/'>
                                    <li className='mr-5 hover:text-white cursor-pointer'>Home</li>
                                </Link>
                                <li className='mr-5 hover:text-white cursor-pointer'>Leaderboard</li>
                                <li className='mr-5 hover:text-white cursor-pointer'>Daily Quiz</li>
                            </ul>
                        </div>

                        {isOpen ? (
                            <div className='transition ease-in duration-300'>
                                <ul className='flex flex-col gap-10 text-2xl absolute top-[73px] z-10 left-0 h-screen bg-red-500 w-full text-white items-center justify-center font-semibold'>
                                    <Link to='/'>
                                        <li className='mt-5 hover:text-gray-900 cursor-pointer'>Home</li>
                                    </Link>
                                    <li className='mt-5 hover:text-white cursor-pointer'>Leaderboard</li>
                                    <li className='mt-5 hover:text-white cursor-pointer'>Daily Quiz</li>
                                </ul>
                                <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer' onClick={toggleChange}>
                                    <RxCross2 size={20} />
                                </button>
                            </div>
                        ) : (
                            ''
                        )}

                        {/* LOGIN BUTTON */}
                        <div className='flex justify-center items-center gap-3'>
                        <button className="mx-2 px-4 py-2 bg-blue-600 text-white rounded-full">Sign Out</button>
                            {isOpen ? (
                                ''
                            ) : (
                                <button className='block md:hidden' onClick={toggleChange}>
                                    <GiHamburgerMenu size={25} />
                                </button>
                            )}
                        </div>
                    </div>
                </header>

                <div className='w-full h-14 relative'>
                    <img
                        src='assets/space.jpeg'
                        alt='background'
                        className='w-full h-20 object-cover'
                    />
                </div>
            </div>
        </>
    );
};

export default Navbar;
