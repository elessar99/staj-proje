import {useRoutes} from "react-router-dom"

import "./Router.css";
import MainView from "../views/MainView";
import AllGame from "../views/AllGame";
import Game from "../views/Game";
import GameNews from "../views/GameNews";
import NewsInfo from "../views/NewsInfo";
import GameSearch from "../views/GameSearch";
import GameTag from "../views/GameTag";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <MainView/>
            },
            {
                path: '/allgame',
                element: <AllGame/>
            },
            {
                path: '/gamenews',
                element: <GameNews/>
            },
            {
                path: '/news',
                element: <NewsInfo/>
            },
            {
                path: '/search',
                element: <GameSearch/>
            },
            {
                path: '/tag',
                element: <GameTag/>
            },
            {
                path: '/game/:platform/:category',
                element: <Game/>
            },
            {
                path: '*',
                element: <div>
                    404 Not Found
                </div>
            }
        ]
    )
    return routes
}
export default Router