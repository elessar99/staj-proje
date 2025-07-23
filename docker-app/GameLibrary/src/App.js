import './App.css';
import Footer from './components/Footer/Footer';
import GameCard from './components/GameCard/Gamecard';
import Header from './components/Header/Header';
import Router from './router/Router';
import GameInfo from './views/GameInfo';
import NewsInfo from './views/NewsInfo';


function App() {
  return (
    <div className='appBody'>
    <GameInfo />
    <Header/>
    <Router/>
    <div className='footerArea'><Footer/></div>
    
    </div>
  );
}

export default App;
