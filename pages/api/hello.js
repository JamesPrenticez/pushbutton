const {spawn} = require('child_process');

export default async function handler(req, res) {
    //let python = spawn('python', [__dirname + '/hi.py']);
    let python = spawn('python', ["C:/Users/prent/github/pushbutton/" + "api/cow.py"]);
    let dataToSend = '';
 
    for await (const data of python.stdout){
      console.log(data.toString());
      dataToSend += data.toString()
    }

    python.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      console.log(dataToSend)
    });

  return res.status(200).json({ message: dataToSend})
}

//https://medium.com/swlh/run-python-script-from-node-js-and-send-data-to-browser-15677fcf199f
//https://stackoverflow.com/questions/58570325/how-to-turn-child-process-spawns-promise-syntax-to-async-await-syntax
//https://javascript.plainenglish.io/how-to-run-python-script-using-node-js-6b351169e916
//https://stackoverflow.com/questions/60684227/api-resolved-without-sending-a-response-in-nextjs


//https://github.com/vercel/pkg/issues/107#issuecomment-563942572 < this?

// export default function handler(req, res) {
//   let python = spawn('python', ['python/hello.py']);
//   let dataToSend = 'a';

//   python.stdout.on("data", (data) => {
//     console.log(data)
//     dataToSend += data.toString();
//   })

//   python.stderr.on('data', (data) => {
//     console.error(data.toString());
//   });

//   python.on("exit", (code) => {
//   res.status(200).json({ message: dataToSend})
// })
// }