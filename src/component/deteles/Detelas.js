import React from 'react';
import './Detelas.css'


const Detelas = ({data,setTime,time}) => {


    const submit = (second)=>{
        setTime( time + second);
    }

    return (
        <div className='mane'> 
            {
                data && data.map((item,index)=>{
                    return(
                        <div key={index} className="cart">
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.dec}</p>
                            <span>Storage: {item.storage}MB</span><br/>
                            <span>Time required :{item.time}s</span>
                            <button onClick={()=>submit(item.time)}>add to list</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Detelas;