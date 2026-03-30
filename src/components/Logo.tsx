export default function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background rounded-xl square */}
      <rect width="80" height="80" rx="18" fill="url(#logoBg)" />

      {/* Roof silhouette */}
      <path
        d="M40 14L12 38H20V62H60V38H68L40 14Z"
        fill="url(#roofFill)"
        opacity="0.15"
      />

      {/* Roof peak line — bold accent */}
      <path
        d="M40 16L14 38"
        stroke="url(#lineGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M40 16L66 38"
        stroke="url(#lineGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Coating drip from roof peak — gold accent */}
      <path
        d="M40 16V28C40 30 41 32 43 32C45 32 46 30 46 28"
        stroke="#eab308"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="46" cy="27" r="2.5" fill="#eab308" />

      {/* RC Letters — clean, modern */}
      <text
        x="40"
        y="52"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="white"
        letterSpacing="-0.5"
      >
        RC
      </text>

      {/* Tagline bar */}
      <rect x="24" y="58" width="32" height="1.5" rx="0.75" fill="#eab308" opacity="0.6" />

      {/* Signal dots — top right — leads coming in */}
      <circle cx="62" cy="18" r="2.5" fill="#22c55e" />
      <circle cx="62" cy="18" r="5" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
      <circle cx="62" cy="18" r="8" fill="none" stroke="#22c55e" strokeWidth="0.7" opacity="0.25" />

      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a8a" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="roofFill" x1="12" y1="14" x2="68" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="14" y1="16" x2="66" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
