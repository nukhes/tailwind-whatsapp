import { FaUserCircle } from "react-icons/fa";

interface ProfileProps {
    name: string
}

export function ChatHeaderProfile({ name }: ProfileProps) {
    return (
        <div className="flex items-center gap-2 cursor-pointer">
        <FaUserCircle size={42}/>
    
        <div>
            <h1 className="-mb-1.5">{name}</h1>
            <span className="text-xs text-slate-400">Dados do Contato</span>
        </div>
    
        </div>
    );
}