import React from 'react';

// Benim gönderdiğim mesajlar 'my-message'
// Arkadaşımın gönderdiği mesajlar 'fd-message'

const Message = () => {
    return (
        <div className='message-show'>



            <div className='my-message'>
                <div className='image-message'>
                    <div className='my-text'>
                        <p className='message-text'> Nasılsın? </p>
                    </div>
                </div>
                <div className='time'>
                    28 Eylül 2024
                </div>
            </div>

            <div className='fd-message'>
                <div className='image-message-time'>
                    <img src='/image/E.S.jpg' alt='' />
                    <div className='message-time'>
                        <div className='fd-text'>
                            <p className='message-text'>İyidir </p>
                        </div>
                        <div className='time'>
                        28 Eylül 2024
                        </div>
                    </div>
                </div>
            </div>



            <div className='my-message'>
                <div className='image-message'>
                    <div className='my-text'>
                        <p className='message-text'> Nerdesin ?  </p>
                    </div>
                </div>
                <div className='time'>
                    29 Eylül 2024
                </div>
            </div>

            <div className='fd-message'>
                <div className='image-message-time'>
                    <img src='/image/E.S.jpg' alt='' />
                    <div className='message-time'>
                        <div className='fd-text'>
                            <p className='message-text'>Kütüphanede </p>
                        </div>
                        <div className='time'>
                         29 Eylül 2024
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-message'>
                <div className='image-message'>
                    <div className='my-text'>
                        <p className='message-text'> <img src='/image/Logo.png' alt='' /> </p>
                    </div>
                </div>
                <div className='time'>
                    29 Eylül 2024
                </div>
            </div>



            <div className='fd-message'>
                <div className='image-message-time'>
                    <img src='/image/E.S.jpg' alt='' />
                    <div className='message-time'>
                        <div className='fd-text'>
                            <p className='message-text'>Çok beğendim ❤ </p>
                        </div>
                        <div className='time'>
                            29 Eylül 2024
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Message;
