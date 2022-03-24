import React, {useState, useEffect} from 'react'
import Head from "next/head";
import { Form, Formik } from "formik";
import MultipleFileUpload from "../components/MultipleFileUpload"
import ProgressBar from "../components/ProgressBar";

export default function Home({ data }) {
  // const [progress, setProgress] = useState(0)
  //   console.log('progress', progress)

  // useEffect(() => {
  //     progress < 100 && setTimeout(() => setProgress(progress + 25), 100);
  // }, [progress]);

  return (
    <>
      <Head>
        <title>Push Button | Home</title>
      </Head>

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

      {/* <div className=" px-64">
        <ProgressBar progress={progress} />
       </div>
       */}

    </>
  );
}

// #0a1929 - dark
// #001e3c - less dark
// #1e4976 - border
// #007FFF - light blue