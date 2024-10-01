// eslint-disable-next-line no-use-before-define
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotificationBar from './components/NotificationBar';
import Navbar from  './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Deals from './components/Deals';
import Shop from './components/Shop';
import Rewards from './components/Rewards';
import Services from './components/Services';
import Pharmacy from './components/Pharmacy';
import Newsletter from './components/Newsletter';
import Community from './components/Community';
// import SnakeShop from './SnakeShop'; // Individual Shop Pages
// import TurtleShop from './TurtleShop';
// import GeckoShop from './GeckoShop';
// import ChameleonShop from './ChameleonShop';
// import CrocodileShop from './CrocodileShop';
// import BeardedDragonShop from './BeardedDragonShop';
// import LizardShop from './LizardShop';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NotificationBar />
      <Navbar/>
      {/* <Cart /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/deals' element={<Deals/>} />
        <Route path='/shop' element={<Shop/>} />
        {/* <Route path="./shop/snake" component={SnakeShop} />
        <Route path="./shop/turtle" component={TurtleShop} />
        <Route path="./shop/gecko" component={GeckoShop} />
        <Route path="./shop/chameleon" component={ChameleonShop} />
        <Route path="./shop/crocodile" component={CrocodileShop} />
        <Route path="./shop/bearded-dragon" component={BeardedDragonShop} />
        <Route path="./shop/lizard" component={LizardShop} /> */}
        <Route path='/rewards' element={<Rewards/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/pharmacy' element={<Pharmacy/>} />
        <Route path='/newsletter' element={<Newsletter/>} />
        <Route path='/community' element={<Community/>} />
      </Routes>
      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
