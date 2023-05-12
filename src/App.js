import './App.css';
import {data} from './component/data'
import Detelas from "./component/deteles/Detelas";
import { useState } from 'react';
import Header from './component/header/Header';
import Fooder from './component/fooder/Fooder';
import SideCart from './component/Side_cart/SideCart';


function App() {
const [time, setTime] = useState(0);
  return (
   <div className="full-display">
    <div className="main-container">
    <div className='cart-container'>
     <Header></Header>
      <div className='main-left'>
      <Detelas setTime={setTime} time={time} data={data}></Detelas>
      </div>
    </div>
    <div className='main_right'>
    <SideCart time={time}></SideCart>
      </div>
    </div>
      <Fooder></Fooder>
      <br/>
      <br/>
   </div>

  );
}


export default App;
