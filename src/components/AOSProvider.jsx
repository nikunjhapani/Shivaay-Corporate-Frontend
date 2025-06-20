// 'use client'

// import { useEffect } from 'react'
// import { initAOS } from '../utils/aos' // adjust path as needed

// export default function AOSProvider({ children }) {
//   useEffect(() => {
//     initAOS()
//   }, [])

//   return children
// }


'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { initAOS } from '../utils/aos';

const AOSContext = createContext(false);

export function useIsClient() {
  return useContext(AOSContext);
}

export default function AOSProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    initAOS();
  }, []);

  return <AOSContext.Provider value={isClient}>{children}</AOSContext.Provider>;
}
