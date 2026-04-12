"use client";
import { motion } from "framer-motion";

const STATES: Record<string, { path: string; label: [number, number] }> = {
  texas: {
    path: "M257,395 L258,384 L268,378 L270,370 L283,362 L283,354 L289,347 L290,340 L297,334 L300,323 L309,315 L315,319 L322,316 L328,306 L337,306 L342,300 L346,300 L350,308 L360,312 L367,310 L372,315 L380,315 L382,310 L393,308 L395,301 L402,299 L404,286 L400,278 L392,275 L387,268 L380,265 L371,258 L371,254 L335,254 L335,258 L300,258 L300,266 L265,266 L257,274 L248,280 L243,290 L237,294 L233,304 L226,314 L225,322 L233,330 L237,340 L240,355 L245,365 L248,380 L250,390Z",
    label: [330, 310],
  },
  florida: {
    path: "M520,370 L525,362 L535,358 L548,355 L555,360 L560,368 L562,380 L560,392 L555,404 L548,412 L540,418 L534,416 L528,420 L522,416 L516,420 L510,416 L506,408 L508,396 L510,384 L515,376Z",
    label: [536, 388],
  },
  california: {
    path: "M105,230 L108,218 L112,206 L118,194 L122,182 L128,172 L130,160 L134,150 L140,142 L142,134 L138,126 L132,124 L125,130 L118,140 L112,152 L106,166 L100,180 L96,194 L92,210 L90,226 L88,240 L90,252 L94,262 L100,268 L108,264 L112,254 L110,242Z",
    label: [110, 200],
  },
  arizona: {
    path: "M150,280 L156,268 L168,260 L180,258 L192,258 L196,264 L196,276 L192,290 L186,302 L178,308 L168,310 L158,306 L150,298 L148,290Z",
    label: [172, 284],
  },
  ohio: {
    path: "M498,215 L506,208 L516,206 L524,208 L530,214 L532,224 L528,234 L520,240 L510,242 L502,238 L496,230 L496,222Z",
    label: [514, 224],
  },
  georgia: {
    path: "M505,315 L512,308 L522,306 L530,310 L536,318 L538,328 L534,340 L526,348 L516,350 L508,346 L502,338 L500,328 L502,320Z",
    label: [518, 328],
  },
};

// Simplified US outline
const US_OUTLINE = "M80,120 C120,105 200,100 280,108 C360,100 440,105 520,115 C560,110 590,118 600,128 L605,138 C598,155 585,175 575,195 L565,215 C555,235 545,250 535,260 L540,280 C545,305 540,330 535,350 L530,370 C522,390 510,408 500,420 L480,430 C460,435 440,428 420,420 L400,412 C380,405 360,400 340,404 L320,408 C300,405 280,400 260,395 L240,388 C220,382 200,378 180,372 L160,365 C140,358 125,348 118,338 L108,320 C98,300 90,285 85,268 L80,248 C76,228 74,208 72,188 L68,168 C66,148 68,130 80,120Z";

// Background state shapes (non-active states for context)
const BG_STATES = "M420,160 L440,155 L455,160 L460,175 L450,185 L435,188 L422,182Z M460,170 L475,165 L490,170 L492,185 L480,192 L465,188Z M475,195 L490,190 L505,195 L508,210 L495,218 L480,212Z M440,195 L455,192 L470,198 L472,215 L458,222 L442,215Z M400,188 L418,184 L432,190 L434,208 L420,215 L402,208Z M380,170 L398,165 L412,172 L414,188 L400,195 L382,188Z M350,162 L368,158 L382,165 L384,180 L370,188 L352,180Z M320,168 L338,164 L352,170 L354,186 L340,192 L322,186Z M290,175 L308,170 L322,178 L324,194 L310,200 L292,194Z M260,180 L278,176 L292,182 L294,198 L280,204 L262,198Z M230,188 L248,184 L262,190 L264,206 L250,212 L232,206Z M200,195 L218,190 L232,198 L234,214 L220,220 L202,214Z M170,205 L188,200 L202,208 L204,224 L190,230 L172,224Z M148,218 L166,214 L180,220 L182,236 L168,242 L150,236Z M440,240 L458,236 L472,242 L474,258 L460,264 L442,258Z M480,248 L498,244 L512,250 L514,266 L500,272 L482,266Z M500,268 L518,264 L532,270 L534,286 L520,292 L502,286Z M460,258 L478,254 L492,260 L494,276 L480,282 L462,276Z M420,248 L438,244 L452,250 L454,266 L440,272 L422,266Z M400,260 L418,256 L432,262 L434,278 L420,284 L402,278Z";

export default function USMap({
  activeState,
  onStateClick,
}: {
  activeState: string;
  onStateClick?: (id: string) => void;
}) {
  return (
    <svg
      viewBox="60 100 580 350"
      className="w-full h-full"
      style={{ maxHeight: 400 }}
    >
      {/* US Outline */}
      <path
        d={US_OUTLINE}
        fill="rgba(24,24,27,0.8)"
        stroke="rgba(63,63,70,0.4)"
        strokeWidth="1"
      />

      {/* Background state shapes for texture */}
      <path
        d={BG_STATES}
        fill="none"
        stroke="rgba(63,63,70,0.15)"
        strokeWidth="0.5"
      />

      {/* Active states */}
      {Object.entries(STATES).map(([id, state]) => {
        const isActive = activeState === id;
        return (
          <g key={id}>
            <motion.path
              d={state.path}
              fill={isActive ? "rgba(234,179,8,0.6)" : "rgba(234,179,8,0.15)"}
              stroke={isActive ? "#eab308" : "rgba(234,179,8,0.3)"}
              strokeWidth={isActive ? 2 : 1}
              className="cursor-pointer transition-colors duration-300"
              onClick={() => onStateClick?.(id)}
              whileHover={{ fill: "rgba(234,179,8,0.4)" }}
              animate={{
                fill: isActive ? "rgba(234,179,8,0.6)" : "rgba(234,179,8,0.15)",
              }}
            />
            {/* State label */}
            <text
              x={state.label[0]}
              y={state.label[1]}
              textAnchor="middle"
              dominantBaseline="central"
              className="cursor-pointer select-none"
              style={{
                fontSize: isActive ? 12 : 10,
                fontFamily: "monospace",
                fontWeight: isActive ? 700 : 500,
                fill: isActive ? "#eab308" : "rgba(234,179,8,0.6)",
                letterSpacing: "0.1em",
              }}
              onClick={() => onStateClick?.(id)}
            >
              {id === "texas" ? "TX" : id === "florida" ? "FL" : id === "california" ? "CA" : id === "arizona" ? "AZ" : id === "ohio" ? "OH" : "GA"}
            </text>
            {/* Active pulse */}
            {isActive && (
              <motion.circle
                cx={state.label[0]}
                cy={state.label[1]}
                r={18}
                fill="none"
                stroke="#eab308"
                strokeWidth={1}
                initial={{ r: 12, opacity: 1 }}
                animate={{ r: 24, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
