import { useEffect, useState } from "react"

function randomSzam(min: number, max: number){
 return Math.floor(Math.random()*(max - min+1)) + min
}


const App = () => {
  const [greens, setGreens] = useState(false)
  const [time, setTme] = useState(0)
  const [running, setRunning] = useState(true)
  const [rnd, setRnd] = useState(randomSzam(500, 1000))

  useEffect(() => {
    const id = setInterval(() => {
      if(running && !greens){
        setTimeout(() => {setGreens(true)}, rnd)
        setTme(prev => prev + 1)
      }
    }, 1)


  return () => { clearInterval(id) }
}, [running])



  return (
  <div style={{
        backgroundColor: greens ? "green" : "red",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        cursor: "pointer",
        userSelect: "none",
        textAlign: "center"
      }}>
   
    {time - rnd}
    <button id="gomb" onClick={() => {setRunning(false); setTme(time - rnd)} }>Stop</button>
    {running === false && <button onClick={() => {setTme(0); setRunning(true)}}>Start</button>}
  </div>

)
}
export default App