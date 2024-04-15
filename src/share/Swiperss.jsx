// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Scard from "./Scard";

const Swiperss = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className=" lg:h-[500px]  mx-auto"
    >
      <SwiperSlide>
      <div className="p-4 ml-20 lg:h-[380px] mt-16 max-w-[500px] md:min-w-[50%]">
          <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-slate-800 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6 text-gray-500">
              {/* {each?.testimonialDescription} */}
              I appreciate the supportive community and diverse discussions. The platform fosters a sense of belonging, with users readily offering assistance and guidance. It's a space where the principle of reciprocity is embraced, making every act of kindness feel like an investment in a collective well-being.
            </p>
            <a className="inline-flex items-center">
              <img
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                src={`https://i.ibb.co/RSnxp6s/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg`}
                alt="carousel navigate ui"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  {/* {each.name} */}
                Smith
                </span>
                <span className="text-gray-500 text-sm">
                  {/* {each?.designation} */}
                  Designer
                </span>
              </span>
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Scard work={'developer'} name={'Akash Islam'} Description={'This forum site is a haven for knowledge seekers and community enthusiasts alike. Its vibrant community fosters meaningful discussions and connections across diverse topics. With a culture of generosity and mutual support, every interaction feels like a step towards personal growth and collective empowerment.'} images={'https://i.ibb.co/xMFC9t2/c3d07e39a035031673b8a7cec70a5e3f.jpg'}></Scard>
        
      </SwiperSlide>
      <SwiperSlide>
      <Scard work={'Student'} name={'Abir Islam'} Description={"This forum site offers a welcoming atmosphere for diverse discussions, fostering a sense of belonging and mutual support. It's a digital sanctuary where every user's contribution is valued, creating a vibrant community of shared knowledge and camaraderie."} images={'https://i.ibb.co/fdVFVY8/istockphoto-611778400-170667a.jpg'}></Scard>
        
      </SwiperSlide>
      <SwiperSlide>
      <Scard  work={'Entrepreneur'} name={'Noyon Islam'} Description={'This forum site is a treasure trove of insights and connections, where users exchange ideas with enthusiasm and respect. The supportive environment encourages active participation and fosters a sense of belonging among members. Navigating its diverse discussions feels like embarking on a journey of continuous learning and mutual growth.'} images={'https://i.ibb.co/hLyThwc/download-9.jpg'}></Scard>
        
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiperss;
