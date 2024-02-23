export default function Home() {
  return (
    <div className="
    w-[95vw] h-[95vh] max-w-screen-2xl bg-slate-950 mt-5 text-slate-50
    grid grid-flow-col grid-cols-3
    ">

      <aside className="bg-slate-800">
        <header className="bg-slate-700 h-16">
          header
        </header>

        aside

      </aside>
      
      <div className="bg-slate-950 col-span-2">
        content
      </div>

    </div>
  );
}
