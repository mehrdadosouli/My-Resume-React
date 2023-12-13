import React from 'react'

export default function Project_Item(props) {
  return (<div className='flex gap-10 ltr-dir'>
      {props.info.map(elem=>{return <div key={elem.id}>
           <h1>{elem.name}</h1>
        </div>
        }) 
      }
      </div>
  )
}
