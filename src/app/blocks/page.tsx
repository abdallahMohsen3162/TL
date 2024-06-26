'use client';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faChevronLeft, faChevronRight, faForward, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addblock, removeblokc } from '../../../store/block';
import Link from 'next/link';

export default function Page() {
  const [add, setAdd] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const arr = useSelector((state: any) => state.Blocks.arr);

  const append = () => {
    if (!name) {
      return;
    }
    dispatch(addblock({ name, level: -1 }));
    setName('');
    ref.current?.focus();
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    append();
  };

  return (
    <div style={{height:'100vh'}} className='container slice'>
      
      <h4 className='text-center display-4 text-light'>Blocks</h4>
      <div className='d-flex gap-3'>
        <Link href="/" className="btn btn-primary">
        <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        
        <button onClick={() => setAdd(!add)} className='btn btn-primary'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <br /> <br />
      {add && (
        <form onSubmit={handleFormSubmit}>
          <div className='card'>
            <input
              ref={ref}
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <button type='submit'>Add</button>
          </div>
        </form>
      )}
      {arr.map((el: any, idx: number) => (
        <div key={el.id || idx} className='text-light'>
          <h6>
            <strong>{idx + 1}</strong> {el.name}
          </h6>
        </div>
      ))}
      <Link href="/game" className="btn btn-primary">
      <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </div>
  );
}
