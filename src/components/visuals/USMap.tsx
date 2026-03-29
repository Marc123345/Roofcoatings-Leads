"use client";
import { motion } from "framer-motion";

// Simplified US state paths for the key states we serve
const states: { id: string; abbr: string; path: string; cx: number; cy: number }[] = [
  { id: "texas", abbr: "TX", path: "M230,340 L250,310 L280,300 L310,310 L320,340 L310,380 L280,400 L250,390 L230,370Z", cx: 270, cy: 350 },
  { id: "florida", abbr: "FL", path: "M420,370 L440,350 L460,360 L470,390 L460,420 L440,430 L420,410Z", cx: 445, cy: 390 },
  { id: "california", abbr: "CA", path: "M80,200 L90,170 L100,150 L110,180 L120,220 L110,270 L95,290 L80,260Z", cx: 95, cy: 220 },
  { id: "arizona", abbr: "AZ", path: "M140,280 L170,270 L190,280 L195,310 L180,330 L150,330 L135,310Z", cx: 165, cy: 300 },
  { id: "ohio", abbr: "OH", path: "M420,210 L440,200 L455,210 L455,240 L440,250 L420,240Z", cx: 437, cy: 225 },
  { id: "georgia", abbr: "GA", path: "M430,300 L450,290 L465,300 L465,330 L450,340 L430,330Z", cx: 447, cy: 315 },
];

// Background outline of the US (simplified)
const usOutline = "M60,120 Q100,100 200,110 Q300,100 400,120 Q500,110 540,130 L550,140 Q540,160 530,180 L520,200 Q510,220 500,230 L490,250 Q480,260 470,270 L480,290 Q485,310 480,330 L475,350 Q470,370 460,390 L450,410 Q440,430 420,440 L400,430 Q380,420 360,410 L340,400 Q320,390 300,395 L280,400 Q260,395 240,390 L220,380 Q200,375 180,370 L160,360 Q140,350 130,340 L120,320 Q110,300 100,290 L90,280 Q80,260 75,240 L70,220 Q65,200 60,180 L55,160 Q55,140 60,120Z";

export default function USMap({ activeState, onStateClick }: { activeState: string; onStateClick?: (id: string) => void }) {
  return (
    <svg viewBox="40 80 540 380" className="w-full h-full" style={{ filter: "drop-shadow(0 4px 20px rgba(37,99,235,0.15))" }}>
      {/* US outline */}
      <motion.path
        d={usOutline}
        fill="rgba(30,41,59,0.8)"
        stroke="rgba(59,130,246,0.2)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Grid dots */}
      {Array.from({ length: 15 }).map((_, i) =>
        Array.from({ length: 10 }).map((_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={80 + i * 34}
            cy={110 + j * 34}
            r="1"
            fill="rgba(59,130,246,0.1)"
          />
        ))
      )}

      {/* State shapes */}
      {states.map((state) => {
        const isActive = activeState === state.id;
        return (
          <g key={state.id} onClick={() => onStateClick?.(state.id)} className="cursor-pointer">
            <motion.path
              d={state.path}
              fill={isActive ? "rgba(234,179,8,0.3)" : "rgba(59,130,246,0.15)"}
              stroke={isActive ? "#eab308" : "rgba(59,130,246,0.4)"}
              strokeWidth={isActive ? 2.5 : 1.5}
              whileHover={{ fill: "rgba(234,179,8,0.2)", stroke: "#eab308" }}
              animate={{
                fill: isActive ? "rgba(234,179,8,0.3)" : "rgba(59,130,246,0.15)",
                stroke: isActive ? "#eab308" : "rgba(59,130,246,0.4)",
              }}
              transition={{ duration: 0.3 }}
            />
            {/* State label */}
            <text
              x={state.cx}
              y={state.cy}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={isActive ? "14" : "11"}
              fontWeight={isActive ? "800" : "600"}
              fill={isActive ? "#eab308" : "rgba(255,255,255,0.5)"}
              style={{ fontFamily: "system-ui, sans-serif", pointerEvents: "none" }}
            >
              {state.abbr}
            </text>
            {/* Pulse ring on active */}
            {isActive && (
              <>
                <motion.circle
                  cx={state.cx} cy={state.cy} r="20"
                  fill="none" stroke="#eab308" strokeWidth="1"
                  animate={{ r: [20, 35], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                  cx={state.cx} cy={state.cy} r="20"
                  fill="none" stroke="#eab308" strokeWidth="1"
                  animate={{ r: [20, 35], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
                />
              </>
            )}
          </g>
        );
      })}

      {/* Connection lines between states */}
      {states.map((from, i) =>
        states.slice(i + 1).map((to) => (
          <line
            key={`${from.id}-${to.id}`}
            x1={from.cx} y1={from.cy}
            x2={to.cx} y2={to.cy}
            stroke="rgba(59,130,246,0.08)"
            strokeWidth="0.5"
            strokeDasharray="4 6"
          />
        ))
      )}
    </svg>
  );
}
