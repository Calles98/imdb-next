"use client";

import React, { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again</h1>
      <buttton className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </buttton>
    </div>
  );
}

export default Error;
