"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      style={
        {
          "--normal-bg": "palevioletred",
          "--normal-text": "rose",
          "--normal-border": "var(--border)",
          top: "60px", // Add your desired top spacing here
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
