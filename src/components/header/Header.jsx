import React, { useRef } from 'react';
import styles from './header.module.css'
const Header = () => {
    const spanElem=useRef()        
    const clickHandler = ()=>{
        spanElem.current.classList.toggle(styles.night)
    }
    return (
        <>
            <div className='flex justify-between items-center'>
                <span><a href="#">mehrdadosoulisaran@gmail.com</a></span>
                <div className='flex items-center gap-2'>
                    <div className='w-10 h-4 border-black border-[3px] rounded-lg relative' onClick={clickHandler}>
                        <div ref={spanElem} className='absolute transition-all rounded-lg inline-block w-3 h-3 bg-black top-0 bottom-0 m-auto'></div>
                    </div>
                    <span>Mehrdad Osouli</span>
                </div>
            </div>
        </>
    );
};

export default Header;