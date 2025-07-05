import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import Box from "../../components/Box";
import { OrbitControls } from "@react-three/drei";
import "../../App.css"

export default function Fizika() {
  return (
    <div className="container">
        <h1>Fizika</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"mjerne-jedinice"}>Mjerne Jedinice</Link>
        <Canvas style={{backgroundColor: "lightgray", flex: "1"}}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <gridHelper args={[10, 10]} />
            <axesHelper args={[5]} />
            <OrbitControls />

            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    </div>
  )
}