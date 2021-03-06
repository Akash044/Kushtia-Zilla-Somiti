import { useState } from 'react'
import Link from 'next/link'

const mainNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="flex justify-between p-4 bg-green-400">
                <div >
                    <h2 > Greater Kushtia Zilla Somoiti</h2>
                </div>
                <div>
                    <ul className="flex">
                        <li className="px-2 cursor-pointer hover:text-lg transform hover:duration-300 smMxW:hidden"> Home</li>
                        <li className="px-2 cursor-pointer hover:text-lg transform hover:duration-300 smMxW:hidden"> Admin</li>
                        <li className="px-2 cursor-pointer hover:text-lg transform hover:duration-300 smMxW:hidden"> Archive</li>
                        <li className="px-2 cursor-pointer hover:text-lg transform hover:duration-300  smMxW:hidden" > <Link href="/Login"> Login </Link></li>
                        <li className="px-2 cursor-pointer hover:text-lg transform hover:duration-300 hover:bg-red-700 hover:rounded-md smMxW:hidden"> Register</li>
                        {
                            !isOpen ? <li className="px-2 cursor-pointer" onClick={() => setIsOpen(true)}><img src="https://img.icons8.com/material-outlined/24/000000/menu--v3.png" /></li> : <li className="px-2 cursor-pointer" onClick={() => setIsOpen(false)} ><img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" className="h-6 w-6" /></li>
                        }


                    </ul>
                </div>
            </header>
            <div className="relative p-5">
                {isOpen ?
                    <div className="absolute top-1 right-1 border-red-700">
                        <ul className="bg-gray-400 p-10 rounded-md">
                            <li className="sm:hidden cursor-pointer hover:bg-purple-700 hover:p-2 hover:px-4 hover:text-white transform duration-300 rounded-md"><Link href="/"> Home </Link></li>
                            <li className="sm:hidden">Admin</li>
                            <li className="sm:hidden"> Archive</li>
                            <li className="sm:hidden cursor-pointer hover:bg-purple-700 hover:p-2 hover:px-4 hover:text-white transform duration-300 rounded-md"> <Link href="/Login"> Login </Link></li>
                            <li className="sm:hidden cursor-pointer hover:bg-purple-700 hover:p-2 hover:px-4 hover:text-white transform duration-300 rounded-md"><Link href="/AddPeoples"> Register </Link></li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                    : <div>

                    </div>
                }
            </div>
        </>
    );
}

export default mainNavBar;