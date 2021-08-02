// @flow 
import * as React from 'react';
import Image from 'next/image'
import IconChat from '../../public/images/chat/chat-icon.svg'
type Props = {

};
const Chat = (props: Props) => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
                <Image src={IconChat} alt="Picture of the author" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-gray-500">You have a new message!</p>
            </div>
        </div>
    );
};

export default Chat