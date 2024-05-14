export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-desktop-width">

        <div className="flex justify-between items-center my-4 mb-8">
          <div className="flex items-center">
            <img src="/stairs.png" width={48}></img>
            <div className="text-yellow-500 text-2xl font-normal">uwlevels</div>
          </div>
          <input className="w-[850px] py-2 px-4 rounded-lg bg-figma-gray focus:outline-none" type="text" placeholder="Search by Company or Program"></input>
          <div className="text-xl">Blacklist</div>
        </div>

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-10">
            <img className="h-[22px]" src="/netflix.png"></img>
            <img className="h-[24px]" src="/apple.png"></img>
            <img className="h-[20px]" src="/sony.svg"></img>
            <img className="h-[18px]" src="/coursera.png"></img>
            <img className="h-[26px]" src="/amazon.png"></img>
            <img className="h-[22px]" src="/nvidea.png"></img>
          </div>
          <div className="text-xl bg-blue-200 py-2 px-16 border-4 border-dashed border-blue-600 rounded-md">
            + Add your coop
          </div>
        </div>

        <div className="flex gap-8 mb-10">
          <div className="text-2xl border-b-blue-600 px-2 py-2 border-b-4 text-blue-600 font-medium">Companies</div>
          <div className="text-2xl px-2 py-2">Programs</div>
        </div>
        
      </div>
    </div>
  )
}
