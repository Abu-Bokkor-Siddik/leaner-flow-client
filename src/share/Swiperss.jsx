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
    <SwiperSlide ><img className='mx-auto' src="https://i.ibb.co/MfttmVk/Assignment-Writing.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='mx-auto' src="https://i.ibb.co/MfttmVk/Assignment-Writing.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='mx-auto' src="https://i.ibb.co/MfttmVk/Assignment-Writing.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='mx-auto' src="https://i.ibb.co/MfttmVk/Assignment-Writing.jpg" alt="" /></SwiperSlide>
    
  </Swiper>
  )
}

export default Swiperss