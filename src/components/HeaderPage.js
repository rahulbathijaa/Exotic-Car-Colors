import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderPage() {
  return (
    <header>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
          height: 350,
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundCcolor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
              <h3 className="text-3xl font-bold mb-8">Subeading</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
