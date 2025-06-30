"use client"

import { useEffect, useState } from 'react';

export default function ModalPortalContainer() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  if (!mounted) return null;
  
  return <div id="modal-portal" />;
}