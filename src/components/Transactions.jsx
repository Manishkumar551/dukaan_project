import React from 'react'

const Transactions = () => {
  return (
    <div className='flex flex-col gap-6'>
        
       <div>
         <p className='font-medium text-xl'>Transactions | This Month</p>
        
       </div>

       <div className='flex gap-3 text-sm'>
          <span className='bg-gray-300  rounded-2xl text-black py-1.5 px-4 '>Payouts (22)</span>

          <span className='bg-blue-700 rounded-2xl text-white py-1.5 px-4' >Refunds (6)</span>
       </div>
  

    </div>
  )
}

export default Transactions