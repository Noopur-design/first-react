import React from 'react'

function Navbar() {
  return (
    <>
   <header className='bg-zinc-800 text-[#fff] flex justify-between items-center w-[100] h-[70px]'>
   <div className="logo  ml-[10px] ">
          <img src="https://cdn-icons-png.flaticon.com/128/16921/16921802.png" alt="" className='w-[40px] flex items-center justify-center'/>
        </div>
    <nav >
       
        <ul  className='navlinks flex space-x-4 mr-[20px]'>
            <li><a href="/">home</a></li>
            <li><a href="/">about</a></li>
            <li><a href="/">services</a></li>
            <li><a href="/">blog</a></li>
        </ul>
    </nav>
   </header>
    </>
    
  )
}

export default Navbar