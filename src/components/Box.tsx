import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame, type ThreeElements } from '@react-three/fiber'

/**
 * A rotating box used as a reference and tutorial for testing out 3D objects
 * @param props 
 * @returns Box component
 */
export default function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((_, delta) => (meshRef.current.rotation.x += delta))

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
        </mesh>
    )
}