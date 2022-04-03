import React, { useState } from "react" 
import Head from "next/head" 
import Header from "../components/Header" 
import axios from "axios" 

export default function Notes({ result }) {
  const [notes, setNotes] = useState(result) 

  console.log(process.env.NEXT_PUBLIC_BASE_URL) 

  async function get() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`,
        {
          method: "GET",
          headers: {
            //'Authorization': 'Bearer ' + "jwt",
            "Content-Type": "application/json",
          },
        }
      ) 
      return setNotes(response.data.notes) 
    } catch (error) {
      console.error(error) 
    }
  }

  return (
    <>
      <Head>
        <title>Push Button | Notes</title>
      </Head>

      <Header />

      <div className="flex justify-center">
        <main className="w-full max-w-3xl xl:max-w-7xl space-y-4">
          <h1 className="text-2xl">Notes</h1>
          <div className="bg-[#21262b] p-4 text-white">
            <div className="space-y-2">
              <div className="flex justify-between">
                <h1 className="text-ocean-1 text-2xl">
                  Get from Python API
                </h1>
                <div className="ml-auto">
                  <button className="bg-[#007FFF] p-4 cursor-pointer" onClick={() => get()}>
                    GET
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                {notes.length > 1 ? (
                  <>
                    {notes.map((note) => {
                      return (
                        <div
                          key={note.id}
                          className="p-2 border border-ocean-1 rounded-md"
                        >
                          <h4 className="text-ocean-1 text-2xl">
                            {note.id}. {note.title.toUpperCase()}
                          </h4>
                          <p className="font-light">{note.content}</p>
                          <p className="font-thin">{note.content}</p>
                        </div>
                      ) 
                    })}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  ) 
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`,
    {
      method: "GET",
      headers: {
        //'Authorization': 'Bearer ' + "jwt",
        "Content-Type": "application/json",
      },
    }
  )
  const result = response.data.notes

  return {
    props: { result },
  } 
}