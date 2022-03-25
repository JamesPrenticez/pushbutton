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
              <pre className="text-white ">{JSON.stringify({ values, errors }, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

// #0a1929 - dark
// #001e3c - less dark
// #1e4976 - border
// #007FFF - light blue