import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useField } from "formik";
import FileList from "./FileList";
import UploadIcon from "./icons/UploadIcon";
import InputText from "./common/InputText";
import ChipsList from "./common/ChipsList";
import PredefindedListOfKeyWords from "./common/PredefindedListOfKeyWords";

export default function MultipleFileUpload({name}) {
  const [files, setFiles] = useState([]);
  const [ _, __, helpers] = useField(name)
  const [keywords, setKeywords] = useState([]);

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

  const handleAddKeywords = (inputValue) => {
    if (!inputValue) return
    // const itemsToAdd = inputValue.split(",").map((item) => item.trim());
    const newKeywordsToAdd = inputValue.split(",").map((item) => {
      return { id: generateUniqueId(), name: item.trim() };
    });
    setKeywords((prevKeywords) => [...prevKeywords, ...newKeywordsToAdd]);
  }

  const generateUniqueId = () => {
    return Date.now().toString() + Math.random().toString(36).substring(2, 9);
  };

 
  const handleRemoveKeyword = (idToRemove) => {
    setKeywords(keywords.filter((keyword) => keyword.id !== idToRemove));
  }

  return (
    <>
      <div className="space-y-2 mb-2">
        <InputText handleAddKeywords={handleAddKeywords} />
        <PredefindedListOfKeyWords handleAddKeywords={handleAddKeywords}/>

        <ChipsList items={keywords} handleRemoveKeyword={handleRemoveKeyword} />

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

      <FileList files={files} keywordsList={keywords} setFiles={setFiles}/>

    </>
  );
}
