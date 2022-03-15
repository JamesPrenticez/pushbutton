const {spawn} = require('child_process');

export default function handler(req, res) {
    let python = spawn('python', ['python/hello.py']);
    let dataToSend = '';

    python.stdout.on("data", (data) => {
      //console.log(data)
      dataToSend += data.toString();
    })

    python.stderr.on('data', (data) => {
      console.error(data.toString());
    });
 
    python.on("exit", (code) => {
    console.log(dataToSend)
    res.status(200).json({ message: dataToSend});
  })
}

//https://stackoverflow.com/questions/60684227/api-resolved-without-sending-a-response-in-nextjs