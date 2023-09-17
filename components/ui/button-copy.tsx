'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface ButtonCopyProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  url: string
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

const ButtonCopy = React.forwardRef<HTMLButtonElement, ButtonCopyProps>(({ children, className, url, variant }, ref) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 3000);
  };

  return (
    <Button
      className={cn("animation duration-700 ease-out", className)}
      onClick={handleClick}
      variant={variant}
      ref={ref}
    >
      {children}
      {copied ? "Copiado!" : "Copiar"}
    </Button>
  );
});

ButtonCopy.displayName = "ButtonCopy"

export { ButtonCopy }