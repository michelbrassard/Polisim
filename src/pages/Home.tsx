import { Environment, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import WhiteBox from "../components/WhiteBox";
import Platform from "../components/Platform";
import * as THREE from 'three';

export default function Home() {
  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <p>Welcome to the Home page.</p>
      <Link to={"/fizika"}>Fizika</Link>
      <Canvas 
        shadows 
        style={{backgroundColor: "skyblue"}}
        gl={{ localClippingEnabled: true }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
          <SoftShadows size={40} samples={60} />
          <ambientLight intensity={0.3} />

          <directionalLight 
            position={[10, 10, 5]}
            castShadow
            intensity={5}
            shadow-bias={-0.0005}
            shadow-normalBias={0.05}
          >
            <orthographicCamera attach="shadow-camera" args={[-12, 12, -12, 12, 1, 40]} />
          </directionalLight>
          
          <gridHelper args={[10, 10]} />
          <axesHelper args={[10]} />
          <OrbitControls />
          <Environment preset="city" background={false} environmentIntensity={0.1}/>
          
          <group>
            <WhiteBox position={[0, 0.55, 0]} />
            <WhiteBox position={[2, 0.55, 2]} />
            <WhiteBox position={[4, 0.55, 4]} />
            <WhiteBox position={[6, 0.55, 6]} />
            
            <WhiteBox position={[0, 0.55, -2]} />
            <WhiteBox position={[2, 0.55, 0]} />
            <WhiteBox position={[4, 0.55, 2]} />
            <WhiteBox position={[6, 0.55, 4]} />
          </group>
          
          <Platform position={[0,0,0]} />
      </Canvas>
      <footer>Footer...</footer>
    </div>
  )
}