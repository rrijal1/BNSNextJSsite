import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <svg
        width="400"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", margin: "0 auto" }}
      >
        {/* Background */}
        <rect width="100%" height="100%" fill="#007BFF" />

        {/* Monitor */}
        <g transform="translate(150, 50)">
          <rect
            x="0"
            y="0"
            width="100"
            height="80"
            rx="10"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <rect x="10" y="10" width="80" height="40" fill="#007BFF" />
          <circle cx="50" cy="30" r="20" fill="#FFFFFF" />
          <path
            d="M40 20 L60 40 M50 20 L50 40 M60 20 L40 40"
            stroke="#007BFF"
            strokeWidth="4"
          />
        </g>

        {/* Left Tablet */}
        <g transform="translate(100, 100)">
          <rect
            x="0"
            y="0"
            width="50"
            height="80"
            rx="10"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <rect x="10" y="10" width="30" height="40" fill="#007BFF" />
          <path
            d="M25 50 L25 70 M20 60 L30 60"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <path d="M25 30 L25 50" stroke="#FF0000" strokeWidth="4" />
        </g>

        {/* Right Tablet */}
        <g transform="translate(250, 120)">
          <rect
            x="0"
            y="0"
            width="40"
            height="60"
            rx="8"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <rect x="5" y="5" width="30" height="30" fill="#007BFF" />
          <path d="M20 35 L20 55" stroke="#FF0000" strokeWidth="4" />
        </g>

        {/* 404 Text */}
        <text
          x="170"
          y="200"
          fontSize="40"
          fontFamily="Arial"
          fill="#FFFF00"
          textAnchor="middle"
        >
          404
        </text>
        <text
          x="170"
          y="240"
          fontSize="12"
          fontFamily="Arial"
          fill="#FFFFFF"
          textAnchor="middle"
        >
          Page not found
        </text>

        {/* Base Line */}
        <line
          x1="50"
          y1="150"
          x2="350"
          y2="150"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
      </svg>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
