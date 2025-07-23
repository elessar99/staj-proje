import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../components/GameCard/NewsCard";
import "./GameNews.css"

const GameNews = () =>{
    const [control, setControl] = useState(false);
    const [gameNews, setGameNews] = useState([]);
    const [showNews, setshowNews] = useState([]);
    const [count, setCount] = useState(7);
    const [scrollControl, setScrollControl] = useState(true);
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
            setGameNews(response.data)
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }, []);

    // <div className="testDeneme">
    // {gameNews.length>0 && (<td dangerouslySetInnerHTML={{__html: gameNews[12].article_content}} />)}
    // </div>

    const listRefresh = (listLength) =>{
      let counter =0
      if (showNews.length>0) {
        showNews.splice(0,showNews.length)
      }
      gameNews.map((item)=>{
        counter++ 
        if (counter<listLength) {
          showNews.push(item)
        }
      })
      console.log(showNews);
    }


    useEffect(() => {
      if (gameNews.length>0) {
      setControl(false)
      listRefresh(count)
       setControl(true)
      setScrollControl(!scrollControl)
      }

    }, [gameNews]);


    useEffect(() => {
      const handleScroll = (e)=>{
        const scrollHeight = e.target.documentElement.scrollHeight
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
        if ((currentHeight+1 >= scrollHeight)) {
          let listLength = count+3
          setCount(count+3)
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
    <div className="newsPage">
      {showNews.length>0 && (showNews.map((item)=>{
        return(
          <div className="newsContainer">
            <NewsCard src={item.thumbnail} newsTitle={item.title} short={item.short_description} id={item.id} />
          </div>
        )
      }))}
    </div>
    
    </>
    
  );
}

export default GameNews;

