import React, { useState } from 'react'
import Head from "next/head";
import Header from '../components/Header';
import axios from 'axios';

export default function Extract() {
  const [result0, setResult0] = useState('')
  const [result1, setResult1] = useState('')
  const [result2, setResult2] = useState('')

  //LOCAL HOST
  async function handleClick0(){
    try {
        const response = await axios.get('http://localhost:3000/api/python');
        console.log(response);
        setResult0(response.data.message)
      } catch (error) {
        console.error(error);
      }
  }

  //VERCEL
  async function handleClick1(){
    try {
        const response = await fetch('api/date')
        console.log(response);
        setResult1(response.data)
      } catch (error) {
        console.error(error);
      }
  }

  async function handleClick2(){
    try {
        const response = await fetch('api/cow')
        console.log(response);
        setResult2(response.data)
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
              <p>LocalHost = {result0}</p>
            </div>

            <div className="ml-auto ">
              <button
                className="bg-[#007FFF] p-4"
                onClick={() => handleClick0()}
              >
                FETCH
              </button>
            </div>
          </div>

          <div className="flex justify-between bg-[#21262b] cursor-pointer p-4 text-white">
            <div className="">
              <p>One Date= {result1}</p>
            </div>

            <div className="ml-auto ">
              <button
                className="bg-[#007FFF] p-4"
                onClick={() => handleClick1()}
              >
                FETCH
              </button>
            </div>
          </div>

          <div className="flex justify-between bg-[#21262b] cursor-pointer p-4 text-white">
            <div className="">
              <p>One Date= {result2}</p>
            </div>

            <div className="ml-auto ">
              <button
                className="bg-[#007FFF] p-4"
                onClick={() => handleClick2()}
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