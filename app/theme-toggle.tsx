'use client';

import { useEffect, useRef, useState } from 'react';

type ThemePreference = 'system' | 'dark' | 'light';
const options: ThemePreference[] = ['system', 'dark', 'light'];

function isPreference(value: string | null): value is ThemePreference {
  return value === 'system' || value === 'dark' || value === 'light';
}

function resolveTheme(preference: ThemePreference) {
  if (preference !== 'system') return preference;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(preference: ThemePreference) {
  const theme = resolveTheme(preference);
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function ThemeIcon({ preference }: { preference: ThemePreference }) {
  if (preference === 'dark') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" /></svg>;
  if (preference === 'light') return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="1" /><path d="M8 21h8M12 17v4" /></svg>;
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const preferenceRef = useRef<ThemePreference>('system');

  useEffect(() => {
    const saved = localStorage.getItem('tmw-theme');
    const initial = isPreference(saved) ? saved : 'system';
    preferenceRef.current = initial;
    setPreference(initial);
    applyTheme(initial);
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => preferenceRef.current === 'system' && applyTheme('system');
    systemTheme.addEventListener('change', handleSystemChange);
    return () => systemTheme.removeEventListener('change', handleSystemChange);
  }, []);

  function cycleTheme() {
    const next = options[(options.indexOf(preferenceRef.current) + 1) % options.length];
    preferenceRef.current = next;
    setPreference(next);
    localStorage.setItem('tmw-theme', next);
    applyTheme(next);
  }

  return <button className={`theme-toggle${compact ? ' theme-toggle-compact' : ''}`} type="button" onClick={cycleTheme} aria-label={`Theme: ${preference}. Change theme.`} title={`Theme: ${preference}`}><ThemeIcon preference={preference} />{compact && <span>{preference}</span>}</button>;
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-controls">
    <ThemeToggle />
    <button className="menu-trigger" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}><span /><span /></button>
    {open && <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
      <a href="#projects" onClick={() => setOpen(false)}>Projects <span>↓</span></a>
      <a href="#compare" onClick={() => setOpen(false)}>Compare <span>↓</span></a>
      <a href="https://github.com/bmehder" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      <div className="mobile-theme"><span>Colour theme</span><ThemeToggle compact /></div>
    </nav>}
  </div>;
}

export function BackToTop() {
  return <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>;
}
