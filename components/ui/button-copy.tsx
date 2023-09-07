import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

export interface ButtonCopyProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  url: string
}

const ButtonCopy = React.forwardRef<HTMLButtonElement, ButtonCopyProps>(({ url }, ref) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Button
      className="animation duration-700 ease-out"
      onClick={handleClick}
      variant={copied ? "default" : "outline"}
      ref={ref}
    >
      {copied ? "Copiado!" : "Copiar"}
    </Button>
  );
});

ButtonCopy.displayName = "ButtonCopy"

export { ButtonCopy }