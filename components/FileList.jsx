import React from 'react'
import SingleFileWithProgress from "./SingleFileWithProgress";
import ValidationError from "./ValidationError";

const FileList = ({files, keywordsList, setFiles}) => {

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

  return (
    <div className="border-ocean-1 border rounded-md">
      {files.map((fileWrapper, index) => (
        <div key={index} className='bg-[#001e3c] border border-[#1e4976] p-2 rounded-md'>
          {fileWrapper.errors.length ? 
            <ValidationError 
              file={fileWrapper.file}
              word={word}
              errors={fileWrapper.errors}
              onDelete={onDelete}
            />
          :
            <SingleFileWithProgress
              file={fileWrapper.file}
              keywordsList={keywordsList}
              errors={fileWrapper.errors}
              onUpload={onUpload}
              onDelete={onDelete}
            />
          }
          </div>
      ))}
    </div>
  )
}

export default FileList