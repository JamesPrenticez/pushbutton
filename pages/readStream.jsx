import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";

function readStream() {
  const [result, setResult] = useState("");
  async function handleClick() {
    try {
      fetch("https://pushbutton.vercel.app/api/date")
        .then((response) => response.body)
        .then((rb) => {
          const reader = rb.getReader();

          return new ReadableStream({
            start(controller) {
              // The following function handles each data chunk
              function push() {
                // "done" is a Boolean and value a "Uint8Array"
                reader.read().then(({ done, value }) => {
                  // If there is no more data to read
                  if (done) {
                    console.log("done", done);
                    controller.close();
                    return;
                  }
                  // Get the data and send it to the browser via the controller
                  controller.enqueue(value);
                  // Check chunks by logging to the console
                  console.log(done, value);
                  push();
                });
              }

              push();
            },
          });
        })
        .then((stream) => {
          // Respond with our stream
          return new Response(stream, {
            headers: { "Content-Type": "text/html" },
          }).text();
        })
        .then((result) => {
          // Do things with result
          console.log("readable stream???????????");
          console.log(result);
          console.log(response);
          setResult(result);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Head>
        <title>Push Button | Extract</title>
      </Head>

      <Header />

      <div className="flex justify-center">
        <main className="w-full max-w-3xl xl:max-w-7xl space-y-4">
          <h1>Quick Maths</h1>

          <div className="flex justify-between bg-[#21262b] cursor-pointer p-4 text-white">
            <div className="">
              <p>LocalHost AXIOS = {result}</p>
            </div>
            <div className="ml-auto ">
              <button
                className="bg-[#007FFF] p-4"
                onClick={() => handleClick()}
              >
                AXIOS
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default readStream;

//https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream < -This!