import {useState} from 'react'

function Menu() {
  const[counter, setCounter] = useState(0)

  const increase = _ => setCounter(counter + 1)
  const decrease = _ => setCounter(counter - 1)

    return (
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Counter {counter}</p>
          <a onClick={() => increase()} href="#" className="btn btn-primary">Increase Counter</a>
          <a onClick={() => decrease()} href="#" className="btn btn-primary">Decrease Counter</a>
        </div>
        </div>
    )
  }
  
  export default Menu;