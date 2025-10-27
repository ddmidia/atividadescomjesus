"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function CurrentDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setDate(`${day}/${month}/${year}`);
  }, []);

  if (!date) {
    return null;
  }

  return (
    <span className={cn("font-bold tabular-nums text-glow text-white/90")}>
      {date}
    </span>
  );
}
