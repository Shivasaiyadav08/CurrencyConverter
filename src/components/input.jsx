import React from 'react'

function Input({
    label,
    amount,
    onamountchange,
    onCurrencyChange,
    currencyOptions=[],
    selectedcurrency="usd"
}

) {
    return (
        <div className='bg-white flex justify-between p-5 ' >
            <div >
                <div className='flex flex-col  gap-4'>
                    <label htmlFor="id">{label}</label>
                    <input type="text"
                        id='id'
                        value={amount}
                        placeholder='Amout'
                        className='w-28 border bottom-2'
                        onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
                    />
                </div>
            </div>
            <div>
                <div className='flex gap-4 flex-col'> 
                    <p>Currency Type</p>
                    <select name="currency" id="currency"
                    value={selectedcurrency}
                     onChange={(e)=>{onCurrencyChange(e.target.value)}}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Input
