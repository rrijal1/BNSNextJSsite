"use client";

import Link from "next/link";
import { FC } from "react";

const HomeButton: FC = () => {
  return (
    <Link
      href="/"
      style={{
        display: "inline-block",
        marginTop: "20px",
        padding: "12px 24px",
        backgroundColor: "#2a9d8f", // Brand Green
        color: "#fff",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#22364d"; // Darker on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#2a9d8f"; // Revert on mouse out
      }}
    >
      Back to Homepage 🏫
    </Link>
  );
};

export default HomeButton;
