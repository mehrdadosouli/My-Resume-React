import React from 'react'
import styles from './project_item.module.css'
export default function Project_Item(props) {
  return (<div className='container flex ltr-dir gap-10 flex-wrap'>
      {props.info.map(elem=>{return <div key={elem.id}>
        <img src={elem.src} className={styles.img}   alt="" />
           <h1>{elem.name}</h1>
        </div>
        }) 
      }
      </div>
  )
}
