import {useEffect, useState} from 'react'

function Menu() {
  const[counter, setCounter] = useState(0)
  const[blob, setBlob] = useState([])

  useEffect(
    () => {
      console.log("first time")
      return () => { console.log("Unmounting")}
    }, []
  ) // onMounting

  useEffect(
    () => {
      console.log("updating blob")
    }, [blob]
  ) // onUpdate blob

  useEffect(
    () => {
      console.log("updating counter")
    }, [counter]
  ) // onUpdate blob

  useEffect(
    () => {
      console.log("updating everything")
    }
  ) // onUpdate everything


  const increase = _ => setCounter(prev => prev + 1)
  const decrease = _ => setCounter(prev => prev - 1)
  const increaseBlob = _ => setBlob(prev => [...prev, "nuevo h1"])

    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title 1</h5>
            <p className="card-text">Counter {counter}</p>
            <a onClick={() => increase()} href="#" className="btn btn-primary">Increase Counter</a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">Counter {counter}</p>
            <a onClick={() => decrease()} href="#" className="btn btn-primary">Decrease Counter</a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">Blob</p>
            {
              blob && blob.map((b, i) => {
                return <h1 key={i}>b</h1>
              })
            }
            <a onClick={() => increaseBlob()} href="#" className="btn btn-primary">Increase Blob</a>
          </div>
        </div>
    )
  }
  
  export default Menu;