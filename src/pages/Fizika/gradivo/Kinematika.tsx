import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import Sphere from "../../../components/Sphere";

export default function MjerneJedinice() {
  return (
    <div style={{display: "flex", flexDirection: "column", flex: "1"}}>
        <h1>Kinematika</h1>
        <h2>Brzina</h2>
        <h2>Ubrzanje</h2>
        <Link to={"/fizika"}>Fizika</Link>
        <Canvas style={{backgroundColor: "lightgray", flex: "1"}}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <gridHelper args={[10, 10]} />
            <axesHelper args={[10]} />

            <Sphere position={[0, 0, 0]} />
        </Canvas>
        
    </div>
  )
}