import * as THREE from 'three'
import { useRef, useState } from 'react'
import { type ThreeElements } from '@react-three/fiber'

/**
 * A rotating box used as a reference and tutorial for testing out 3D objects
 * @param props 
 * @returns Box component
 */
export default function Platform(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [active, setActive] = useState(false)

    // useEffect(() => {
    //     document.body.style.cursor = hovered ? 'pointer' : 'auto'
    // }, [hovered])

    return (
        <mesh
            {...props}
            ref={meshRef}
            onClick={() => setActive(!active)}
            // onPointerOver={() => setHover(true)}
            // onPointerOut={() => setHover(false)}
            receiveShadow
        >
            <boxGeometry args={[15, 0.1, 15]} />
            <meshStandardMaterial color={'white'} />
        </mesh>
    )
}