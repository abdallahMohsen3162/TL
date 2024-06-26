import { faBackward, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addlevel, removelevel } from '../../../store/slice';
import Link from 'next/link';

export default function Add() {
  const [form, setform] = useState(false);
  const [name, setname] = useState('');
  const [value,setvalue] = useState(0);
  const [url, seturl] = useState('');
  const dispatch = useDispatch();
  const Switch = () => {
    console.log("switch");
    setform(!form);
    setname('');
    setvalue(0);
    seturl('');
  }
  const addLevel = () => {
    if(!name || !value){
      return;
    }
    console.log(name, value, url);
    dispatch(addlevel({ name, value, url }));
    setname('');
    setvalue(0);
    seturl('');
    setform(false);
  }
  return (
    <div className='container slice p-2'>

      <div className="">

      <button onClick={Switch} className='btn btn-primary'>
        <FontAwesomeIcon icon={faPlus} />
         Level
      </button>
        <div id="tierForm" className={`${form ? "d-block" : "d-none"}`}>
            <h1 className='text-light display-6'>
                Add Level  
            </h1>  
            <div className="form-group">
                <label >Name:</label>
                <input onChange={(e) => setname(e.target.value)} type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label>Value:</label>
                <input onChange={(e) => setvalue(e.target.value as unknown as number)} type="number" id="value" name="value" required />
            </div>
            <div className="form-group">
                <label>Image URL (optional):</label>
                <input onChange={(e) => seturl(e.target.value)} type="url" id="url" name="url" />
            </div>
            <button onClick={addLevel}>Add to Tier List</button>
        </div>

    </div>
    </div>
  )
}
