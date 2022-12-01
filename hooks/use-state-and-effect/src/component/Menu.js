import {useEffect, useState} from 'react'

function Menu() {
  const[total, setTotal] = useState(0)
  const[list, setList] = useState([])
  const[color, setColor] = useState("red")

  const increase = _ => setTotal(prev => prev + 1)
  const decrease = _ => setTotal(prev => prev - 1)
  
  const increaseList = _ => setList(previous => [...previous, "nuevo"])
  const decreaseList = _ => setList(previous => previous.slice(0, previous.length - 1))

  const change = (color) => setColor(previous => color)
  
  useEffect( 
    () => {
      console.log("first time")
    }, []
  ) // OnMount

  useEffect(
    () => {
      console.log("edit total")
    }, [total]
  ) // OnUpdate (total)
  
  useEffect(
    () => {
      console.log("edit list")
    }, [list]
  ) // OnUpdate (list)


  useEffect(
    () => {
      console.log("updating everything")
    }
  ) // onUpdate everything 

    return (
      <>
        <div  className="card">
          <div className="card-body">
            <h5 className="card-title">Total increment</h5>
            <p className="card-text">Total {total}</p>
            <a onClick={() => increase()} href="#" className="btn btn-primary">Increase Counter</a>
          </div>
        </div>
        <div  className="card">
          <div className="card-body">
            <h5 className="card-title">Total decrement</h5>
            <p className="card-text">Total {total} </p>
            <a onClick={() => decrease()} href="#" className="btn btn-primary">Decrease Counter</a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Array Increment</h5>
            <p className="card-text">List</p>
            {
              list && list.map((l, i) => {
                return <h1  key={i}>{l}</h1>
              })
            }
            <a onClick={() => increaseList()} href="#" className="btn btn-primary">Increase List</a>
            <a onClick={() => decreaseList()} href="#" className="btn btn-primary">Decrease List</a>
            
          </div>
        </div>
        <div className='card'>
          <div className="card-body">
            <h5 className="card-title">Conditional Rendered</h5>
            {
              color == "red" ? 
                <div className="alert alert-danger" role="alert">Red</div>
                :
                color == "green" ?
                  <div className="alert alert-success" role="alert">Green </div>
                  :
                  <div className="alert alert-warning" role="alert">Yellow</div>
            }
            <a onClick={() => change("green")} href="#" className="btn btn-success">Green</a>
            <a onClick={() => change("red")} href="#" className="btn btn-danger">Red</a>
            <a onClick={() => change("yellow")} href="#" className="btn btn-warning">Yellow</a>
          </div>
        </div>
      </>
    )
  }
  
  export default Menu;