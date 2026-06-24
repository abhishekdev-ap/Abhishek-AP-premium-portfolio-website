import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function HolographicGlobe() {
    const sphereRef = useRef();

    useFrame((state, delta) => {
        if (!sphereRef.current) return;

        // Constant slow rotation
        sphereRef.current.rotation.y += delta * 0.2;
        sphereRef.current.rotation.x += delta * 0.1;

        // Interactive pointer attraction
        const targetX = state.pointer.x * 0.5;
        const targetY = state.pointer.y * 0.5;

        sphereRef.current.rotation.x += (targetY - sphereRef.current.rotation.x) * 0.05;
        sphereRef.current.rotation.y += (targetX - sphereRef.current.rotation.y) * 0.05;

        // Scroll parallax
        const scrollY = window.scrollY;
        sphereRef.current.position.y = scrollY * -0.002;
    });

    return (
        <group position={[0, 0, 0]}>
            {/* Core Glowing Sphere */}
            <Sphere ref={sphereRef} args={[2, 64, 64]}>
                <MeshDistortMaterial
                    color="#0B0F19"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={true}
                    emissive="#00F0FF"
                    emissiveIntensity={0.5}
                    transparent={true}
                    opacity={0.8}
                />
            </Sphere>

            {/* Outer Atmosphere / Halo */}
            <Sphere args={[2.2, 32, 32]}>
                <meshBasicMaterial
                    color="#B200FF"
                    wireframe={true}
                    transparent={true}
                    opacity={0.1}
                />
            </Sphere>
        </group>
    );
}
