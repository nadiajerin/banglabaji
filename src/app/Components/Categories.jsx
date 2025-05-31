"use client"

// icon
import { FaFire } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { RiLiveFill } from "react-icons/ri";
import { IoIosFootball } from "react-icons/io";
import { TbCricket } from "react-icons/tb";
import { FaFish } from "react-icons/fa6";
import { SiTrustpilot } from "react-icons/si";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from "next/link";

const Categories = () => {

    return (
        <div>
            <div >
                <Swiper
                    slidesPerView={'10'}
                    spaceBetween={10}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: false,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        1040: {
                            slidesPerView: 8,
                        },
                        768: {
                            slidesPerView: 7,
                        },
                        480: {
                            slidesPerView: 5.4,
                        },
                        0: {
                            slidesPerView: 5.4,
                        }
                    }}

                    className="mySwiper "
                >
                    <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
                        <Link href="/">
                            <FaFire className="mx-auto max-sm:text-xl text-2xl" />
                            <p className="text-center mt-1 max-sm:text-xs">গরম</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
                        <Link href="/">
                            <MdOutlineFavorite className="mx-auto max-sm:text-xl text-2xl" />
                            <p className="text-center mt-1  max-sm:text-xs">প্রিয়</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
                        <Link href="/">
                            <FaCircleDollarToSlot className="mx-auto max-sm:text-xl text-2xl" />
                            <p className="text-center mt-1 max-sm:text-xs">স্লট</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
                        <Link href="/">
                            <RiLiveFill className="mx-auto max-sm:text-xl text-2xl" />
                            <p className="text-center mt-1 max-sm:text-xs">লাইভ</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
                        <Link href="/">
                            <IoIosFootball className="mx-auto max-sm:text-xl text-2xl" />
                            <p className="text-center mt-1 max-sm:text-xs">ফুটবল</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
                        <Link href="/">
                            <TbCricket className="mx-auto max-sm:text-xl text-2xl" />
                            <p className="text-center mt-1 max-sm:text-xs">ক্রিকেট</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
                        <Link href="/">
                            <FaFish className="mx-auto max-sm:text-xl text-2xl" />
                            <p className="text-center mt-1 max-sm:text-xs">মাছ ধরা</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
                        <Link href="/">
                            <SiTrustpilot  className="mx-auto max-sm:text-xl text-2xl" />
                            <p className="text-center mt-1 max-sm:text-xs">লটারী</p>
                        </Link>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Categories
