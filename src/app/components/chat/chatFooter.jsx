import { FaPlus, FaMicrophone } from "react-icons/fa6";
import { ChatMessageBox } from './chatMessageBox'

export function ChatFooter() {
    return (
        <header className="bg-slate-700 h-16 
        flex items-center justify-between gap-1 px-2
        ">

            <FaPlus size={38} className="text-slate-400 cursor-pointer hover:text-teal-600 p-2"/>
            <ChatMessageBox />
            <FaMicrophone size={38} className="text-slate-400 cursor-pointer hover:text-teal-600 p-2"/>

        </header>
    );
}