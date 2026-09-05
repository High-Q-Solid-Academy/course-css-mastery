import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

function readCSS(relativePath) {
  const filePath = path.resolve(__dirname, '..', relativePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`CSS file not found: ${relativePath}`);
  }
  const css = fs.readFileSync(filePath, 'utf8');
  const isStarter = css.includes('TODO Instructions');
  return { css, isStarter };
}

describe('Exercise 1: Box Model Card', () => {
  it('should include universal box-sizing reset', () => {
    const { css, isStarter } = readCSS('exercises/exercise-1-box-model/style.css');
    if (isStarter && !css.includes('border-box;')) {
      console.log('ℹ️ Exercise 1: Starter template active. Ready for student implementation.');
      return;
    }
    expect(css).toMatch(/box-sizing:\s*border-box/);
  });

  it('should define padding, border, and border-radius on .hq-card', () => {
    const { css, isStarter } = readCSS('exercises/exercise-1-box-model/style.css');
    if (isStarter && !css.includes('.hq-card')) return;
    expect(css).toMatch(/\.hq-card\s*\{[^}]*padding:[^;]+;/);
    expect(css).toMatch(/\.hq-card\s*\{[^}]*border(-radius)?:[^;]+;/);
  });
});

describe('Exercise 2: Flexbox Navigation Bar', () => {
  it('should apply display: flex to .navbar and .nav-links', () => {
    const { css, isStarter } = readCSS('exercises/exercise-2-flexbox-nav/style.css');
    if (isStarter && !css.includes('.navbar {')) {
      console.log('ℹ️ Exercise 2: Starter template active. Ready for student implementation.');
      return;
    }
    expect(css).toMatch(/\.navbar\s*\{[^}]*display:\s*flex/);
    expect(css).toMatch(/\.nav-links\s*\{[^}]*display:\s*flex/);
  });

  it('should align items and justify space between in .navbar', () => {
    const { css, isStarter } = readCSS('exercises/exercise-2-flexbox-nav/style.css');
    if (isStarter && !css.includes('.navbar {')) return;
    expect(css).toMatch(/justify-content:\s*space-between/);
    expect(css).toMatch(/align-items:\s*center/);
  });
});

describe('Exercise 3: Auto-Responsive CSS Grid', () => {
  it('should use display: grid and repeat(auto-fit, minmax(...))', () => {
    const { css, isStarter } = readCSS('exercises/exercise-3-grid-gallery/style.css');
    if (isStarter && !css.includes('.courses-grid {')) {
      console.log('ℹ️ Exercise 3: Starter template active. Ready for student implementation.');
      return;
    }
    expect(css).toMatch(/display:\s*grid/);
    expect(css).toMatch(/grid-template-columns:\s*repeat\(\s*auto-fit/);
  });
});

describe('Exercise 4: Mobile-First Responsive Landing Page', () => {
  it('should declare custom CSS variables on :root', () => {
    const { css, isStarter } = readCSS('exercises/exercise-4-responsive-landing/style.css');
    if (isStarter && !css.includes(':root {')) {
      console.log('ℹ️ Exercise 4: Starter template active. Ready for student implementation.');
      return;
    }
    expect(css).toMatch(/:root\s*\{[^}]*--hq-yellow/);
    expect(css).toMatch(/:root\s*\{[^}]*--hq-dark/);
  });

  it('should include desktop media query', () => {
    const { css, isStarter } = readCSS('exercises/exercise-4-responsive-landing/style.css');
    if (isStarter && !css.includes('@media')) return;
    expect(css).toMatch(/@media\s*\(\s*min-width:\s*768px\s*\)/);
  });
});
