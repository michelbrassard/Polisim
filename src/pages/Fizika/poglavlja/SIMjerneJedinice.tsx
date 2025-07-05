
import { Link } from "react-router-dom";

export default function MjerneJedinice() {
  return (
    <div style={{display: "flex", flexDirection: "column", flex: "1"}}>
        <h1>Mjerne Jedinice</h1>
        <Link to={"/fizika"}>Fizika</Link>
        
    </div>
  )
}