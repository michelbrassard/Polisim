import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { type ThreeElements } from '@react-three/fiber'

/**
 * A rotating box used as a reference and tutorial for testing out 3D objects
 * @param props 
 * @returns Box component
 */
export default function WhiteBox(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

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
            castShadow
            receiveShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial  color={hovered ? 'lightblue' : '#ffffff'}/>
        </mesh>
    )
}