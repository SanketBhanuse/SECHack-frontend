import React from 'react'
import logo from '../Assets/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
    return (
        <div>

            <footer className="bg-[#1E3D58] text-[#E8EEF1]">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 block md:flex  justify-between items-center">
                    <div className=' flex flex-col justify-center items-center p-2 w-full md:w-[40%]'>
                        <Image className="w-28" src={logo} alt="logo" />
                        <div className='text-[22px] font-bold text-[#F2EFDF]'>Neuralknights</div>
                    </div>
                    <div className="content w-full md:w-[60%] flex justify-center items-center flex-col gap-5">
                        <div className="description text-center w-[100%] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus impedit iusto quaerat odio consectetur sed eos quidem, molestias quos quia a? Nam, aperiam cum!</div>
                        <div className="Links">
                            <div className="flex   mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-center items-center">
                                <Link className='block py-2 pr-4 pl-3 text-gray-700 border-b border-[#E8EEF1] hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700' href={"/"}>Home</Link>
                                <Link className='block py-2 pr-4 pl-3 text-gray-700 border-b border-[#E8EEF1] hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700' href={"/survellance"}>survellance</Link>
                                <Link className='block py-2 pr-4 pl-3 text-gray-700 border-b border-[#E8EEF1] hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700' href={"/about"}>About</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright bg-[#1E3D58]">
                <hr className="  sm:mx-auto border-[#E8EEF1] " />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400 py-3">© 2025 <a href="" className="hover:underline">NeuralKnights</a>. All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Footer
