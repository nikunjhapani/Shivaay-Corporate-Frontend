'use client'

import { useEffect } from 'react'
import { initAOS } from '../utils/aos' // adjust path as needed

export default function AOSProvider({ children }) {
  useEffect(() => {
    initAOS()
  }, [])

  return children
}
