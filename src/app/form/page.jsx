export default function Form() {
    return (
      <div className="flex flex-col items-center">
        <div className="w-form-width mb-20">
          
          <div className="flex items-center justify-center mt-8 mb-4 gap-1">
            <img src="/stairs.png" width={48}></img>
            <div className="text-yellow-500 text-2xl font-normal">uwlevels</div>
          </div>

          <div className="text-3xl text-center mb-20">
            Add Your Coop
          </div>

          <form className="flex flex-col gap-2 mb-20">
            <div className="text-2xl">Step 1 of 3</div>
            <div className="text-lg">Verify University of Waterloo email address</div>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="email" placeholder="Waterloo email"></input>
          </form>

          <form className="flex flex-col gap-2 mb-20">
            <div className="text-2xl">Step 2 of 3</div>
            <div className="text-lg">Upload Offer Letter or Waterloo Coop History</div>
            <label className="text-center text-lg w-full py-14 px-4 rounded-md border-4 border-dashed bg-[#F2EEEE] border-[#D1D1D1]" for="file">Click to Attach
            <div className="text-md text-[#A0A0A0]">Upload Offer Letter or Waterloo Coop History</div>
            </label>
            <input id="file" className="invisible absolute" type="file" placeholder="Waterloo email"></input>
          </form>

          <form className="flex flex-col gap-2 mb-20">
            <div className="text-2xl">Step 3 of 3</div>
            <div className="text-lg">Add Company and Program Details</div>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Company"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Title"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Job Family"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Program"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Coop Number"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Salary per hour"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Benefits"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Arrangement"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Year"></input>

            <div className="text-lg mt-8">Add Company and Program Details</div>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Gender"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Ethnicity"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Number of jobs did you applied to"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Number of interviews recieved"></input>
            <input className="text-lg w-full py-2 px-4 rounded-md border-2 border-[#D1D1D1]" type="text" placeholder="Number of offers recieved"></input>
          </form>
          
          <div className="flex justify-center">
            <button className="text-lg py-2 px-14 rounded-lg bg-blue-600 text-white">
              Submit Coop Salary
            </button>
          </div>
        </div>
      </div>
    )
  }
  