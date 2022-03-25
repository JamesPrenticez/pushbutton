import React, { useState } from 'react'
import Head from "next/head";
import Header from '../components/Header';
import axios from 'axios';

export default function Extract() {
  const [result, setResult] = useState('')

  async function handleClick(){
    try {
        //const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/message`)
        const response = await axios.get('http://localhost:3000/api/hello');
        console.log(response);
        setResult(response.data.message)
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <>
      <Head>
        <title>Push Button | Extract</title>
      </Head>

      <Header />

      <div className="flex justify-center">
        <main className="w-full max-w-3xl xl:max-w-7xl space-y-4">
          <h1>Quick Maths</h1>

          <div className="flex justify-between bg-[#21262b] cursor-pointer p-4 text-white">
            <div className="">
              <p>Result = {result}</p>
            </div>

            <div className="ml-auto ">
              <button
                className="bg-[#007FFF] p-4"
                onClick={() => handleClick()}
              >
                FETCH
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}