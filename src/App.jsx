import { useState, useEffect } from 'react' 
import './App.css'

function App() {
  const url = "http://localhost:3001/"

  const [title, setTitle] = useState("Default title");

  const getMessage = async () => {
    const res = await fetch(url);
    const data = await res.json()
    setTitle(data.msg)
  }
  
  useEffect(() => {
    getMessage()
  }, [])
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  )
}

export default App
