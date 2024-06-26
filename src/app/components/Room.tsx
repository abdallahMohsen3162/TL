import { faClose, faImage, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { UseSelector } from 'react-redux'
import {merge } from '../../../store/block'
export default function Room(param: Level) {
  const blocks = useSelector((state: any) => state.Blocks.arr);
  const [chose, setchonse] = useState(false);
  const dispacher = useDispatch();
  console.log(chose);
  const choose = (blockName: string, level: number) => {
    dispacher(merge({ name: blockName, level: level }));
    setchonse(false);
  }
  return (
    <div className="custom-row">
      {
        chose?(
          <div className='choose'>
            <button onClick={() => setchonse(false)}><FontAwesomeIcon icon={faClose} /></button>
            {
              blocks.map((el: Block) => {
                if(el.level === -1){
                  return <button onClick={() => choose(el.name,param.value)} className='custom-number-box' key={Math.round(Math.random()*1000)}>
                    {el.name}
                  </button>
                }
              })
            }
          </div>
        ):(
          null
        )
      }
      {
        param.url?(
          <div className=''>
            <img src={param.url} alt="profile" />
          </div>
        ):(
          <div>
            <FontAwesomeIcon icon={faImage} />
          </div>
        )
      }
      <div className="custom-name-box">{param.name}</div>
      <div className="custom-number-box">{param.value}</div>
      {
        blocks.map((el: Block) => {
          if(el.level === param.value){
          return <div className='custom-number-box' key={Math.round(Math.random()*1000)}>
            {el.name}
          </div>
          }
        })
      }
      <div className="custom-number-box">
        <button onClick={() => setchonse(!chose)} className='btn p-0 add-to-lvl'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}
