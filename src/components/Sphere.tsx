import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { type ThreeElements } from '@react-three/fiber'
import { DragControls } from '@react-three/drei'

/**
 * A rotating box used as a reference and tutorial for testing out 3D objects
 * @param props 
 * @returns Sphere component
 */
export default function Sphere(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <DragControls>
            <mesh
                {...props}
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <sphereGeometry args={[0.1, 10, 10]} />
                <meshStandardMaterial color={'red'} />
            </mesh>
        </DragControls>
    )
}