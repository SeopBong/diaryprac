import React from 'react';
import '../componant/BgMain.css';
import petCard_1 from '../img/3rtriver.jpg';

const BgMain =()=>{
    return (
    <div className="main-page">
        <div className='img-container'>
        <img className='three-dog' src={petCard_1}></img>

        </div>
    </div>
    )
}
export default BgMain;