import React from 'react'
import Head from "next/head";
import Navbar from '../components/layout/Navbar';
import { project } from '../constants';

export default function About() {
  return (
    <>
      <Head>
        <title>{project.name} | Home</title>
      </Head>

      <Navbar />

      <div className="flex justify-center w-full">
        About
      </div>

 
    </>
  );
}

