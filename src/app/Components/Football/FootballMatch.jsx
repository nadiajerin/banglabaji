"use client"
import Link from "next/link"
import { IoIosFootball } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";


const FootballMatch = () => {

  const [match, setMatch] = useState([]);

  // console.log("match", match)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/info");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setMatch(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-4 mt-2 lg:mt-4">
      <p className="text-[#23ffc8] text-lg lg:text-xl font-bold">ফুটবল</p>

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
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 1.1,
          },
          0: {
            slidesPerView: 1.1,
          }
        }}

        className="mySwiper mt-4"
      >

        {match.map(m => (
          <SwiperSlide key={m._id} className="bg-[#013941] max-sm:border-t border-t-2 px-2 py-4 rounded-xl">

            <div className="flex items-center justify-between">
              <IoIosFootball className="text-2xl" />
              <p className="text-center">{m?.leageName}</p>
            </div>

            <div className="flex justify-between items-center mt-6 md:px-4">
              {/* flex01 */}
              <div className="">
                <p>{m?.team1}</p>
                <img src={m?.team1img} alt="" className="w-12 h-12 mx-auto mt-2 rounded-full" />
              </div>

              {/* flex02 */}
              <div className="flex gap-2 items-center">
                <p className="text-xl">vs</p>
              </div>

              {/* flex03 */}
             <div className="">
                <p>{m?.team2}</p>
                <img src={m?.team2img} alt="" className="w-12 h-12 mx-auto mt-2 rounded-full" />
              </div>

            </div>

            <div className="mt-2">
              <p className="text-center">{m?.date}</p>
            </div>

             <div className="flex justify-between items-center mt-6 md:px-2 ">
              {/* flex01 */}
              <div className="bg-[#013941] shadow-sm shadow-black py-2 px-4 rounded-2xl">
                <p>W1  {m?.odds1}</p>
              </div>

              {/* flex02 */}
              <div className="bg-[#013941] shadow-sm shadow-black py-2 px-4 rounded-2xl">
                <p>X  {m?.draw}</p>
              </div>

              {/* flex03 */}
              <div className="bg-[#013941] shadow-sm shadow-black py-2 px-4 rounded-2xl">
                <p>W2  {m?.odds2}</p>
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default FootballMatch
