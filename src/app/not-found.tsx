import { FC } from "react";
import HomeButton from "./components/shared/HomeButton";

const NotFound: FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 20px",
        fontFamily: "Arial",
        backgroundColor: "#f9f9f9", // Light background
      }}
    >
      <svg
        viewBox="0 0 500 300"
        width="100%"
        height="auto"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        {/* Modern Blackboard */}
        <rect
          x="30"
          y="30"
          width="440"
          height="200"
          rx="15"
          fill="#013265" // Brand Blue
          stroke="#01244e" // Darker shade of Brand Blue
          strokeWidth="4"
        />
        {/* Chalk 404 - Brand Green */}
        <text
          x="250"
          y="110"
          fontSize="64"
          fontFamily="'Comic Sans MS', cursive"
          fill="#2a9d8f" // Brand Green
          textAnchor="middle"
        >
          404
        </text>
        <text
          x="250"
          y="150"
          fontSize="20"
          fontFamily="'Comic Sans MS', cursive"
          fill="#fff" // White
          textAnchor="middle"
        >
          You seem to be lost!
        </text>
        <text
          x="250"
          y="175"
          fontSize="20"
          fontFamily="'Comic Sans MS', cursive"
          fill="#fff" // White
          textAnchor="middle"
        >
          Let's get you back to your classroom.
        </text>
        {/* Modern Desk - Light Wood */}
        <rect x="60" y="230" width="380" height="20" fill="#d2b48c" />
        <rect x="60" y="250" width="380" height="10" fill="#c0a375" />
        {/* Stylized Apple - Red with Green Leaf */}
        <circle cx="100" cy="225" r="10" fill="#be1e2d" /> {/* Brand Red */}
        <path
          d="M100 215 Q98 210 102 210 Q104 210 103 215"
          fill="#2a9d8f"
        />{" "}
        {/* Brand Green */}
        {/* Wandering Student - Muted Colors */}
        <circle cx="400" cy="225" r="15" fill="#f0e68c" /> {/* Light Yellow */}
        <rect x="390" y="240" width="20" height="25" fill="#4682b4" />{" "}
        {/* Steel Blue */}
        <line
          x1="390"
          y1="265"
          x2="385"
          y2="280"
          stroke="#555"
          strokeWidth="2"
        />
        <line
          x1="410"
          y1="265"
          x2="415"
          y2="280"
          stroke="#555"
          strokeWidth="2"
        />
        <line
          x1="390"
          y1="245"
          x2="380"
          y2="255"
          stroke="#555"
          strokeWidth="2"
        />
        <line
          x1="410"
          y1="245"
          x2="420"
          y2="255"
          stroke="#555"
          strokeWidth="2"
        />
      </svg>

      <p style={{ fontSize: "18px", marginTop: "30px", color: "#555" }}>
        Oops! The page you're looking for seems to have wandered off.
      </p>
      <HomeButton />
    </div>
  );
};

export default NotFound;
