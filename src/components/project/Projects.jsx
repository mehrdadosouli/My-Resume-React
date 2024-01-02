import React, { useEffect, useReducer, useState } from 'react'
import {All,Melodrama,Comedy,Detective,Actionmovie,Drema,HistoricalFilm} from '../../reducer/action.js'
import Project_Item from "../project/Project_Item.jsx"
// import image from '../../photos/image-1.jpg'
const initial={
    galery:[
        {name:'Comedy',id:1,src:'../../photos/image3.png',w:750,h:380,top:0,right:76,display:'none'}, 
        {name:'Comedy',id:2,src:'../../photos/image4.png',w:292,h:160,top:0,right:42,display:'none'},
        {name:'Actionmovie',id:3,src:'../../photos/image3.png',w:292,h:160,top:0,right:7,display:'none'},
        {name:'HistoricalFilm',id:4,src:'../../photos/image-1.jpg',w:292,h:160,top:22,right:42,display:'none'},
        {name:'Drema',id:5,src:'../../photos/image2.jpg',w:292,h:160,top:22,right:7,display:'none'},
        {name:'Comedy',id:6,src:'../../photos/image-1.jpg',w:645,h:380,top:45,right:7,display:'none'},
        {name:'Detective',id:7,src:'../../photos/image2.jpg',w:292,h:160,top:45,right:76,display:'none'},
        {name:'Detective',id:8,src:'../../photos/image4.png',w:292,h:160,top:45,right:109,display:'none'},
        {name:'Melodrama',id:9,src:'../../photos/image3.png',w:292,h:160,top:67,right:76,display:'none'},
        {name:'Melodrama',id:10,src:'../../photos/image-1.jpg',w:292,h:160,top:67,right:109,display:'none'},
    ],
update:[]}
const actionElements=(state,name)=>{
   const result= state.filter(item=>{
    if(item.name == name){
        return item
      }
    })
     return result
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'All':
            console.log(state);
            const newState=[...state.galery];

            return {
                ...state,
                update:newState
            };
        case 'Melodrama':
           const result= actionElements(state.galery,'Melodrama')
           result.map(item=>{
            item.top=action.payload
           })
            return {
                ...state,
                update:actionElements(state.galery,'Melodrama')
            }
        case 'Comedy':  
        // const result1= actionElements(state.galery,'Melodrama')
        //    result1.map(item=>{
        //     item.top=0
        //    })
            return {
                ...state,
                update:actionElements(state.galery,'Comedy')
            };
        case 'Detective': 
            return {
                ...state,
                update:actionElements(state.galery,'Detective')
            };
        case 'Actionmovie':  
            return {
                ...state,
                update:actionElements(state.galery,'Actionmovie')
            };
        case 'Drema':
            return {
                ...state,
                update:actionElements(state.galery,'Drema')
            };
        case 'HistoricalFilm':
            return {
                ...state,
                update:actionElements(state.galery,'HistoricalFilm')
            };
    
        default:
            return state;
    }
}
export default function Projects() {
    const [updateState,setState]=useState([])
    const [state,dispatch]=useReducer(reducer,initial)
    useEffect(()=>{
        setState([...state.galery])
        state.update=[...state.galery]
    },[])
  return (
    <>
        <div className='flex ltr-dir container'>
            <ul className='flex gap-10 hover:[&>*]:cursor-pointer [&>*]:text-gray-500 hover:[&>*]:text-black [&>*]:transition'>
                <li onClick={()=>{dispatch(Actionmovie())}}>Action movie</li>
                <li onClick={()=>{dispatch(Comedy())}}>Comedy</li>
                <li onClick={()=>{dispatch(Detective())}}>Detective</li>
                <li onClick={()=>{dispatch(Drema())}}>Drema</li>
                <li onClick={()=>{dispatch(HistoricalFilm())}}>Historical Film</li>
                <li onClick={()=>{dispatch(Melodrama())}}>Melodrama</li>
                <li onClick={()=>{dispatch(All())}}>All</li>
            </ul>
        </div>
        <div className='h-1 bg-gray-200 my-10'>
            <div className='container h-1 relative ltr-dir [&>*]:border-gray-400 [&>*]:border [&>*]:rounded-full [&>*]:absolute [&>*]:bottom-0 [&>*]:top-0 [&>*]:my-auto [&>*]:bg-[#eee]'>
                <div className='w-7 h-7 left-0 bg-[#eee]'></div>
                <div className='w-7 h-7 left-16 bg-[#eee]'></div>
                <div className='w-7 h-7 left-60 bg-[#eee]'></div>
                <div className='w-7 h-7 left-[270px] bg-[#eee]'></div>
                <div className='w-7 h-7 left-[350px] bg-[#eee]'></div>
                <div className='w-7 h-7 left-[440px] bg-[#eee]'></div>
                <div className='w-7 h-7 left-[520px] bg-[#eee]'></div>
            </div>
            <Project_Item info={state.update} /> 
        </div>
    </>
  )
}
