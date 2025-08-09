import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{ textAlign: "center", padding: "50px 20px", fontFamily: "Arial" }}
    >
      <svg
        viewBox="0 0 500 300"
        width="100%"
        height="auto"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        {/* Blackboard */}
        <rect
          x="30"
          y="30"
          width="440"
          height="200"
          rx="15"
          fill="#333"
          stroke="#222"
          strokeWidth="4"
        />

        {/* Chalk 404 */}
        <text
          x="250"
          y="110"
          fontSize="64"
          fontFamily="Comic Sans MS, cursive"
          fill="white"
          textAnchor="middle"
        >
          404
        </text>
        <text
          x="250"
          y="160"
          fontSize="20"
          fontFamily="Comic Sans MS, cursive"
          fill="white"
          textAnchor="middle"
        >
          You missed the class!
        </text>

        {/* Desk */}
        <rect x="60" y="230" width="380" height="20" fill="#a0522d" />
        <rect x="60" y="250" width="380" height="10" fill="#8b4513" />

        {/* Apple */}
        <circle cx="100" cy="225" r="10" fill="red" />
        <path d="M100 215 Q98 210 102 210 Q104 210 103 215" fill="green" />

        {/* Wandering Student */}
        <circle cx="400" cy="225" r="15" fill="#fdd835" />
        <rect x="390" y="240" width="20" height="25" fill="#1976d2" />
        <line
          x1="390"
          y1="265"
          x2="385"
          y2="280"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="410"
          y1="265"
          x2="415"
          y2="280"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="390"
          y1="245"
          x2="380"
          y2="255"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="410"
          y1="245"
          x2="420"
          y2="255"
          stroke="#000"
          strokeWidth="2"
        />
      </svg>

      <p style={{ fontSize: "18px", marginTop: "30px" }}>
        Looks like this page skipped school! Let’s get you back on track.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        🏫 Back to Homepage
      </Link>
    </div>
  );
}
