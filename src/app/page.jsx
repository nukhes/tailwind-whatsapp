import { SidebarRoot } from "./components/sidebar/sidebarRoot";

export default function Home() {
  return (
    <div className="
    w-[95vw] h-[95vh] max-w-screen-2xl bg-slate-950 mt-5 text-slate-50
    grid grid-flow-col grid-cols-3
    ">

      <SidebarRoot />
      
      <div className="bg-zinc-950 col-span-2">
        content
      </div>

    </div>
  );
}
