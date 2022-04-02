import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useField } from "formik";
import SingleFileWithProgress from "./SingleFileWithProgress";
import ValidationError from "./ValidationError";

export default function MultipleFileUpload({name}) {
  const [files, setFiles] = useState([]);
  const [ _, __, helpers] = useField(name)

  useEffect(() => {
    helpers.setValue(files)
    //helpers.setTouched(true)
  }, [files])

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    const mappedAccepted = acceptedFiles.map((file) => ({ file, errors: [] }));
    setFiles((current) => [...current, ...mappedAccepted, ...rejectedFiles]);
  }, []);

  const onUpload = (file, url) => {
    setFiles((currentFiles) => currentFiles.map((fileWrapper) => {
      if(fileWrapper.file === file){
        return {...fileWrapper, url}
      }
      return fileWrapper
    }))
  }

  const onDelete = (file) => {
    setFiles((currentFiles) => currentFiles.filter((fileWrapper) => fileWrapper.file !== file))
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 300 * 1024, //approx 300kb
    maxFiles: 2
  });
  
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-gray-200 w-full h-auto p-8 rounded-md"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <svg
          className="h-20 w-20 text-ocean-1"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
        </svg>
        <p className="w-full text-center text-ocean-2">
          Click or drag and drop files to upload
        </p>
      </div>

      {files.map((fileWrapper, index) => (
        <div key={index} className='bg-[#001e3c] border border-[#1e4976] p-2 rounded-md'>
          {fileWrapper.errors.length ? 
            <ValidationError 
              file={fileWrapper.file}
              errors={fileWrapper.errors}
              onDelete={onDelete}
            />
          :
            <SingleFileWithProgress
              file={fileWrapper.file}
              errors={fileWrapper.errors}
              onUpload={onUpload}
              onDelete={onDelete}
            />
          }
          </div>
        ))}
    </>
  );
}
