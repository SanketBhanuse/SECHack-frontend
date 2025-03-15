import Banner from "./Components/Banner";
import ImageWithText from "./Components/ImageWithText";
import Slider from "./Components/Slider";
import cctvImg from './Assets/ImgText.png';
import imgDesk from './Assets/DeskBanner.jpg'
import imgMob from './Assets/MobBanner.jpg'
export default function Home() {
  return (
    <div className="">
      <Banner imgDesk={imgDesk} imgMob={imgMob} />
      <ImageWithText image={cctvImg} />
      <Slider />
      <ImageWithText buttonName={"Go to survellance Page"} buttonPath={'/survellance'} />
    </div>
  );
}
