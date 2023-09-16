'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ToggleMode() {
  const [darkMode, setDarkMode] = useState(false)

  function handleCheckedChange() {
    if (darkMode) {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      setDarkMode(false)
    }

    if (!darkMode) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      setDarkMode(true)
    }
  }

  return (
    <div className='flex items-center justify-center gap-4 border-l border-zinc-300 pl-4'>
      <SunIcon />
      <Switch
        checked={darkMode}
        onCheckedChange={handleCheckedChange}
      />
      <MoonIcon />
    </div>
  )
}