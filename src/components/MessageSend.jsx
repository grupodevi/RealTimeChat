import React from 'react';
import { FaPlusCircle, FaFileImage, FaGift,} from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const MessageSend = () => {

    const emojis = [
        '😀', '😃', '😄', '😁',
        '😆', '😅', '😂', '🤣',
        '😊', '😇', '🙂', '🙃',
        '😉', '😌', '😍', '😝',
        '😜', '🧐', '🤓', '😎',
        '😕', '🤑', '🥴', '😱'
    ]


    return (

        <div className='message-send-section'>
            <input type="checkbox" id='emoji' />
            <div className='file hover-attachment'>
                <div className='add-attachment'>
                    Ekle
                </div>
                <FaPlusCircle />
            </div>

            <div className='file hover-image'>
                <div className='add-image'>
                    Resim Ekle
                </div>
                <label htmlFor='pic'> <FaFileImage /> </label>
            </div>

            <div className='file hover-gift'>
                <div className='add-gift'>
                    Gift Gönder
                </div>
                <FaGift />
            </div>

            <div className='message-type'>
                <input type="text" name='message' id='message' placeholder='Bir mesaj yazın ' className='form-control' />

                <div className='file hover-gift'>
                    <label htmlFor='emoji'> <MdOutlineEmojiEmotions /> </label>
                </div>
            </div>

            <div className='file heart-emoji' style={{ color: 'red', fontSize: '22px', padding:'5px'}}>
                ❤
            </div>

            <div className='emoji-section'>
                <div className='emoji'>
                    {
                        emojis.map(e => <span>{e}</span>)
                    }

                </div>

            </div>


        </div>

    )
};

export default MessageSend;
