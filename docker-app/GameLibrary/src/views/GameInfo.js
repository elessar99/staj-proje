import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../store/reducers/gameInfoActions";
import "./GameInfo.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";

const GameInfo = () =>{
    const infoState=useSelector(state=>state.gameInfo)
    const [control, setControl] = useState(false);
    const [game, setGame] = useState([]);
    const dispatch=useDispatch()

    useEffect(() => {
        if (infoState.id !== 0) {
           const options = {
                method: 'GET',
                url: 'https://mmo-games.p.rapidapi.com/game',
                params: {id: infoState.id},
                headers: {
                'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
                }
            };
            
          axios(options).then(response => {
            setGame(response.data)
            setControl(true)
            console.log(typeof(infoState.id))
            console.log(response.data)
          }).catch(function (error) {
            console.error(error);
          });
        } else {
          console.log("hatalı id "+ infoState.id)  
        }
        
    }, [infoState]);
    
        // <div className="testDeneme">
        // {gameNews.length>0 && (<td dangerouslySetInnerHTML={{__html: gameNews[12].article_content}} />)}
        // </div>
  return (
    <>
    {infoState.show && control &&(<div className="gameInfoBody">
        <div className="overlay" onClick={()=>{
        setControl(false)
        dispatch(setInfo(false,0))
    }}>
        </div>
        <div className="gameInfoContainer" onClick={()=>{
            console.log("clıck oldu");
        }}>
            <div className="gameInfoTop">
                <div className="gameInfoAbout">
                    <div >
                        <h3 style={{margin:"1em 0.5em 0.5em"}}>{game.title}</h3>
                        <div style={{margin:"0.1em 1em"}}>
                            genre : {game.genre} 
                        </div>
                        <div style={{margin:"0.1em 1em"}}>
                            platform : {game.platform}
                        </div>
                        <div style={{margin:"0.1em 1em"}}>
                            publisher : {game.publisher} 
                        </div>
                        <div style={{margin:"0.1em 1em"}}>
                            developer : {game.developer}
                        </div>
                    </div>
                    {(game.minimum_system_requirements!==undefined)&&(<div className="gameInfoOS">
                        <h3 style={{margin:"1em 0.5em 0em"}}>Minimum System Requirements</h3>
                        <ul style={{listStyleType:"none",padding:"0 1em 0"}}>
                            {(game.minimum_system_requirements.os!==undefined)&&(<li>os : {game.minimum_system_requirements.os}</li>)}
                            {(game.minimum_system_requirements.processor!==undefined)&&(<li>processor : {game.minimum_system_requirements.processor}</li>)}
                           {(game.minimum_system_requirements.memory!==undefined)&&( <li>memory : {game.minimum_system_requirements.memory}</li>)}
                            {(game.minimum_system_requirements.graphics!==undefined)&&(<li>graphics : {game.minimum_system_requirements.graphics}</li>)}
                            {(game.minimum_system_requirements.storage!==undefined)&&(<li>storage : {game.minimum_system_requirements.storage}</li>)}
                        </ul>
                    </div>)}
                </div>
                <div className="gameInfoScreenshots">
                    <Swiper
                        freeMode={true}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation, FreeMode]}
                        className="mySwiper"
                    >
                        {game.screenshots.length>0 && (game.screenshots.map((item)=>{
                            return(
                                <SwiperSlide>
                                    <div className="screenshotContainer">
                                        <img className="gameInfoScreenshot" src={item.image}/>                                        
                                    </div>
                                    </SwiperSlide>
                            )
                        }))}
                    </Swiper>
                </div>
            </div>
            <div className="gameInfoDescription">
                <td dangerouslySetInnerHTML={{__html: game.description}} />
            </div>
            <div style={{margin:"0.5em 0 1em",display:"flex",justifyContent:"center",fontSize:"1.2em"}}>
                <a href={game.game_url} style={{textDecoration:"none", color:"black", border:"3px black solid",borderRadius:"20px",padding:"0 1em" }} target="_blank">Go to Game</a>
            </div>
        </div>
    </div>)}
    </>
    
  );
}

export default GameInfo;

