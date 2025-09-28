import { Suspense } from 'react'
import './App.css'
import DaisyNan from './Components/DaisyNav/DaisyNav'
import Navber from './Components/Navber/Navber'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultsChart/ResultChart'



const pricingPromise = fetch("/pricing.json").then(res => res.json())



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


          <ResultChart></ResultChart>
      </main>

      
      
    </>
  )
}

export default App
