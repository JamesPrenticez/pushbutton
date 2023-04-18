import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useField } from "formik";
import FileList from "./FileList";
import UploadIcon from "./icons/UploadIcon";

export default function MultipleFileUpload({name}) {
  const [files, setFiles] = useState([]);
  const [word, setWord] = useState("hi");
  const [ _, __, helpers] = useField(name)

  useEffect(() => {
    helpers.setValue(files)
  }, [files])

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    const mappedAccepted = acceptedFiles.map((file) => ({ file, errors: [] }));
    setFiles((current) => [...current, ...mappedAccepted, ...rejectedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'application/pdf',
    maxSize: 300 * 1024, //approx 300kb
    maxFiles: 2
  });
  
  return (
    <>
      <div>
        <input 
          type="text" 
          className="bg-red-500 text-white w-full rounded-md"
          value={word}
          onChange={(e) => setWord(e.target.value)} />
      </div>

      <div
        className="flex flex-col justify-center items-center bg-gray-200 w-full h-auto p-8 rounded-md"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <UploadIcon />
        <p className="w-full text-center text-ocean-2">
          Click or drag and drop files to upload
        </p>
      </div>

      <FileList files={files} word={word} setFiles={setFiles}/>

    </>
  );
}
