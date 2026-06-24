import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../ThemeProvider';

function Wave({ color, offsetZ, speed, opacity, scale, isLightMode }) {
    const ref = useRef();
    const count = 80;
    const separation = 2.5;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * count * 3);
        let i = 0;
        for (let ix = 0; ix < count; ix++) {
            for (let iy = 0; iy < count; iy++) {
                pos[i] = ix * separation - (count * separation) / 2;
                pos[i + 1] = 0;
                pos[i + 2] = iy * separation - (count * separation) / 2;
                i += 3;
            }
        }
        return pos;
    }, [count, separation]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime() * speed;
        const array = ref.current.geometry.attributes.position.array;
        let i = 0;

        // Create complex fluid-like motion using overlapping sine/cosine waves
        for (let ix = 0; ix < count; ix++) {
            for (let iy = 0; iy < count; iy++) {
                array[i + 1] =
                    Math.sin((ix * 0.1) + time * 0.5) * 3 * scale +
                    Math.cos((iy * 0.15) + time * 0.4) * 2 * scale +
                    Math.sin((ix * 0.05) + (iy * 0.05) + time * 0.6) * 2 * scale;
                i += 3;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;

        // Gentle camera tracking and parallax based on scroll
        const scrollY = window.scrollY;

        const targetX = state.pointer.x * 0.2;
        const targetY = state.pointer.y * 0.2;

        ref.current.rotation.x = 1.2 + (targetY * 0.1);
        ref.current.rotation.y = targetX * 0.1;
        ref.current.rotation.z = time * 0.05; // Slow spin of the entire grid

        ref.current.position.y = -10 + (scrollY * 0.01);
    });

    return (
        <points ref={ref} position={[0, -10, offsetZ]}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color={color}
                transparent
                opacity={isLightMode ? opacity * 2 : opacity}
                sizeAttenuation
                blending={isLightMode ? 1 : 2} // Normal blending for light, Additive for dark
                depthWrite={false}
            />
        </points>
    );
}

export default function DataOcean() {
    const { theme } = useTheme();
    // In light mode, use deeper colors so they show up on white
    const isLightMode = theme === 'light';

    return (
        <group position={[0, -5, -20]}>
            {/* Primary Cyan/Blue Wave */}
            <Wave color={isLightMode ? "#0284c7" : "#00F0FF"} offsetZ={0} speed={0.8} opacity={0.6} scale={1} isLightMode={isLightMode} />
            {/* Deep Purple Sub-Wave */}
            <Wave color={isLightMode ? "#7e22ce" : "#B200FF"} offsetZ={-5} speed={0.5} opacity={0.4} scale={1.5} isLightMode={isLightMode} />
        </group>
    );
}
