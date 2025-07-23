import NewsCard from "../components/GameCard/NewsCard";
import "./MainPage.css"
import {shooterPc,mmorpgPc,anime} from "../store/gameStore"
import { useEffect, useState } from "react";
import axios from "axios";
import Gamecard from "../components/GameCard/Gamecard";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";

const MainView = () =>{
  const [news, setNews] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/latestnews',
    headers: {
      'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
  };
  useEffect(() => {
      axios(options).then(response => {
          setNews([response.data[0],response.data[1],response.data[2]])
        }).catch(function (error) {
          console.error(error);
        });
  }, []);
  return (
    <>
    <div className="mainPageBody">
      <div className="mainPageNews">
        {(news.length>0) && (news.map((item)=>{
          return <div className="mainNews"><NewsCard src={item.thumbnail} newsTitle={item.title} short={item.short_description} id={item.id} /></div>
        }))}
      </div>
      <div className="mainPageSwiper">
        <h2 className="swiperHeader">Shooter</h2>
        <div>
          <Swiper
            width={400}
            freeMode={true}
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, FreeMode]}
            className="mySwiper"
          >
            {shooterPc.length>0 && (shooterPc.map((item)=>{
              return(
                <SwiperSlide>
                  <div className="mainSwiperGame">
                    <Gamecard name={item.name} src={item.src} genre={item.genre} platform={item.platform} id={item.id} />                                      
                  </div>
                </SwiperSlide>
               )
           }))}
          </Swiper>
        </div>
        <h2 className="swiperHeader">MMORPG</h2>
        <div>
        <Swiper
          width={400}
          freeMode={true}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper"
          >
            {mmorpgPc.length>0 && (mmorpgPc.map((item)=>{
              return(
                <SwiperSlide>
                  <div className="mainSwiperGame">
                    <Gamecard name={item.name} src={item.src} genre={item.genre} platform={item.platform} id={item.id} />                                      
                  </div>
                </SwiperSlide>
               )
           }))}
          </Swiper>
        </div>
        <h2 className="swiperHeader">Anime</h2>
        <div>
        <Swiper
          width={400}
          freeMode={true}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper"
          >
            {anime.length>0 && (anime.map((item)=>{
              return(
                <SwiperSlide>
                  <div className="mainSwiperGame">
                    <Gamecard name={item.name} src={item.src} genre={item.genre} platform={item.platform} id={item.id} />                                      
                  </div>
                </SwiperSlide>
               )
           }))}
          </Swiper>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default MainView;

