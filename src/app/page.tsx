"use client"; 
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { addlevel , removelevel} from "../../store/slice";

import swal from "sweetalert";
import Levels from '../../store/slice';
import Add from './components/Add';
import Level from "./components/Level";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faChevronRight, faForward } from "@fortawesome/free-solid-svg-icons";
export default function Home() {

  const arr = useSelector((state: any) => state.Levels.arr);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(arr);
  }, [arr])
  return (
    <div className="box">
        <Add />
          <div className="container slice">
            <h1 className="display-1 text-light">Levels</h1>
            <div id="tierList" className="tier-list">
              {arr.map((el: Level, idx:number) => {
                return <div key={Math.round(Math.random()*1000)}>
                  <Level value={el.value} name={el.name} url={el.url}/>
                </div>
              })}
            </div>
         
            <Link href={"/blocks"} className="btn btn-primary">
            <FontAwesomeIcon icon={faChevronRight} />
            </Link>
         </div>
    </div>
  );
}
