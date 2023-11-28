// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Swiperss = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    loop={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        
    
    navigation={true} modules={[Navigation,Autoplay]}
    
    className='w-[900px] mx-auto'
  >
    <SwiperSlide ><img className='mx-auto' src="https://i.ibb.co/kBGZkTM/bkash-logo-0.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='mx-auto' src="https://i.ibb.co/gMdNv66/download-15.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='mx-auto' src="https://i.ibb.co/FwTTq8t/download-16.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='mx-auto' src="https://i.ibb.co/VtkX8s6/download-5.png" alt="" /></SwiperSlide>
    
  </Swiper>
  )
}

export default Swiperss