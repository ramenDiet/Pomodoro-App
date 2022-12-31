import './App.css'
import { ProgressBar } from './ProgressBar'

// let focus = "short break"
let focus = "pomodoro"

const focusedStyling = "bg-hl p-4 rounded-full text-dark-bg"

function App() {
  return (
    <>
      <div className="container flex flex-col justify-center align-center gap-10">
        <h1 className='font-kumbh text-light-purple text-4xl m-auto'>pomodoro</h1>
        <nav className='flex'>
          <ul className='flex items-center justify-around w-[400px] p-2 gap-9 text-light-purple font-bold bg-dark-bg rounded-full '>
            <li className={focus === "pomodoro" ? focusedStyling : ""}>pomodoro</li>
            <li className={focus === "short break" ? focusedStyling : ""}>short break</li>
            <li className={focus === "long break" ? focusedStyling : ""}>long break</li>
          </ul>
        </nav>

        <main className='flex flex-col justify-center items-center font-kombh text-off-white bg-dark-bg w-[300px] h-[300px] rounded-full shadow-custom m-auto'>
          {/* <progress className='bg-hl' max="10" value="5" ></progress> */}
          
          <p className='text-7xl font-bold'>17:59</p>
          <p className='text-2xl tracking-[6px]'>PAUSE</p>
        </main>

        <footer className='mx-auto my-16'>
          <img src="src/assets/icon-settings.svg" alt="" />
        </footer>
      </div>

      <div className="FULLPAGE  font-kumbh w-full p-4 bg-white border-8 border-orange-300">
       
        <div className='border-b-2 flex justify-between pb-4'>
          <p className='text-xl' >Settings</p>
          <p className='text-slate-400 font-extralight'>X</p>
        </div>
        
        <p className='text-center my-5 tracking-widest'>TIME (MINUTES)</p>
        <form action="" className="flex flex-col gap-5">

          <div className="flex justify-around">
            <p className='text-gray-400'>pomodoro</p>
            <select name="pomodoro-length" className='bg-off-white pr-16 pl-2 py-1 rounded-md border' >
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
            </select>
          </div>

          <div className="flex justify-around">
            <p className='text-gray-400'>short break</p>
            <select name="short-break" className='bg-off-white pr-16 pl-2 py-1 rounded-md border'>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
          </div>

          <div className="flex justify-around">
            <p className='text-gray-400'>long break</p>
            <select name="long-break" className='bg-off-white pr-16 pl-2 py-1 rounded-md border'>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
            </select>
          </div>

          <div className='border-t-2 mt-4'>
            <p className='text-center my-5 tracking-widest'>FONT</p>
            <div className='flex justify-center gap-5'>
              <p className='bg-black text-white p-2 rounded-full'>Aa</p>
              <p className='bg-off-white font-roboto font-thin p-2 rounded-full border'>Aa</p>
              <p className='bg-off-white font-space p-2 rounded-full border'>Aa</p>
            </div>
          </div>

          <div className='border-t-2 mt-4'>
            <p className='text-center my-5 tracking-widest'>COLOR</p>
            <div className='flex justify-center gap-5'>
              <div className='bg-hl w-10 h-10 rounded-full flex justify-center items-center'>
                <p>X</p>
              </div>
              <div className='bg-teal w-10 h-10 rounded-full flex justify-center items-center'>
                <p>X</p>
              </div>
              <div className='bg-violet w-10 h-10 rounded-full flex justify-center items-center'>
                <p>X</p>
              </div>
            </div>
          </div>

          <button type='submit' className='bg-hl w-min mt-5 -mb-10 mx-auto px-8 py-2 rounded-full text-white'>Apply</button>
        </form>
      </div>
    </>
  )
}

export default App
