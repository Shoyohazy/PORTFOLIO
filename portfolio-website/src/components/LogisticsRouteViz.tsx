// Logistics route visualization for Ortiz Bros project
// Animated SVG route lines — themed around shipping/movement

import { motion } from "framer-motion";

const routePoints = [
  { x: 20, y: 180, label: "Origin" },
  { x: 100, y: 100, label: "Hub A" },
  { x: 200, y: 140, label: "Transit" },
  { x: 300, y: 80, label: "Hub B" },
  { x: 380, y: 190, label: "Dest." },
];

const sideBranches: [number, { x: number; y: number }][] = [
  [1, { x: 90, y: 50 }],
  [2, { x: 220, y: 200 }],
  [3, { x: 310, y: 150 }],
];

// Build SVG polyline path string
const mainPath = routePoints
  .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
  .join(" ");

export default function LogisticsRouteViz() {
  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-70">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(175,175,175,0.03) 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 400 240"
        className="w-full max-w-105 h-auto"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>

        {/* Ground track (faint) */}
        <path
          d={mainPath}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={16}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Main route */}
        <motion.path
          d={mainPath}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={600}
          initial={{ strokeDashoffset: 600 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />

        {/* Side branches */}
        {sideBranches.map(([fromIdx, to], i) => {
          const from = routePoints[fromIdx];
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth={1}
              strokeDasharray={80}
              initial={{ strokeDashoffset: 80 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 1 + i * 0.12,
              }}
            />
          );
        })}

        {/* Travelling shipment dot */}
        <motion.circle r={3.5} fill="rgba(255,255,255,0.7)">
          <animateMotion dur="4s" repeatCount="indefinite" begin="1.5s">
            <mpath href="#mainRoutePath" />
          </animateMotion>
        </motion.circle>

        {/* Hidden path for animateMotion */}
        <path id="mainRoutePath" d={mainPath} fill="none" stroke="none" />

        {/* Waypoint markers */}
        {routePoints.map((pt, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={pt.x}
              cy={pt.y}
              r={5}
              fill="rgba(0,0,0,0.6)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={1}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
            <motion.circle
              cx={pt.x}
              cy={pt.y}
              r={2}
              fill="rgba(255,255,255,0.8)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
            />
            {/* Label */}
            <motion.text
              x={pt.x}
              y={pt.y + 16}
              textAnchor="middle"
              fontSize={8}
              fill="rgba(255,255,255,0.25)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              {pt.label}
            </motion.text>
          </motion.g>
        ))}
      </svg>

      {/* Stats */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 text-right">
        {[
          { val: "99.2%", sub: "On-time rate" },
          { val: "1.2k", sub: "Daily routes" },
        ].map(({ val, sub }) => (
          <motion.div
            key={val}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col"
          >
            <span className="text-sm font-semibold text-white/70">{val}</span>
            <span className="text-[10px] text-[#6e6e6e]">{sub}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
