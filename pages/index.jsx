import React from 'react'
import Head from "next/head";
import Header from '../components/Header';
import { Form, Formik } from "formik";
import MultipleFileUpload from "../components/MultipleFileUpload"

export default function Home() {
  return (
    <>
      <Head>
        <title>Push Button | Home</title>
      </Head>

      <Header />

      <div className="flex justify-center w-full">
        <Formik  initialValues={{files: []}} onSubmit={() => {}}>
          {({ values, errors }) => (
            <Form className="w-1/2 p-16 space-y-2">
              <MultipleFileUpload name='files'/>
              <pre className="border border-ocean-1 p-4 rounded-sm">{JSON.stringify({ values, errors }, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </div>

      <div className='bg-ocean-1 h-16 w-64'></div>
      <div className='bg-ocean-2 h-16 w-64'></div>
      <div className='bg-ocean-3 h-16 w-64'></div>
      <div className='bg-ocean-4 h-16 w-64 '></div>
    </>
  );
}

