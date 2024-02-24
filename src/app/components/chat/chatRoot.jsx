import { ChatHeader } from './chatHeader'
import { ChatFooter } from './chatFooter'
import { ChatMessages } from './chatMessages'

export function ChatRoot() {
    return (
        <div className="
        bg-zinc-950 col-span-2 border-l border-l-slate-500
        flex flex-col justify-between
        ">
            <ChatHeader />
            <ChatMessages />
            <ChatFooter />
        </div>
    );
}