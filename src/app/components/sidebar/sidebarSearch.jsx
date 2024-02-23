import { IoFilter } from "react-icons/io5";

export function SidebarSearch() {
    return (
        <div className="flex p-2 items-center gap-2">
            <input type="text" placeholder="Pesquisar conversas" className="
            bg-zinc-900 p-2 rounded-md w-full h-8 text-sm
            focus:outline-none focus:bg-zinc-950 focus:border-b-slate-600 focus:border-b-2
            hover:border-b-slate-700 hover:border-b-2
            " />
            <IoFilter size="32" className="
            w-8 bg-teal-800 p-1 rounded-md 
            cursor-pointer hover:bg-teal-600
            "/>
        </div>
    );
}