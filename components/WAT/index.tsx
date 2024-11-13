"use client";
import React from "react";
import { useState } from "react";

const Wat = () => {
  const [WAT, setWAT] = useState("");

  const checkTime = () => {
    const now = new Date();

    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    setWAT(Intl.DateTimeFormat("en-NG", options).format(now));
  };

  setInterval(() => {
    checkTime();
  }, 500);
  return <span className=" text-white">{WAT}</span>;
};

export default Wat;
