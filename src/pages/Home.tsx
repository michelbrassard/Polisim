import { Environment, Instance, Instances, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import WhiteBox from "../components/WhiteBox";
import Platform from "../components/Platform";

export default function Home() {

  const Grid = ({ number = 9, lineWidth = 0.02, height = 0.5 }) => (
      <Instances position={[0, 0, 0]} receiveShadow castShadow>
          <planeGeometry args={[lineWidth, height]} />
          <meshBasicMaterial color="#999" />
          {Array.from({ length: number }, (_, y) =>
              Array.from({ length: number }, (_, x) => (
                  <group key={x + ':' + y} position={[x * 2 - Math.floor(number / 2) * 2, 0.1, y * 2 - Math.floor(number / 2) * 2]}>
                    <Instance rotation={[-Math.PI / 2, 0, 0]} />
                    <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
                  </group>
              ))
          )}
          <gridHelper args={[100, 100, '#ccc', '#ccc']} position={[0, 0.1, 0]} />
      </Instances>
  )

  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <p>Welcome to the Home page.</p>
      <Link to={"/fizika"}>Fizika</Link>
      <Canvas 
        shadows 
        style={{backgroundColor: "gray"}}
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
          <OrbitControls />
          <directionalLight 
            position={[20, 10, 5]}
            castShadow
            intensity={3}
          />
          <Environment preset={'sunset'} />
            
          <group>
            <WhiteBox position={[0, 1, 0]} />
            <WhiteBox position={[2, 0.55, 2]} />
            <WhiteBox position={[4, 0.55, 4]} />
            <WhiteBox position={[6, 0.55, 6]} />
            
            <WhiteBox position={[0, 0.55, -2]} />
            <WhiteBox position={[2, 0.55, 0]} />
            <WhiteBox position={[4, 0.55, 2]} />
            <WhiteBox position={[6, 0.55, 4]} />
          </group>

          <Grid />
          <Platform position={[0,0,0]} />
          <SoftShadows size={40} samples={60} />
      </Canvas>
      <footer>Footer...</footer>
    </div>
  )
}