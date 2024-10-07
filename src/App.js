// eslint-disable-next-line no-use-before-define
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotificationBar from './components/NotificationBar';
import Navbar from  './components/Navbar';
import CartPage from './components/CartPage';
import { CartProvider } from './CartContext';
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
import AnimalComponent from './components/AnimalComponent';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NotificationBar />
      <Navbar/>
      {/* <CartPage /> */}
      <CartProvider>
      <Routes>
      <Switch>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/deals' element={<Deals/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='animalshop' element={<AnimalComponent/>} />
        <Route path='/rewards' element={<Rewards/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/pharmacy' element={<Pharmacy/>} />
        <Route path='/newsletter' element={<Newsletter/>} />
        <Route path='/community' element={<Community/>} />
        </Switch>
      </Routes>
      </CartProvider>
      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
