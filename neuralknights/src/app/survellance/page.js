import React from 'react'
import Banner from '../Components/Banner'
import imgDesk from '../Assets/ServillanceDesk.png'
import imgMob from '../Assets/ServillanceMob.jpg'
import ImageDragger from '../Components/ImageDragger'
const page = () => {
    return (
        <div>
            <Banner imgDesk={imgDesk} imgMob={imgMob} />
            <ImageDragger />
        </div>
    )
}

export default page
