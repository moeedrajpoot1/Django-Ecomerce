import React from 'react'

function Loader() {
  return (
    <>
    <div className=' h-screen grid gap-4 place-content-center  '>
    <div className="flex flex-row gap-2  ">
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
</div>
    </div>
    </>


  )
}

export default Loader