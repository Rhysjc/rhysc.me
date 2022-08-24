type Theme = 'light' | 'dark';
interface ThemeTogglerProps {
  children: (args: { theme: Theme | null, toggleTheme: (theme: Theme) => void }) => JSX.Element | null
}

declare module 'gatsby-plugin-dark-mode' {
  export function ThemeToggler (props: ThemeTogglerProps): JSX.Element;
}
