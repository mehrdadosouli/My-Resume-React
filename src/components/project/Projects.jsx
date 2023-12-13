import React, { useEffect, useReducer, useState } from 'react'
import {All,Melodrama,Comedy,Detective,Actionmovie,Drema,HistoricalFilm} from '../../reducer/action.js'
import Project_Item from "../project/Project_Item.jsx"
// import image from '../../photos/image-1.jpg'
const initial={
    galery:[
        {name:'action',id:1,src:'../../photos/image-1.jpg'},
        {name:'action',id:2,src:'../../photos/image2.jpg'},
        {name:'comedy',id:3,src:'../../photos/image3.png'}, 
        {name:'comedy',id:4,src:'../../photos/image4.png'},
        {name:'comedy',id:5,src:'../../photos/image-1.jpg'},
        {name:'detective',id:6,src:'../../photos/image2.jpg'},
        {name:'detective',id:7,src:'../../photos/image4.png'},
        {name:'Melodrama',id:8,src:'../../photos/image3.png'},
        {name:'Actionmovie',id:9,src:'../../photos/image3.png'},
        {name:'HistoricalFilm',id:10,src:'../../photos/image3.png'},
        {name:'Drema',id:11,src:'../../photos/image3.png'},
    ],
update:[]}
const actionElements=(state,name)=>{
    state.filter(item=>{
         return item.name == name
     })
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'All':
            const newState=[...state.galery];
            console.log(state);
            return {
                ...state,
                update:newState
            };
        case 'Melodrama':
           const newState2=[...state.galery]
           const result1= newState2.filter(item=>{
                return item.name=='Melodrama'
            })
            actionElements(state.)
            return {
                ...state,
                update:[...result1]
            }
        case 'Comedy':
            const newState3={...state}
            const result2=newState3.galery.filter(item=>{return item.name =='comedy'})      
            return {
                ...state,
                update:[...result2]
            };
        case 'Detective':
            const newState4={...state}
            const result3=newState4.galery.filter(item=>{return item.name =='detective'})      
            return {
                ...state,
                update:[...result3]
            };
        case 'Actionmovie':
            const newState5={...state}
            const result4=newState5.galery.filter(item=>{return item.name =='Actionmovie'})      
            return {
                ...state,
                update:[...result4]
            };
        case 'Drema':
            const newState6={...state}
            const result5=newState6.galery.filter(item=>{return item.name =='Drema'})      
            return {
                ...state,
                update:[...result5]
            };
        case 'HistoricalFilm':
            const newState7={...state}
            const result6=newState7.galery.filter(item=>{return item.name =='HistoricalFilm'})      
            return {
                ...state,
                update:[...result6]
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
                <li onClick={()=>{dispatch(Actionmovie(updateState))}}>Action movie</li>
                <li onClick={()=>{dispatch(Comedy(updateState))}}>Comedy</li>
                <li onClick={()=>{dispatch(Detective(updateState))}}>Detective</li>
                <li onClick={()=>{dispatch(Drema(updateState))}}>Drema</li>
                <li onClick={()=>{dispatch(HistoricalFilm(updateState))}}>Historical Film</li>
                <li onClick={()=>{dispatch(Melodrama(updateState))}}>Melodrama</li>
                <li onClick={()=>{dispatch(All(updateState))}}>All</li>
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
