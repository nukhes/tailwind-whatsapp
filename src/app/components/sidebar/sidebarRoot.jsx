import { SidebarContact } from "./sidebarContacts";
import { SidebarHeader } from "./sidebarHeader";
import { SidebarSearch } from "./sidebarSearch";

export function SidebarRoot() {
    return (
    <aside className="bg-slate-800">
        <SidebarHeader />
        
        <div className="flex flex-col">

            <SidebarSearch />

            <SidebarContact name="Pedro" lastMessage="Olá Mundo!" lastMessageHour="05:02" />
            <SidebarContact name="Eduardo" lastMessage="Como você está?" lastMessageHour="13:46" />
            <SidebarContact name="Alisson" lastMessage="Fechou!!" lastMessageHour="11:20" />
        </div>

    </aside>
  );
}