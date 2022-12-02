import { useState } from "react";

function Form() {
    const [email, setEmail] = useState("")
    const validate = _ => email == "" ? console.log("Empty") : console.log("Completed")

    return (
      <>
      <form style={{marginTop: "100px"}}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <div className="container col-md-2" >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email : {email}</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleFormControlInput2"/>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => validate()}>Sign in</button>
      </form>
      </>
    )
  }
  
  export default Form;