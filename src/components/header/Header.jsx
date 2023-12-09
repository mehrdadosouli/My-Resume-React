import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.css'

const Header = () => {
    const [open,setOpen]=useState(false)
    const [changeWith,setChangeWith]=useState(0)
    const spanElem=useRef()        
    const clickBtnMenu=useRef()        
    const clickHandler = ()=>{
        spanElem.current.classList.toggle(styles.night)
    }
    // hamburger btn
    const clickBtn=()=>{
        clickBtnMenu.current.classList.toggle(styles.open)
        let btn1=clickBtnMenu.current.querySelectorAll('span')[0]
        let btn2=clickBtnMenu.current.querySelectorAll('span')[1]
        let btn3=clickBtnMenu.current.querySelectorAll('span')[2]
        if(open){
            btn1.style.cssText='transform:rotate(0deg);transform-origin:0;'
            btn2.style.cssText='display:block'
            btn3.style.cssText='transform:rotate(0deg);transform-origin: 0;'
            setOpen(false)
        }else{
            btn1.style.cssText='transform:rotate(45deg);transform-origin: 2px 3px;'
            btn2.style.cssText='display:none'
            btn3.style.cssText='transform:rotate(-45deg);transform-origin: 2px 0;'
            setOpen(true)
        }
        

    }
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setChangeWith(window.innerWidth)
        })
    },[changeWith])
    return (
        <>
        {
            changeWith > 992 ?
            <div className='flex justify-between items-center container my-8'>
                <span><a className='font-bold text-4xl' href="#">mehrdadosoulisaran@gmail.com</a></span>
                <div className='flex items-center gap-2'>
                    <div className='w-14 h-7 hover:cursor-pointer border-black border-[3px] p-1 rounded-2xl relative' onClick={clickHandler}>
                        <div ref={spanElem} className='absolute transition-all rounded-lg mr-1 inline-block w-3 h-3 bg-black top-0 bottom-0 m-auto'></div>
                    </div>
                    <span className='font-bold text-4xl'>Mehrdad Osouli</span>
                </div>
            </div>
            :
            <div className='flex justify-between items-center container my-8'>
               <div className='flex items-center'>
                <div className='relative hover:cursor-pointer w-10 h-8 ' onClick={clickBtn} ref={clickBtnMenu}>
                    <span className='w-10 h-1 bg-black inline-block absolute top-0 transition'></span>
                    <span className='w-10 h-1 bg-black inline-block absolute top-3 transition'></span>
                    <span className='w-10 h-1 bg-black inline-block absolute top-6 transition'></span>
                </div>
               </div>
                <div className='flex items-center gap-2'>
                    <div className='w-14 h-7 hover:cursor-pointer border-black border-[3px] p-1 rounded-2xl relative' onClick={clickHandler}>
                        <div ref={spanElem} className='absolute transition-all rounded-lg mr-1 inline-block w-3 h-3 bg-black top-0 bottom-0 m-auto'></div>
                    </div>
                    <span className='font-bold text-4xl'>Mehrdad Osouli</span>
                </div>
            </div>
        }
        </>
    );
};

export default Header;