"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
const ImageWithText = ({ image, buttonName, buttonPath }) => {
    const route = useRouter();
    const Navigate = () => {
        route.push(buttonPath);
    }
    return (
        <div>
            <div className="content  block md:flex items-center justify-center">
                <div className={`ContentBlock ${image ? "w-[100%] md:w-[60%]" : "w-[100%] md:w-[80%]"} p-5 text-center`}>
                    <div className="heading text-[32px] font-extrabold mb-5 text-[#057DCD]">Heading Line Is Here </div>
                    <div className="subheading text-[20px] font-bold mb-5 text-[#1E3D58]"> Sub heading Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, deleniti!</div>
                    <div className="description text-[#1E3D58] mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo, dicta maxime consectetur excepturi consequatur corrupti quas nihil odit laudantium consequuntur. Veritatis molestias magni vel iure natus amet facilis eaque cupiditate reiciendis. Libero modi itaque eius adipisci culpa omnis nam quod, tempore labore beatae consequatur laudantium voluptatum voluptatem aliquid repudiandae.</div>
                    {buttonName && buttonPath &&
                        <button className='px-5 py-2 bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black' onClick={Navigate}>{buttonName}</button>
                    }
                </div>
                {
                    image &&
                    <div className="ImageBlock w-[100%] md:w-[40%] p-2 md:p-5">
                        <Image className="rounded-md" src={image} alt='Image with text'></Image>
                    </div>
                }
            </div>
        </div>
    )
}

export default ImageWithText
