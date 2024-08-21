
import { useState } from "react";
import getCep from "./services/Cep";

function App() {
  const [nro,setNro] = useState("12328070")

  async function obter(){
    const r = await getCep(nro);
    console.log("Res", r);
  }

  return (
    <>
      <input value={nro} onChange={(e) => setNro(e.target.value)} />
      <button onClick={obter}>Obter</button>
    </>
  );
}

export default App;
