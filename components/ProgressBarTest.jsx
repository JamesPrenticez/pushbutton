import React from 'react'
import ProgressBar from "../components/ProgressBar";

function ProgressBarTest() {
  const [progress, setProgress] = useState(0)
  console.log('progress', progress)

  useEffect(() => {
      progress < 100 && setTimeout(() => setProgress(progress + 25), 100);
  }, [progress]);

  return (
    <div className=" px-64">
      <ProgressBar progress={progress} />
    </div>
  )
}

export default ProgressBarTest