"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blocks from '../../../store/block';
import Levels from '../../../store/slice';
import Level from '../components/Level';
import Link from 'next/link';
import { faBackward, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Room from '../components/Room';

export default function Page() {
  const blocks = useSelector((state: any) => state.Blocks.arr);
  const levels = useSelector((state: any) => state.Levels.arr);

  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log(blocks);
    console.log(levels);
  }, [blocks, levels]);
  
  return (
    <div className='container slice game'>
      <h1 className='display-1 text-light'>
        Tiers List
      </h1>
      
      <div className="custom-container">
          {
            levels.map((el: any) => {
              return <div key={Math.round(Math.random() * 1000)}>
                <Room value={el.value} name={el.name} url={el.url}/>
              </div>
            })
          }
      </div>
      <Link href="/blocks" className='btn btn-primary'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
    </div>
  );
}
