import { useEffect } from "react";

function App() {
  useEffect(
    () => {
       console.log("Primera Renderizada") 
    }, []
  )

  useEffect (
    () => {
      return () => console.log("On Unmount APP")
    }
  )

  return (
    <header>
      Learn React 1
    </header>
  );
}

export default App;
