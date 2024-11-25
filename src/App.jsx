import { useCallback, useState } from 'react'
import './App.css'
import { Input } from './components/index';
import UseInfo from '../hooks/UseInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setfrom] = useState('usd')
  const [to, setto] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo = UseInfo(from)
  const options = Object.keys(currencyinfo)

  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to])
  }
  const swap = () => {
    setfrom(to)
    setto(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  return (
    <div className='w-full h-screen bg-cover bg-no-repeat flex-wrap flex' style={{ backgroundImage: "url(https://images.pexels.com/photos/6765364/pexels-photo-6765364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>
      <div className='w-full flex flex-col flex-wrap justify-center items-center h-screen'>
        <div className=' w-full max-w-lg backdrop-blur-sm py-5 bg-white/30 ' >
          <div className='w-full  max-w-md m-auto '>
            <Input
              label="from"
              amount={amount}
              onCurrencyChange={(currency) => setfrom(currency)}
              onamountchange={(amount) => setAmount(amount)}
              currencyOptions={options}
              selectedcurrency={from}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button
              className=' absolute left-3/4 -top-3  border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
            >Swap</button>
          </div>

          <div className=' w-full max-w-md m-auto'>
            <Input
              label="to"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setto(currency)}
              currencyOptions={options}
              selectedcurrency={to}
            />
          </div>
          <div className='w-full m-auto max-w-md '>
            <button className=' bg-blue-600 text-white w-full rounded-lg h-8' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
