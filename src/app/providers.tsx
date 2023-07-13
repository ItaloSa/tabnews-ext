'use client';
import { BaseStyles, ThemeProvider } from '@primer/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <BaseStyles>{children}</BaseStyles>
    </ThemeProvider>
  );
}
