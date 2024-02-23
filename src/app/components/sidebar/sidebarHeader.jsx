import { MdGroups2, MdAmpStories,MdMarkUnreadChatAlt } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export function SidebarHeader() {
    return (
        <header className="bg-slate-700 h-16 flex items-center justify-between px-4">

            <FaUserCircle size={42} className="text-slate-400"/>

            <div className="flex gap-1 items-center h-full">
                <MdGroups2 size={38} className="text-slate-400 cursor-pointer hover:text-slate-50 p-2"/>
                <MdAmpStories size={38} className="text-slate-400 cursor-pointer hover:text-slate-50 p-2"/>
                <MdMarkUnreadChatAlt size={38} className="text-slate-400 cursor-pointer hover:text-slate-50 p-2"/>
                <BsThreeDotsVertical size={38} className="text-slate-400 cursor-pointer hover:text-slate-50 p-2"/>
            </div>
        </header>
    );
}