import React from 'react'
import { Form, Formik } from "formik";
import MultipleFileUpload from "../MultipleFileUpload"

const KeywordForm = () => {
  return (
    <Formik 
      initialValues={{files: []}} 
      onSubmit={(values) => {console.log(values)}}
    >
    {({ values, errors }) => {
      return (
        <Form className="flex w-full justify-between space-x-4 px-4">
          <div className='w-full'>
            <MultipleFileUpload name='files'/>
          </div>
          <div className='w-full bg-gray-100 text-black border border-ocean-1  rounded-md'>
            <pre className=" h-full">
                {/* {JSON.stringify({ values, errors }, null, 2)} */}
                {values.files.map((file, index) => {
                  return (
                      <div 
                        key={file.file.path + index}
                        className='p-2 '
                        style={{ backgroundColor: index % 2 === 0 ? '#007FFF33' : '#1e497633' }}
                      >
                        <p><b>Filename:</b>&nbsp;{file?.file.path}</p>
                        <p><b>Candidate Name:</b>&nbsp;{file?.url?.candidate_name}</p>
                        {file?.url?.data && Object.keys(file.url.data).map((item, index) => (
                          <div key={item + index}>
                            <b>{item}</b>: {file.url.data[item]}
                          </div>
                        ))}
                      </div>
                    )
                  }
                )}
            </pre>
          </div>
        </Form>
      )
    }}
  </Formik>
  )
}

export default KeywordForm