import React from 'react'

function Python() {
  const cow = async () => {
    //const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(`http://localhost:3000/python/cow`)
    console.log(res)
    const data = await res.json()
    console.log(data)
  }

  //https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream < -This!
// fetch('https://pushbutton.vercel.app/api')
// .then(response => response.body)
// .then(rb => {
//   const reader = rb.getReader();

//   return new ReadableStream({
//     start(controller) {
//       // The following function handles each data chunk
//       function push() {
//         // "done" is a Boolean and value a "Uint8Array"
//         reader.read().then( ({done, value}) => {
//           // If there is no more data to read
//           if (done) {
//             console.log('done', done);
//             controller.close();
//             return;
//           }
//           // Get the data and send it to the browser via the controller
//           controller.enqueue(value);
//           // Check chunks by logging to the console
//           console.log(done, value);
//           push();
//         })
//       }

//       push();
//     }
//   });
// })
// .then(stream => {
//   // Respond with our stream
//   return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
// })
// .then(result => {
//   // Do things with result
//   console.log("readable stream?");
//   console.log(result);
// });

  return (
    <div 
    className='bg-yellow-500 h-32 w-32 text-white m-8'
    onClick={() => cow()}
  >
    cow
  </div>
  )
}

export default Python