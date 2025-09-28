import { Suspense } from 'react'
import './App.css'
import DaisyNan from './Components/DaisyNav/DaisyNav'
import Navber from './Components/Navber/Navber'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultsChart/ResultChart'
import axios from 'axios'
import MarkChart from './Components/MarksChart/MarkChart'



const pricingPromise = fetch("/pricing.json").then(res => res.json())
const marksPromise = axios.get('markData.json');
// console.log(marksPromise);


function App() {


  return (
    <>


      
      <header>
        <Navber></Navber>
        {/* <DaisyNan></DaisyNan> */}
      </header>

      <main>
          <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
            <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
          </Suspense>

          <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
            <MarkChart marksPromise ={marksPromise}></MarkChart>
          </Suspense>


          <ResultChart></ResultChart>
      </main>

      
      
    </>
  )
}

export default App
