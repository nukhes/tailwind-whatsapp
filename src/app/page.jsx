import { SidebarRoot } from "./components/sidebar/sidebarRoot";
import { ChatRoot } from "./components/chat/chatRoot";

export default function Home() {
  return (

    <div className="
    w-[95vw] h-[95vh] max-w-screen-2xl bg-slate-950 mt-5 text-slate-50
    grid grid-flow-col grid-cols-3
    ">

      <SidebarRoot />
      <ChatRoot />

    </div>
    
  );
}
