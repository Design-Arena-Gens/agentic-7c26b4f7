"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <time
      className="text-sm font-medium uppercase tracking-widest text-slate-400"
      dateTime={now.toISOString()}
    >
      {now.toLocaleTimeString()}
    </time>
  );
}
