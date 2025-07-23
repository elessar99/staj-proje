import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gamecard from "../components/GameCard/Gamecard";

const Game = () =>{
    const [scrollControl, setScrollControl] = useState(true);
    const [control, setControl] = useState(false);
    const [allgame, setAllgame] = useState([]);
    const [showgames, setShowgames] = useState([]);
    const [buttonClick, setButtonClick] = useState(false);
    const [adet, setAdet] = useState(13);
    const params = useParams()
    const optionSetting =()=>{
      if (params.category==="all") {
        return {
              method: 'GET',
              url: `https://mmo-games.p.rapidapi.com/games`,
              params: {platform:params.platform},
              headers: {
                'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
              }
            };
          } else {
            return {
              method: 'GET',
              url: `https://mmo-games.p.rapidapi.com/games`,
              params: {platform:params.platform, category: params.category},
              headers: {
                'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
              }
            };
          }
    }
    
    

    const listRefresh = (listLength) =>{
      let counter =0
      if (showgames.length>0) {
        showgames.splice(0,showgames.length)
      }
      allgame.map((item)=>{
        counter++ 
        if (counter<listLength) {
          showgames.push(item)
        }
      })
      console.log(showgames);
    }

    useEffect(() => {
      axios(optionSetting()).then(response => {
            setAllgame(response.data)
            // response.data.map((item)=>{
            //   counter++
            //   if (counter<adet) {
            //     showgames.push(item)
            //   }
            // })
          }).catch(function (error) {
            console.error(error);
          });
    }, [params.category,params.platform]);

    useEffect(() => {
      if (allgame.length>0) {
      setControl(false)
      listRefresh(adet)
      setControl(true)
      setScrollControl(!scrollControl)
      }

    }, [allgame]);


    useEffect(() => {
      console.log("başlattım");
      const handleScroll = (e)=>{
        console.log("handlescrolda");
        const scrollHeight = e.target.documentElement.scrollHeight
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
        if ((currentHeight+1 >= scrollHeight)) {
          let listLength = adet+3
          setAdet(adet+3)
          listRefresh(listLength)
          setTimeout(() => {
            setScrollControl(scrollControl? !scrollControl:!scrollControl)
          }, 100);
          
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll);
      
    }, [scrollControl]);
    
    return (
    <>
    <div className="allGamePage">
      {!control && (<div>
        loading...
      </div>)}
        {control && (<div className="gameList">
        {showgames.length>0 && (showgames.map((item)=>{
            return(
              <>
              <div key={item.id}>
                <Gamecard name={item.title} platform={item.platform} genre={item.genre} src={item.thumbnail} id={item.id} />
              </div>
              </>
            )
        }))}
      </div>)}
    </div>
    
    </>
    
  );
}

export default Game;

