import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import SingleFileWithProgress from './SingleFileWithProgress'

export default function MyDropzone() {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    const mappedAccepted = acceptedFiles.map(file => ({file, errors: []}))
    setFiles(current => [...current, ...mappedAccepted, ...rejectedFiles])
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <>
    <div {...getRootProps()}>
      <input {...getInputProps()} />  
          <p>Drop the files here ...</p>
     </div>
     {files.map((fileWrapper, index)=> (
       <SingleFileWithProgress key={index} file={fileWrapper.file}/>
     ))}
    </>
  )
}