import Image from 'next/image'
import React from 'react'

const Banner = ({ imgMob, imgDesk }) => {
    return (

        <div className='relative '>

            {/* Desktop Image (hidden on mobile) */}
            <Image className="w-full h-auto hidden md:block" src={imgDesk} alt="Desktop Banner" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#E8EEF1] from-0%" /> */}

            {/* Mobile Image (hidden on larger screens) */}
            <Image className="w-full h-auto block md:hidden" src={imgMob} alt="Mobile Banner" />
        </div>
    )
}

export default Banner;



