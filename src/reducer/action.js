const All=(state)=>{
    return {type:'All',payload:state}
}
const Melodrama=(state)=>{
    return {type:'Melodrama',payload:state}
}
const Comedy=(state)=>{
    return {type:'Comedy',payload:state}
}
const Detective=(state)=>{
    return {type:'Detective',payload:state}
}
const Actionmovie=(state)=>{
    console.log('hello');
    return {type:'Actionmovie',payload:state}
}
const Drema=(state)=>{
    return {type:'Drema'}
}
const HistoricalFilm=(state)=>{
    return {type:'HistoricalFilm',payload:state}
}
export {All,Melodrama,Comedy,Detective,Actionmovie,Drema,HistoricalFilm}