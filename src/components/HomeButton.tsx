import Link from "next/link";
import React from "react";

const HomeButton = () => {
  return (
    <Link
      className="not-found-link"
      href="/"
    >
      Back to homepage
    </Link>
  );
};

export default HomeButton;
