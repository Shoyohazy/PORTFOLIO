// Optimized Three.js hero scene — floating interconnected nodes
// Intentionally lightweight: low-poly geometry, minimal lights, no postprocessing

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { useCursorPosition } from "@/hooks/useScrollReveal";

// ─── Single floating node ────────────────────────────────────────────
interface NodeProps {
  position: [number, number, number];
  scale: number;
  speed: number;
  phaseOffset: number;
}

function FloatingNode({ position, scale, speed, phaseOffset }: NodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed + phaseOffset;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.25;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[scale, 0]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.6}
        roughness={0.4}
        transparent
        opacity={0.55}
        wireframe={false}
      />
    </mesh>
  );
}

// ─── Connection lines between nodes ─────────────────────────────────
interface ConnectionsProps {
  positions: [number, number, number][];
}

function Connections({ positions }: ConnectionsProps) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const { geometry } = useMemo(() => {
    const pts: number[] = [];
    // Connect every node to its 2 nearest neighbours only
    for (let i = 0; i < positions.length; i++) {
      const a = positions[i];
      const nearest = positions
        .map((b, j) => ({
          j,
          d: Math.sqrt(
            (b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2 + (b[2] - a[2]) ** 2,
          ),
        }))
        .filter(({ j }) => j !== i)
        .sort((x, y) => x.d - y.d)
        .slice(0, 2);

      for (const { j } of nearest) {
        const b = positions[j];
        pts.push(...a, ...b);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return { geometry: geo };
  }, [positions]);

  useFrame(({ clock }) => {
    if (!lineRef.current) return;
    const mat = lineRef.current.material as THREE.LineBasicMaterial;
    mat.opacity = 0.1 + Math.sin(clock.getElapsedTime() * 0.4) * 0.05;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#ffffff" transparent opacity={0.12} />
    </lineSegments>
  );
}

// ─── Camera rig — subtle cursor follow ──────────────────────────────
function CameraRig() {
  const cursor = useCursorPosition();
  const { camera, size } = useThree();

  useFrame(() => {
    const nx = (cursor.current.x / size.width - 0.5) * 0.8;
    const ny = -(cursor.current.y / size.height - 0.5) * 0.6;
    camera.position.x += (nx - camera.position.x) * 0.04;
    camera.position.y += (ny - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ─── Scene content ───────────────────────────────────────────────────
function SceneContent() {
  // Pre-defined positions — avoids React state thrash
  const positions = useMemo<[number, number, number][]>(
    () => [
      [0, 0, 0],
      [2.4, 0.8, -1.2],
      [-2.2, 1.0, -0.8],
      [1.6, -1.4, -0.6],
      [-1.8, -1.0, -1.0],
      [3.2, -0.4, -2.0],
      [-3.0, 0.2, -1.8],
      [0.4, 2.2, -1.4],
      [0.8, -2.4, -1.0],
      [-0.6, 1.6, -2.2],
      [2.0, 1.8, -2.6],
      [-2.4, -1.6, -2.4],
    ],
    [],
  );

  const nodes = useMemo(
    () =>
      positions.map((pos, i) => ({
        position: pos,
        scale: 0.06 + (i % 3) * 0.025,
        speed: 0.4 + (i % 4) * 0.12,
        phaseOffset: i * 0.8,
      })),
    [positions],
  );

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 2]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -2, -1]} intensity={0.5} color="#afafaf" />

      <Connections positions={positions} />

      {nodes.map((n, i) => (
        <FloatingNode key={i} {...n} />
      ))}

      <CameraRig />
    </>
  );
}

// ─── Exported canvas wrapper ─────────────────────────────────────────
export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
