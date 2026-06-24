import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';

function GlassShape({ type, position, scale, color, speed }) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x += delta * speed.x;
        meshRef.current.rotation.y += delta * speed.y;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
            <mesh ref={meshRef} scale={scale}>
                {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
                {type === 'torus' && <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />}
                {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}

                {/* Premium Glass Refraction Material */}
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={1.5}
                    chromaticAberration={0.8}
                    anisotropy={0.2}
                    distortion={0.3}
                    distortionScale={0.5}
                    temporalDistortion={0.1}
                    color={color}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    roughness={0.05}
                    metalness={0.2}
                    envMapIntensity={2}
                />
            </mesh>
        </Float>
    );
}

export default function FloatingGeometries() {
    return (
        <group position={[0, 0, -2]}>
            {/* Left side */}
            <GlassShape type="icosahedron" position={[-4, 2, -1]} scale={1.2} color="#00F0FF" speed={{ x: 0.2, y: 0.3 }} />
            <GlassShape type="octahedron" position={[-3, -3, -2]} scale={1.5} color="#B200FF" speed={{ x: -0.1, y: 0.2 }} />

            {/* Right side */}
            <GlassShape type="torus" position={[4, -1, 0]} scale={0.8} color="#00F0FF" speed={{ x: 0.3, y: 0.1 }} />
            <GlassShape type="icosahedron" position={[3, 3, -3]} scale={1.8} color="#B200FF" speed={{ x: -0.2, y: -0.2 }} />

            {/* Center top/bottom */}
            <GlassShape type="torus" position={[0, 4, -4]} scale={1} color="#ffffff" speed={{ x: 0.1, y: 0.3 }} />
            <GlassShape type="octahedron" position={[0, -4, -1]} scale={0.8} color="#00F0FF" speed={{ x: 0.2, y: -0.1 }} />
        </group>
    );
}
