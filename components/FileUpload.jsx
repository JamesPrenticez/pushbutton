import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import SingleFileWithProgress from './SingleFileWithProgress'

export default function FileUpload() {
  const [files, setFiles] = useState([])

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    const mappedAccepted = acceptedFiles.map(file => ({file, errors: []}))
    setFiles(current => [...current, ...mappedAccepted, ...rejectedFiles])
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const onDelete = (file) => {
    setFiles((currentFiles) => {
      return currentFiles.filter((fileWrapper) => fileWrapper.file !== file)
    })
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-200 w-full h-auto p-8 rounded-md'{...getRootProps()}>
        <input {...getInputProps()} />
        <svg
          className="h-20 w-20 text-[#666]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"

        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
        </svg>
        <p className='w-full text-center'>Click or drag and drop files to upload</p>
      </div>
      {files.map((fileWrapper, index) => (
        <SingleFileWithProgress key={index} file={fileWrapper.file} onDelete={onDelete} />
      ))}
    </>
  );
}