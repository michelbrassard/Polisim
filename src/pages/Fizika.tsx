import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import Box from "../components/Box";

export default function Fizika() {
  return (
    <div style={{display: "flex", flexDirection: "column", flex: "1"}}>
        <h1>Fizika</h1>
        <Link to={"/"}>Home</Link>
        <Canvas style={{backgroundColor: "lightgray", flex: "1"}}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    </div>
  )
}