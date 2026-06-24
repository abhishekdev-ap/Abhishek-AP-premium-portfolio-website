import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

export default function ParticleGalaxy() {
    const ref = useRef();

    // Generate 8000 random points in a sphere for that thick galaxy feel
    const [sphere] = useState(() => random.inSphere(new Float32Array(8000 * 3), { radius: 3 }));

    useFrame((state, delta) => {
        if (!ref.current) return;

        // Base slow rotation
        ref.current.rotation.x -= delta / 25;
        ref.current.rotation.y -= delta / 35;

        // Interactive Cursor Attraction (tilts the galaxy based on pointer)
        const targetX = state.pointer.x * 0.5;
        const targetY = state.pointer.y * 0.5;

        // Smooth interpolation towards mouse target
        ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.02;
        ref.current.rotation.y += (targetX - ref.current.rotation.y) * 0.02;

        // Scroll camera movement (Parallax)
        // using window.scrollY
        const scrollY = window.scrollY;
        ref.current.position.y = scrollY * -0.0015;
        ref.current.position.z = scrollY * 0.001; // slight zoom in as you scroll down
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00F0FF"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2} // Additive blending for extra glow
                />
            </Points>
        </group>
    );
}
