'use client';

// ThreeCanvas.tsx — dynamic wrapper
// The actual Canvas is in a separate file loaded only in the browser.
// This pattern is required because @react-three/fiber accesses `window` and WebGL
// on import, which crashes Next.js SSR. ssr:false ensures it never runs server-side.

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);

  const sphere = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const r = 15;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.01;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00ff88" size={0.03} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  return (
    <group>
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[10, 5, -5]}>
          <MeshDistortMaterial color="#0066ff" speed={5} distort={0.5} radius={1} />
        </Sphere>
      </Float>
      <Float speed={4} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-12, -8, -10]}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#00ff88" wireframe />
        </mesh>
      </Float>
      <Float speed={6} rotationIntensity={3} floatIntensity={2}>
        <mesh position={[15, -10, -15]}>
          <torusGeometry args={[3, 0.5, 16, 100]} />
          <meshStandardMaterial color="#0066ff" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
    </group>
  );
}

function Grid() {
  return (
    <group position={[0, -10, 0]}>
      <gridHelper args={[100, 40, '#00ff88', '#111']} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#050505" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020202]">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 45 }}>
        <color attach="background" args={['#020202']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ff88" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0066ff" />
        <spotLight position={[0, 20, 0]} intensity={2} color="#ffffff" angle={0.3} penumbra={1} />
        <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
        <ParticleField />
        <FloatingShapes />
        <Grid />
        <fog attach="fog" args={['#020202', 15, 60]} />
      </Canvas>
    </div>
  );
}
