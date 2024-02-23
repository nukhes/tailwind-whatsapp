import React from "react";

interface ContactProps {
    name: string
    lastMessage: string
    lastMessageHour: string
};

export function SidebarContact({ name, lastMessage, lastMessageHour }: ContactProps) {
    return (
        <div className="
        flex flex-col border-b-slate-600 border-b p-3
        cursor-pointer hover:bg-slate-600
        ">
            <div className="flex justify-between">
                <span>{name}</span>
                <span className="text-slate-500 text-xs">{lastMessageHour}</span>
            </div>
            <div className="text-slate-500 text-sm">{lastMessage}</div>
        </div>
    );
}