import { ThemeProvider as ThemeContextProvider } from "@/hooks/use-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContextProvider defaultTheme="dark">
      {children}
    </ThemeContextProvider>
  );
}
