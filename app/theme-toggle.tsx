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

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const preferenceRef = useRef<ThemePreference>('system');

  useEffect(() => {
    const saved = localStorage.getItem('tmw-theme');
    const initial = isPreference(saved) ? saved : 'system';
    preferenceRef.current = initial;
    setPreference(initial);
    applyTheme(initial);

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (preferenceRef.current === 'system') applyTheme('system');
    };
    systemTheme.addEventListener('change', handleSystemChange);
    return () => systemTheme.removeEventListener('change', handleSystemChange);
  }, []);

  function choose(next: ThemePreference) {
    preferenceRef.current = next;
    setPreference(next);
    localStorage.setItem('tmw-theme', next);
    applyTheme(next);
  }

  return (
    <div className="theme-toggle" role="group" aria-label="Colour theme">
      {options.map((option) => (
        <button
          type="button"
          key={option}
          aria-pressed={preference === option}
          onClick={() => choose(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
