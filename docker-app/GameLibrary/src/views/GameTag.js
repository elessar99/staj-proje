
import axios from "axios";
import { useEffect, useState } from "react";
import Gamecard from "../components/GameCard/Gamecard";
import "./GameTag.css"
const GameTag = () =>{
    const [gameList, setGameList] = useState([]);
    const [state, setState] = useState([]);
    const [scrollControl, setScrollControl] = useState(true);
    const [control, setControl] = useState(false);
    const [showgames, setShowgames] = useState([]);
    const [count, setCount] = useState(13);
    const [emptyList, setEmptyList] = useState(false);
    const listControl = (item)=>{
        if (state.length>0) {
            let c = true
            state.forEach((i,index)=>{
                if (i===item) {
                    c = false
                    state.splice(index,1)
                    setState([...state])
                }
            })
            if (c) {
                setState([...state, item])
            }
        } else {
            setState([...state, item])
        }
    }
    useEffect(() => {
        if (state.length>0) {
            const tags = ()=>{
                let tag = "";
                state.forEach((item,index)=>{
                    if (index===0) {
                        tag=item
                    } else {
                        tag=tag+"."+item
                    }
                })
                return tag
            }
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
                params: {tag: tags()},
                headers: {
                  'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
                  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
              };
              axios(options).then(response => {
                if (response.data.length>0) {
                    setEmptyList(false)
                    setGameList(response.data)
                    console.log("yeni gamelist " ,response.data);
                } else {
                    setEmptyList(true)
                }
              }).catch(function (error) {
                console.error(error.response.data.message);
              });
        } else {
            const options = {
                method: 'GET',
                url: 'https://mmo-games.p.rapidapi.com/games',
                headers: {
                  'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
                  'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
                }
              };
              axios(options).then(response => {
                setGameList(response.data)
              }).catch(function (error) {
                console.error(error.response.data.message);
              });
        }
    }, [state]);

    const listRefresh = (listLength) =>{
        let counter =0
        if (showgames.length>0) {
          showgames.splice(0,showgames.length)
        }
        gameList.map((item)=>{
          counter++ 
          if (counter<listLength) {
            showgames.push(item)
          }
        })
      }

    useEffect(() => {
        if (gameList.length>0) {
        setControl(false)
        listRefresh(count)
        setControl(true)
        setScrollControl(!scrollControl)
        }
      }, [gameList]);

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
      <div className="gameTagBody">
        <h2 style={{color:"red"}}>Tags:</h2>
        <div>
            <button className="searchBtn" value={"mmorpg"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >mmorpg</button>
            <button className="searchBtn" value={"shooter"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >shooter</button>
            <button className="searchBtn" value={"strategy"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >strategy</button>
            <button className="searchBtn" value={"moba"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >moba</button>
            <button className="searchBtn" value={"racing"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >racing</button>
            <button className="searchBtn" value={"sports"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >sports</button>
            <button className="searchBtn" value={"social"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >social</button>
            <button className="searchBtn" value={"sandbox"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >sandbox</button>
            <button className="searchBtn" value={"open-world"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >open world</button>
            <button className="searchBtn" value={"survival"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >survival</button>
            <button className="searchBtn" value={"pvp"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >pvp</button>
            <button className="searchBtn" value={"pve"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >pve</button>
            <button className="searchBtn" value={"pixel"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >pixel</button>
            <button className="searchBtn" value={"voxel"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >voxel</button>
            <button className="searchBtn" value={"zombie"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >zombie</button>
            <button className="searchBtn" value={"turn-based"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >turn based</button>
            <button className="searchBtn" value={"first-person"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >first person</button>
            <button className="searchBtn" value={"third-Person"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >third Person</button>
            <button className="searchBtn" value={"top-down"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >top down</button>
            <button className="searchBtn" value={"tank"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >tank</button>
            <button className="searchBtn" value={"space"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >space</button>
            <button className="searchBtn" value={"sailing"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >sailing</button>
            <button className="searchBtn" value={"side-scroller"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >side scroller</button>
            <button className="searchBtn" value={"superhero"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >superhero</button>
            <button className="searchBtn" value={"permadeath"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >permadeath</button>
            <button className="searchBtn" value={"card"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >card</button>
            <button className="searchBtn" value={"battle-royale"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >battle royale</button>
            <button className="searchBtn" value={"mmo"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >mmo</button>
            <button className="searchBtn" value={"mmofps"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >mmofps</button>
            <button className="searchBtn" value={"mmotps"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >mmotps</button>
            <button className="searchBtn" value={"3d"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >3d</button>
            <button className="searchBtn" value={"2d"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >2d</button>
            <button className="searchBtn" value={"anime"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >anime</button>
            <button className="searchBtn" value={"fantasy"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >fantasy</button>
            <button className="searchBtn" value={"sci-fi"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >sci fi</button>
            <button className="searchBtn" value={"fighting"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >fighting</button>
            <button className="searchBtn" value={"action-rpg"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >action rpg</button>
            <button className="searchBtn" value={"action"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >action</button>
            <button className="searchBtn" value={"military"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >military</button>
            <button className="searchBtn" value={"martial-arts"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >martial arts</button>
            <button className="searchBtn" value={"flight"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >flight</button>
            <button className="searchBtn" value={"low-spec"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >low spec</button>
            <button className="searchBtn" value={"tower-defense"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >tower defense</button>
            <button className="searchBtn" value={"horror"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >horror</button>
            <button className="searchBtn" value={"mmorts"} 
            onClick={(e)=>{
                listControl(e.target.value)
                if (e.target.className==="searchBtn") {
                    e.target.className="activeBtn"
                } else {
                    e.target.className="searchBtn"
                }
            }} 
            >mmorts</button>
        </div>
        <div>
            search
        </div>
        <div>
            {!control&&(<div>
                loading...
            </div>)}
            {control&&!emptyList&&(<div className="gameList">
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
      </div>
    </>
    
  );
}

export default GameTag;

