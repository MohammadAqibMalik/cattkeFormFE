"use client"
import React, { useState } from 'react';


const Navbar = () => {
    const [showSettingMenu, setShowSettingMenu] = useState(false)

    return (
        <div className='py-4 border-b-2'>
            <div className='flex justify-between items-center px-20'>
                <div>
                    <div
                        className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-around">
                        <p className='font-semibold text-2xl' style={{color: '#ff385c'}}>airbnb</p>
                    </div>
                </div>
                <div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4 border border-black rounded-full p-1">
                            <a href="#" className="text-black px-3 py-2 text-sm font-medium border-r-2" aria-current="page">Anywhere</a>
                            <a href="#" className="text-black hover:text-zinc-400 px-3 py-2 text-sm font-medium border-r-2">AnyWeek</a>
                            <a href="#" className="text-gray-700 hover:text-zinc-400 px-3 py-2 text-sm font-medium">Add Guest</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="absolute justify-end right-0 flex pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">
                            <i className="fa-solid fa-bars"></i>
                            <div
                                onBlur={() => setShowSettingMenu(false)}
                                onClick={() => setShowSettingMenu(s => !s)}
                                className='border flex 
                            justify-end  items-center rounded-full
                             py-2 gap-4 px-3 cursor-pointer
                              '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <button
                                    type="button" className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                            <div className={`${showSettingMenu ? 'block' : 'hidden'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>{<a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>}                                   <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                    </div></div>
            </div>
        </div>
    )
}

export default Navbar;
