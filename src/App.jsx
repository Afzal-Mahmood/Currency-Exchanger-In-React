import { useState, useEffect } from "react";
import {Navbar , InputBox} from './Components/index'
import { ArrowRightLeft, Frown, Globe, ShieldCheck } from 'lucide-react';
import { HiArrowsUpDown } from "react-icons/hi2";
import { MdCurrencyExchange } from "react-icons/md";
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() { 
  const [amount, setAmount] =useState (0)
  const [from, setFrom] = useState("pkr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState("")
  const currencyInfo = useCurrencyInfo(from )
  const options = Object.keys(currencyInfo)

  useEffect(() => {
    converte();
  }, [amount, from, to, currencyInfo]);
  
  const swap =()=>{
    const tempFrom = from
    const tempAmount = amount

    setFrom(to)
    setTo(tempFrom)
    
    setAmount(convertedAmount)
    setConvertedAmount(tempAmount )
  }

  const converte = () => {
    // Check if amount and exchange rate are valid numbers before calculating
    if (currencyInfo[to] && !isNaN(amount)) {
      const result = amount * currencyInfo[to];
      setConvertedAmount(isNaN(result) ? 0 : result.toFixed(2));
    } else {
      setConvertedAmount(0);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="flex flex-col items-center md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2p-6 ">
            <h2 className="text-5xl md:text-2xl font-bold  text-white leading-tight">
              Real-Time <span className="text-blue-500">Currency Converter </span>
            </h2>
            <p className="  text-gray-300 text-lg leading-8">
              Convert between 170+ currency with live exchange rates update every minute.
            </p>
            <ul className='mt-3 space-y-3 text-gray-200'>
              <li className="flex gap-3 "><ArrowRightLeft className='text-white h-5 w-5 shrink-0'/>Live Exchange Rates</li>
              <li className="flex gap-3 "><Globe className='text-white h-5 w-5 shrink-0'/>170+ Supported Currencies </li>
              <li className="flex gap-3 "><ShieldCheck className='text-white h-5 w-5 shrink-0' />Fast & Secure Conversion</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2p-6 ">
            <form className=""
            onSubmit={(e) => {
              e.preventDefault();
              converte();
            }}>
              <div className="w-full mb-1">
                <InputBox 
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>setAmount(currency)}
                  onAmountChange={(amount)=>setAmount(amount)}
                  selectCurrency={from}
                />
                <div className="relative w-full h-0">
                  <button 
                    onClick={swap}
                    className=" flex gap-2 absolute left-1/2 -top-5 -translate-x-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:rotate-180 transition-all duration-300">
                    <HiArrowsUpDown size={22} />
                    Swap
                  </button>
                </div>
                <InputBox 
                  label="To"
                  Amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>{setTo(currency)}}
                  selectCurrency={to}
                  amountDisable 
                />
                <button className=" w-full py-4 flex justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ">
                  Convert {from} to {to}
                  <MdCurrencyExchange className=' text-white mt-1' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
