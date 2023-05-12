
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./SideCart.css";


const SideCart = ({time}) => {
    const notify = () => toast("Wow so easy!");
    const [end,setend] = useState(localStorage.getItem("cartdata") ? JSON.parse(localStorage.getItem("cartdata")) :0,)


    const setends = (second)=>{
        setend(second)
        localStorage.setItem("cartdata", JSON.stringify(second));
    }

    return (
        <div className='site-cart'>
            <div className='myself'>
            <h5>Hi thare i Lemon Roy, from Bangladesh. I am a student, sturdy diploma CSE Thakurgaon polytechnic institute.</h5>
            </div>
            <div className='details'>
                <div><samp className='weight'>54</samp><samp>kg</samp> <p>Weight</p></div>
                <div><samp className='weight'>5.4</samp><p>Height</p></div>
                <div><samp className='weight'>19</samp> <p>Age</p></div>
            </div>
            <div>
                <h2>Add A Break</h2>
                <div className='time'>
                    <button onClick={()=>setends(10)}>10s</button>
                    <button onClick={()=>setends(20)}>20s</button>
                    <button onClick={()=>setends(30)}>30s</button>
                    <button onClick={()=>setends(40)}>40s</button>
                </div>
            </div>

            <div>
                <h2>Exercise Details</h2>
                <div className='time-added'>
                    <h4>Exercise time: </h4>
                    <h4 className='text-color'>{time} seconds</h4>
                </div>
                <div className='time-added'>
                    <h4>Break time: </h4>
                    <h4 className='text-color'>{end} seconds</h4>
                </div>
            </div>
            <div>
                <>
                <button className='activity-button' onClick={notify}>Activity Completed</button>
                <ToastContainer></ToastContainer>
                </>
                
            </div>
        </div>
    );
};

export default SideCart;