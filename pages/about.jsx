import React, {useState} from 'react'
import Head from "next/head";
import Navbar from '../components/layout/Navbar';
import { project } from '../constants';

export default function About() {

  const [items, setItems] = useState([])

  function convertStringToArray() {
    const string = "one, two, three, four, five";
    const itemsToAdd = string.split(",").map((item) => item.trim());
    setItems((prevItems) => [...prevItems, ...itemsToAdd]);
  }

  console.log(items)

  return (
    <>
      <Head>
        <title>{project.name} | Home</title>
      </Head>

      <Navbar />

      <div className="flex justify-center w-full pt-[8rem]">
        <button type="button" className="bg-green-500" onClick={() => convertStringToArray()}>CONVERT</button>
      </div>

      <div>
        {items.map((item)=>(
          <p key={Math.random()}>
            {item}
          </p>
        ))}
      </div>
 
    </>
  );
}

