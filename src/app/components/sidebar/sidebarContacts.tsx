import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface ContactProps {
    name: string
    lastMessage: string
    lastMessageHour: string
};

export function SidebarContact({ name, lastMessage, lastMessageHour }: ContactProps) {
    return (
        <div className="
        flex items-center gap-3 border-b-slate-600 border-b p-3
        cursor-pointer hover:bg-slate-600
        ">

            <FaUserCircle size={36}/>

            <div className="flex flex-col w-full ">
                <div className="flex justify-between">
                    <span>{name}</span>
                    <span className="text-slate-500 text-xs">{lastMessageHour}</span>
                </div>
                <div className="text-slate-400 text-sm">{lastMessage}</div>
            </div>

        </div>
    );
}