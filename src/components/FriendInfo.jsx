import React from 'react';
import { FaCaretSquareDown, FaEdit, FaSistrix } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const FriendInfo = () => {
    return (
        <div className='friend-info'>
            <input type="checkbox" id='gallery' />
            <div className='image-name'>
                <div className='image'>
                    <img src='/image/E.S.jpg' alt='' />
                </div>
                <div className='active-user'>Çevrimiçi</div>

                <div className='name'>
                    <h4> Emir Samur </h4>
                </div>
            </div>


            <div className='others'>
                <div className='custom-chat'>
                    <h3>Sohbeti Özelleştir </h3>
                    <IoIosArrowDown />
                </div>

                <div className='privacy'>
                    <h3>Gizlilik ve Destek </h3>
                    <IoIosArrowDown />
                </div>

                <div className='media'>
                    <h3>Medya </h3>
                    <label htmlFor='gallery'> <IoIosArrowDown /> </label>
                </div>
            </div>

            <div className='gallery'>
                <img src='/image/Logo.png' alt='' />
                <img src='/image/R.Y-2.jpg' alt='' />
            </div>

        </div>
    )
};

export default FriendInfo;
