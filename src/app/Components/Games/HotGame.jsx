"use client"
import Link from "next/link"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HotGame = () => {
  return (
    <div className="py-4 mt-2 lg:mt-4">
      <p className="text-[#23ffc8] text-lg lg:text-xl font-bold">গরম খেলা</p>

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
          <Link href="https://hash.shuangzi6688.com/MultiPlayerAviator/?ProductId=GMM4030&Token=9a6db16354eea19d1da1c5a8db62ce8d1febbf84f14eb99feedbfd6a7789fe9108e6ced49fe3281d3b122ccaf0194531&Lang=en-US"> <img src="/games/01.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://d13b5jx16o6hdo.cloudfront.net/1568/1.15.1/index.html?language=en&channel=mobile&gameid=1568&mode=1&token=fcf37cf7a8cf47af8c70dc20cbe929bc&lobbyurl=https%253A%252F%252Fimages.b141847.com%253A42666%252FTCG_PROD_IMAGES%252FBACKURL%252Fback.html&currency=BDT&partner=at-DCC&env=https://d13b5jx16o6hdo.cloudfront.net/api&alwaysredirect=true&disabledfullscreen=True&disabledfullscreen=true"> <img src="/games/02.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://j1l6kur5lgpoc0hgvok.jackywong14792.xyz/htmlgames/game/mgs?productId=41827&casinoId=41827&gameId=wildfireWins&gameName=wildfireWins&clientId=40300&moduleId=18778&clientTypeId=40&xmanEndPoints=https%3A%2F%2Fxplaymobile2206.gameassists.co.uk%2FXMan%2Fx.x&displayName=Wildfire%20Wins&gameTitle=Wildfire%20Wins&helpUrl=&GameVersion=wildfireWins_JFTW_1_6_1_8"> <img src="/games/03.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://download-hongkong.aixbofhe.com/PSS-ON-00160/?access_token=f5-d01168c3cfce-7f18-c264-9b5d-50a4d48c(*--)66f4d378ece46213d37a4d0e63352c5e&lang=eng&ccy=BDT&sm=00&subid=0&fullscr=1&lc=en-US&pm=0&ns=1&origin=https%3a%2f%2fapi-hk3-g1.cdvritjn.com&uid=lvTXb4cB1iqCRni3Gi1SqyhFJzD1tQIGAo8hEhcRpQc%3d&anal=&lb=1&stf=0&showver=1&return_url=https%3a%2f%2fimages.b141847.com%3a42666%2fTCG_PROD_IMAGES%2fBACKURL%2fback.html"> <img src="/games/04.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://l22.l22play.com/web/revo/slots/gc/?extt=21499107-bf14-4677-a715-b9bdd33a6705&lom=0&param7=en-us&rd=https%3a%2f%2fimages.b141847.com%3a42666%2fTCG_PROD_IMAGES%2fBACKURL%2fback.html&gl=YmU0YmVhMzUtNDg4NC00MmIwLWI1YmUtYjhlZjFjOTE0NmFl|MDdrOTkwMTc5MjBAbDJiZHQ2N25x|bDIyVkgzODI5MTkzOTFCRFQ=|aHR0cHM6Ly9pbWFnZXMuYjE0MTg0Ny5jb206NDI2NjYvVENHX1BST0RfSU1BR0VTL0JBQ0tVUkwvYmFjay5odG1s"> <img src="/games/05.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
        </SwiperSlide>

        <SwiperSlide className=" bg-[#013941] max-sm:border-t border-t-2 p-2 rounded-xl">
          <Link href="https://ahk0.amigogaming.cloud/games-alt-wgl/amigo/FruitInvaders/index.html?session=A045EC780DBE4F0699A783686444543F&sign=f46eb4a2aa1baea023cf1e75739699cf&endpointUri=wss://sahk0.amigogaming.cloud/organic2/websocket/endpoint/2&lang=en&replayLink=https%3A%2F%2Fahk0.amigogaming.cloud%2Forganic2%2Freplay%2Flaunch%3Freplay%3Dtrue%26session%3DA045EC780DBE4F0699A783686444543F%26sign%3Df46eb4a2aa1baea023cf1e75739699cf&replaySize=10&exit=https%3A%2F%2Fahk0.amigogaming.cloud%2Forganic2%2Fwebsocket%2Fclose%3Fsession%3DA045EC780DBE4F0699A783686444543F%26sign%3Df46eb4a2aa1baea023cf1e75739699cf%26exit%3Dhttps%253A%252F%252Fimages.b141847.com%253A42666%252FTCG_PROD_IMAGES%252FBACKURL%252Fback.html"> <img src="/games/06.jpg" alt="game" className="w-full mx-auto rounded-md" /></Link>
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

export default HotGame
