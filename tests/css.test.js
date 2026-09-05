import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

function readCSS(relativePath) {
  const filePath = path.resolve(__dirname, '..', relativePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`CSS file not found: ${relativePath}`);
  }
  return fs.readFileSync(filePath, 'utf8');
}

describe('Exercise 1: Box Model Card', () => {
  it('should include universal box-sizing reset', () => {
    const css = readCSS('exercises/exercise-1-box-model/style.css');
    expect(css).toMatch(/box-sizing:\s*border-box/);
  });

  it('should define padding, border, and border-radius on .hq-card', () => {
    const css = readCSS('exercises/exercise-1-box-model/style.css');
    expect(css).toMatch(/\.hq-card\s*\{[^}]*padding:[^;]+;/);
    expect(css).toMatch(/\.hq-card\s*\{[^}]*border(-radius)?:[^;]+;/);
  });
});

describe('Exercise 2: Flexbox Navigation Bar', () => {
  it('should apply display: flex to .navbar and .nav-links', () => {
    const css = readCSS('exercises/exercise-2-flexbox-nav/style.css');
    expect(css).toMatch(/\.navbar\s*\{[^}]*display:\s*flex/);
    expect(css).toMatch(/\.nav-links\s*\{[^}]*display:\s*flex/);
  });

  it('should align items and justify space between in .navbar', () => {
    const css = readCSS('exercises/exercise-2-flexbox-nav/style.css');
    expect(css).toMatch(/justify-content:\s*space-between/);
    expect(css).toMatch(/align-items:\s*center/);
  });
});

describe('Exercise 3: Auto-Responsive CSS Grid', () => {
  it('should use display: grid and repeat(auto-fit, minmax(...))', () => {
    const css = readCSS('exercises/exercise-3-grid-gallery/style.css');
    expect(css).toMatch(/display:\s*grid/);
    expect(css).toMatch(/grid-template-columns:\s*repeat\(\s*auto-fit/);
  });
});

describe('Exercise 4: Mobile-First Responsive Landing Page', () => {
  it('should declare custom CSS variables on :root', () => {
    const css = readCSS('exercises/exercise-4-responsive-landing/style.css');
    expect(css).toMatch(/:root\s*\{[^}]*--hq-yellow/);
    expect(css).toMatch(/:root\s*\{[^}]*--hq-dark/);
  });

  it('should include desktop media query', () => {
    const css = readCSS('exercises/exercise-4-responsive-landing/style.css');
    expect(css).toMatch(/@media\s*\(\s*min-width:\s*768px\s*\)/);
  });
});
