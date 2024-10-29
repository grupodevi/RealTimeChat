import React from 'react';
import { FaPhoneAlt, FaVideo, FaRocketchat } from "react-icons/fa";
import { LuArrowRightFromLine } from "react-icons/lu";
import Message from './Message';
import MessageSend from './MessageSend';
import FriendInfo from './FriendInfo';


const RightSide = () => {
    return (
        <div className='col-9'>
            <div className='right-side'>
                <input type="checkbox" id='dot' />
                <div className='row'>
                    <div className='col-8'>
                        <div className='message-send-show'>
                            <div className='header'>
                                <div className='image-name'>
                                    <div className='image'>
                                        <img src='/image/E.S.jpg' alt='' />

                                    </div>
                                    <div className='name'>
                                        <h3> Emir Samur </h3>
                                        <h6> Çevrimiçi </h6>
                                    </div>
                                </div>

                                <div className='icons'>
                                    <div className='icon'>
                                        <FaPhoneAlt />
                                    </div>

                                    <div className='icon'>
                                        <FaVideo />
                                    </div>

                                    <div className='icon'>
                                       <label htmlFor='dot'><LuArrowRightFromLine/></label>
                                    </div>

                                </div>
                            </div>

                            <Message />
                            <MessageSend />
                            

                        </div>
                    </div>

                    <div className='col-4' style={{textAlign:"center", padding:"20px", fontWeight:"800",fontSize:"15px"}}>
                        Kullanıcı Profili
                        <FriendInfo />
                    </div>


                </div>
            </div>
        </div>
    )
};

export default RightSide;
