import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../store/reducers/newsInfoActions";
import "./NewsInfo.css"
const NewsInfo = () =>{
    const infoState=useSelector(state=>state.newsInfo)
    const [gameNews, setGameNews] = useState([]);
    const [stateNews, setstateNews] = useState(0);
    const [control, setControl] = useState();
    const dispatch=useDispatch()

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


  useEffect(() => {
    if (stateNews!==0) {
      setControl(true)
      console.log(stateNews);
      console.log("true");
    }else{
      setControl(false)
      console.log(stateNews);
      console.log("false");
    }
  }, [stateNews]);

  useEffect(() => {
    console.log("2.adım :" + infoState.id);
    if (infoState.id!==0) {
     gameNews.forEach(item => {
      if (item.id===infoState.id) {
        console.log("buldum "+item.id);
        setstateNews(item)
      }
    }); 
    }
  }, [infoState,gameNews]);
  

    // <div className="testDeneme">
    // {gameNews.length>0 && (<td dangerouslySetInnerHTML={{__html: gameNews[12].article_content}} />)}
    // </div>

    
  return (
    <>
    {(infoState.show)&&(control)&&(<div className="newsInfoBody">
      <div className="newsPage">
        <div>
          <h2>{stateNews.title}</h2>
          <h4>{stateNews.short_description}</h4>
        </div>
      {(<td className="newsTd" dangerouslySetInnerHTML={{__html: stateNews.article_content}} />)}
      <div className="mobilNews">Data from API do not comply with mobile devices.<br/>
Please open with at a computer</div>
      <div className="newsSource"><a className="sourceLink" target="_blank" href={stateNews.article_url}>Source Of News</a></div>
      </div>
      
    </div>)}
    </>
    
  );
}

export default NewsInfo;

