import { BsThreeDotsVertical } from "react-icons/bs";
import { ChatHeaderProfile } from "./chatHeaderProfile";
import { IoMdSearch } from "react-icons/io";

export function ChatHeader() {
    return (
        <header className="bg-slate-700 h-16 
        flex items-center justify-between
        px-6 p-6">

            <ChatHeaderProfile name="Pato Nadador"/>

            <div className="flex gap-3">
                <IoMdSearch size={20} className="text-slate-400 cursor-pointer hover:text-slate-200" />
                <BsThreeDotsVertical size={20} className="text-slate-400 cursor-pointer hover:text-slate-200"/>
            </div>

        </header>
    );
}