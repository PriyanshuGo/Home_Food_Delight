// src/components/ScrollManager.tsx
'use client'

import { useScrollRestoration } from '@/hooks/useScrollRestoration'

export default function ScrollManager() {
  useScrollRestoration()
  return null
}