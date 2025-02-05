
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const bannerImage = [
        { image: "https://i.ibb.co.com/Pm7Z9BZ/sea.jpg",
            heading:"Unwind by the Ocean",
            Description: "Wake up to the serene sounds of the sea and enjoy a relaxing beachfront getaway."
         },
        { image: "https://i.ibb.co.com/khRpsyn/sea1.jpg" ,
            heading: "Redefine Your Stay",
            Description: "From vibrant cityscapes to peaceful nature retreats, our rooms offer the best views for your stay."
        },
        { image: "https://i.ibb.co.com/zF07BHB/top-floor.jpg",
            heading:"Discover Luxurious Stays",
            Description: "Experience the perfect blend of comfort and elegance in our premium suites with breathtaking views."
         },
        { image: "https://i.ibb.co.com/W6NG3Qy/redroom.jpg" ,
            heading:"A Room with a View",
            Description:"Indulge in unparalleled luxury and modern amenities for a memorable staycation."
        },
        { image: "https://i.ibb.co.com/qrMLvmh/jp-image.jpg",
            heading:"Your Journey Begins Here",
            Description:"Book your perfect escape, whether it’s a cozy hideaway or a grand adventure, right at your fingertips."
         }
    ];

    return (
        <div className=''>
             
            <Swiper navigation={true}
  modules={[Navigation, Autoplay]}
autoplay={{
    delay: 3000, // Change slide every 3 seconds
    disableOnInteraction: false, // Keep autoplay even after user interacts
  }} className="mySwiper max-w-screen-2xl   max-h-screen ">
                {bannerImage.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <img className='h-full  brightness-90 blur-[3px] object-cover' src={banner.image} alt={`Banner ${index + 1}`} />
                       <div  className='absolute   flex flex-col  items-start top-5 border-2 border-red-500 sm:top-0 left-0 pl-16 sm:w-5/6 md:w-3/5 xl:w-1/2  h-full justify-center    bg-gradient-to-r from-purple-600 to-transparent  '>
                       <h1 data-aos="fade-right" data-aos-duration="1000" className='text-slate-200 font-bold text-xl sm:text-4xl lg:text-5xl mt-5'>{banner.heading}</h1>
                       <p data-aos="fade-right" data-aos-duration="1000" className='text-slate-300 text-xs sm:text-base lg:text-xl  text-left mt-2 ms:mt-10 mr-10'>{banner.Description}</p>
                       <Link data-aos="fade-right" data-aos-duration="1000" to='/signup' className='banner-btn text-sm md:text-lg font-semibold w-28 sm:w-40 h-11  mt-5 py-3 sm:py-2'>Sign Up Now!</Link>
                       </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        
        </div>
       
    );
};

export default Banner;
