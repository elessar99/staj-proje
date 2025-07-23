import axios from "axios";
import { useEffect, useState } from "react";
import Gamecard from "../components/GameCard/Gamecard";
import "./GameSearch.css"

const GameSearch = () =>{
    const [scrollControl, setScrollControl] = useState(true);
    const [control, setControl] = useState(false);
    const [allgame, setAllgame] = useState([]);
    const [searchGameList, setSearchGameList] = useState([]);
    const [showgames, setShowgames] = useState([]);
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(13);
    const [notFound, setNotFound] = useState(false);
    const options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/games',
        headers: {
          'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
          'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
      };

    const listRefresh = (listLength) =>{
      let counter =0
      if (showgames.length>0) {
        showgames.splice(0,showgames.length)
      }
      searchGameList.map((item)=>{
        counter++ 
        if (counter<listLength) {
          showgames.push(item)
        }
      })
      console.log(showgames);
    }

    useEffect(() => {
        axios(options).then(response => {
            setAllgame(response.data)
          }).catch(function (error) {
            console.error(error);
          });
    }, []);
    
    useEffect(() => {
        setSearchGameList(allgame)
    }, [allgame]);

    useEffect(() => {
      if (searchGameList.length>0) {
      setControl(false)
      listRefresh(count)
      setControl(true)
      setScrollControl(!scrollControl)
      }

    }, [searchGameList]);

    useEffect(() => {
        setCount(13)
        if (search==="") {
            setSearchGameList(allgame)
            setNotFound(false)
        } else {
            let list = []
            allgame.forEach(item =>{
                let i = item.title.toLowerCase().trim()
                let j = search.toLowerCase().trim()
                if (i.includes(j)) {
                    list.push(item)
                }
            })
            if (list.length>0) {
                setNotFound(false)
                setSearchGameList(list)
            } else {
                setSearchGameList(allgame)
                setNotFound(true)
            }
        }
    }, [search]);

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
    <div className="searchPage">
        <div className="searchBar">
            <input className="searchInput"type="text" placeholder="Game Name" onChange={(e)=>{
                setSearch(e.target.value)
            }}/>
            {notFound&&(<div className="searchNotFound">
                Game Not Found
            </div>)}
        </div>
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

export default GameSearch;