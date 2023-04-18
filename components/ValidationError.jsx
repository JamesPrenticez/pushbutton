import React from "react" 
import FileHeader from "./FileHeader";
import ProgressBar from "./ProgressBar";

export default function ValidationError({file, errors, onDelete}) {
  return (
    <>
      <FileHeader file={file} onDelete={onDelete} />
      <ProgressBar progress={100} errors={errors}/>
    </>
  )
}