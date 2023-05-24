import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/undraw_shopping_app_flsj.svg';
import {FaRegUser} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu((preve) => !preve);
    }
  return (
    
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50'>
             {/* desktop */}


             <div className='flex items-center h-full justify-between'>
          <Link to={""}>
           <div className='h-14'>
                <img src={logo}className='h-full' />
            </div>
            </Link>
            <div className='flex items-center gap-4 md:gap-7'>
                <nav className=' gap-4 md:gap-6 text-base md:text-lg hidden md:flex'> 
                <Link to={""}>Home</Link>
                <Link to={"menu"}>Menu</Link>
                <Link to={"about"}>About</Link>
                <Link to={"contact"}>Contact</Link>
                </nav>
                <div className='text-2xl text-green-600 relative'>
                    <AiOutlineShoppingCart/>
                    <div className='absolute -top-2 -right-2 text-white bg-green-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
                </div>
                <div className='text-2xl text-green-600'onClick={handleShowMenu}> 
                <div className='border-2 border-solid border-green-600 p-1 rounded-full cursor-pointer'>  
                 <FaRegUser/> 
                 </div>
                 {
                    showMenu &&   <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                    <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer text-base'>New Product</Link>
                    <Link to={"login"} className='whitespace-nowrap cursor-pointer text-base'>Login</Link>
                </div>
                }
              
                </div>
                
            </div>
    </div>
        
       
           


        {/* mobile */}


   
    </header>

  );
}

export default Header