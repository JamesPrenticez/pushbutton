import React, { useEffect, useState } from "react" 
import FileHeader from "./FileHeader";
import ProgressBar from "./ProgressBar";

export default function SingleFileWithProgress({file, keywordsList, errors, onUpload, onDelete}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    async function upload(){
      const url = await uploadFile(file, keywordsList, setProgress)
      console.log("file upload success: ", url)
      onUpload(file, url)
    }
      upload()
  }, [])

  return (
    <>
      <FileHeader file={file} onDelete={onDelete} />
      <ProgressBar progress={progress} errors={errors}/>
    </>
  )
}

function uploadFile(file, keywordsList, onProgress){
  const url = "http://localhost:5000/process_pdf"

  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url);
    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText)
      res(response)
    }
    xhr.onerror = (e) => rej(e);
    xhr.upload.onprogress = (e) => {
      if(e.lengthComputable){
        const percentage = (e.loaded / e.total) * 100
        onProgress(Math.round(percentage))
      }
    }
    const formData = new FormData()
    formData.append('file', file)
    formData.append('list', JSON.stringify(keywordsList))

    xhr.send(formData)
  })
}