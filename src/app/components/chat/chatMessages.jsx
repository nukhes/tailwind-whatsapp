import { ChatMessage } from "./chatMessage";

export function ChatMessages() {
    return (
        <div className="h-full p-6 flex gap-3 flex-col">
            <ChatMessage hour="12:34" mine={true} text="Albion Online é um jogo MMO-RPG Sandbox, em que você explora um mundo aberto!"/>
            <ChatMessage hour="12:39" mine={false} text="Jogo brabo kkkkkkkkkkkk"/>
        </div>
    );
}