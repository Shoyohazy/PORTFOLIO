// Animated delivery network visualization for SpiritX project
// Lightweight SVG-based — no Three.js overhead needed here

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface NodeDot {
  x: number;
  y: number;
  r: number;
  delay: number;
}

const nodes: NodeDot[] = [
  { x: 50, y: 30, r: 5, delay: 0 },
  { x: 150, y: 80, r: 4, delay: 0.2 },
  { x: 80, y: 130, r: 6, delay: 0.35 },
  { x: 200, y: 50, r: 4, delay: 0.15 },
  { x: 240, y: 130, r: 5, delay: 0.5 },
  { x: 160, y: 180, r: 3, delay: 0.4 },
  { x: 40, y: 200, r: 4, delay: 0.6 },
  { x: 120, y: 220, r: 5, delay: 0.7 },
  { x: 280, y: 200, r: 3, delay: 0.55 },
  { x: 310, y: 90, r: 4, delay: 0.25 },
];

const connections: [number, number][] = [
  [0, 1],
  [1, 3],
  [3, 4],
  [4, 9],
  [1, 2],
  [2, 7],
  [7, 5],
  [5, 4],
  [2, 6],
  [7, 8],
  [5, 9],
];

export default function DeliveryNetworkViz() {
  const svgRef = useRef<SVGSVGElement>(null);

  // Animate a "pulse" along routes
  useEffect(() => {
    // Intentionally minimal — CSS animation handles the loop
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow behind visualization */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(175,175,175,0.04) 0%, transparent 70%)",
        }}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 360 260"
        className="w-full max-w-100 h-auto"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={0.8}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}

        {/* Animated pulse dots travelling along routes */}
        {connections.slice(0, 5).map((_pair, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r={2}
            fill="rgba(255,255,255,0.5)"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{
              duration: 2.5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear",
            }}
          >
            <animateMotion
              dur={`${2.5 + i * 0.4}s`}
              repeatCount="indefinite"
              begin={`${i * 0.6}s`}
            >
              <mpath href={`#route-${i}`} />
            </animateMotion>
          </motion.circle>
        ))}

        {/* Hidden route paths for animateMotion */}
        {connections.slice(0, 5).map(([a, b], i) => (
          <path
            key={`route-path-${i}`}
            id={`route-${i}`}
            d={`M ${nodes[a].x} ${nodes[a].y} L ${nodes[b].x} ${nodes[b].y}`}
            fill="none"
            stroke="none"
          />
        ))}

        {/* Node dots */}
        {nodes.map((node, i) => (
          <motion.g key={`node-${i}`}>
            {/* Glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r * 3}
              fill="rgba(255,255,255,0.03)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: node.delay + 0.3 }}
            />
            {/* Core dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="rgba(255,255,255,0.7)"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: node.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              animate={{
                opacity: [0.5, 0.9, 0.5],
              }}
              // @ts-expect-error framer-motion type mismatch for animate + whileInView combo
              whileInViewTransition={{ duration: 0 }}
            >
              <animate
                attributeName="opacity"
                values="0.5;0.9;0.5"
                dur={`${2 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
                begin={`${node.delay}s`}
              />
            </motion.circle>
          </motion.g>
        ))}

        {/* Central hub highlight */}
        <motion.circle
          cx={nodes[7].x}
          cy={nodes[7].y}
          r={12}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={1}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />
      </svg>

      {/* Status labels */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
        {["Tracking active", "Orders synced", "Routes optimised"].map(
          (s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              className="flex items-center gap-2"
            >
              <div className="w-1 h-1 rounded-full bg-[#afafaf]" />
              <span className="text-[10px] text-[#6e6e6e] font-medium">
                {s}
              </span>
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
}
