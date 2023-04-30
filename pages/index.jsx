import React, { useState } from 'react'
import Head from "next/head";

import { project } from '../constants'
import KeywordForm from '../components/keywords/KeywordForm';

export default function Home() {
  return (
      <div className="flex w-full min-h-screen max-w-7xl mx-auto bg-ocean-4 pt-[7rem] pb-[1rem]">
      <Head>
        <title>{project.name} | Home</title>
      </Head>
        
      <KeywordForm />

      </div>
  );
}