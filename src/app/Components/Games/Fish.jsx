"use client"
import Link from "next/link"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Fish = () => {
  return (
    <div className="py-4 mt-2 lg:mt-4">
      <p className="text-[#23ffc8] text-lg lg:text-xl font-bold">বিখ্যাত গেম</p>

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
            slidesPerView: 9,
          },
          768: {
            slidesPerView: 7,
          },
          480: {
            slidesPerView: 3.4,
          },
          0: {
            slidesPerView: 3.4,
          }
        }}

        className="mySwiper mt-4"
      >
        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://gamessea.kaga88.com/?p=TCGF5BDT&loc=en&t=c3c4b95eef138e73c3416099f3a403b6&u=07k99017920&g=RoadHunting&ak=4ACAC8949F999722B02B20D4263DD72B&l=-1&da=t6798538088&cr=BDT"> <img src="/games/11.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://gamessea.kaga88.com/?p=TCGF5BDT&loc=en&t=0a13783539a5e09c8f6a2810b34d1358&u=07k99017920&g=Genie&ak=4ACAC8949F999722B02B20D4263DD72B&l=-1&da=t6798538088&cr=BDT"> <img src="/games/12.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://gamessea.kaga88.com/?p=TCGF5BDT&loc=en&t=c3d4b5caf90e16bddef1518b5ebfa59f&u=07k99017920&g=CursedSeas&ak=4ACAC8949F999722B02B20D4263DD72B&l=-1&da=t6798538088&cr=BDT"> <img src="/games/13.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://gamessea.kaga88.com/?p=TCGF5BDT&loc=en&t=f7624f3cde5cc640debfa34970b34ae0&u=07k99017920&g=GangsterOverlord&ak=4ACAC8949F999722B02B20D4263DD72B&l=-1&da=t6798538088&cr=BDT"> <img src="/games/14.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://gamessea.kaga88.com/?p=TCGF5BDT&loc=en&t=6eb199d1f05d1528bb22f7c580870d24&u=07k99017920&g=UnderseaKiller&ak=4ACAC8949F999722B02B20D4263DD72B&l=-1&da=t6798538088&cr=BDT"> <img src="/games/15.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://gamessea.kaga88.com/?p=TCGF5BDT&loc=en&t=68541d7ffe8451c816fe6d3de7c47ed6&u=07k99017920&g=MonsterShooter&ak=4ACAC8949F999722B02B20D4263DD72B&l=-1&da=t6798538088&cr=BDT"> <img src="/games/16.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://download-hongkong.aixbofhe.com/PSS-ON-00159/?access_token=f5-e7355e34733c-d529-6554-3ee2-0336b48a(*--)66f4d378ece46213d37a4d0e63352c5e&lang=eng&ccy=BDT&sm=00&subid=0&fullscr=1&lc=en-US&pm=0&ns=1&origin=https%3a%2f%2fapi-hk3-g1.cdvritjn.com&uid=lvTXb4cB1iqCRni3Gi1SqyhFJzD1tQIGAo8hEhcRpQc%3d&anal=&lb=1&stf=0&showver=1&return_url=https%3a%2f%2fimages.b141847.com%3a42666%2fTCG_PROD_IMAGES%2fBACKURL%2fback.html"> <img src="/games/07.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://skylinetcga.evo-games.com/frontend/evo/r2/#provider=evolution&ua_launch_id=1843fa82a430e4c284df6462&game=funkytime&table_id=FunkyTime0000001&app="> <img src="/games/08.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://ht2.bt3653.fun/h5/QUIxNTIy?back_url=https://images.b141847.com:42666/TCG_PROD_IMAGES/BACKURL/back.html&cur_type=1&lang=en&token=14d4e5da45b7e439379e&welcome_icon=https://nimg.g8game.net/btgaming/logo/en/welcome.png"> <img src="/games/09.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Fish
