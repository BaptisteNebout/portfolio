import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from "../app/[locale]/_components/ThemesToggle";

describe('ThemeToggle', () => {
  it('renders a toggle button', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has aria-label for accessibility', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument();
  });

  it('shows Moon icon when theme is light', async () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    );
    // Attendre le montage
    expect(await screen.findByTestId('moon-icon')).toBeInTheDocument();
  });

  it('shows Sun icon when theme is dark', async () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(await screen.findByTestId('sun-icon')).toBeInTheDocument();
  });

  it('toggles theme on click', async () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    );
    // Attendre le montage
    const button = await screen.findByRole('button');
    // Icône Moon au départ
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
    // Clic pour passer en dark
    fireEvent.click(button);
    // Icône Sun après clic
    expect(await screen.findByTestId('sun-icon')).toBeInTheDocument();
  });
});