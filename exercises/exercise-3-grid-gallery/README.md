# Exercise 3: Two-Dimensional CSS Grid & Fluid Card Galleries

<div align="center">

### High Q Solid Academy &bull; CSS Mastery Lab 03
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: The CSS Grid Layout Module

*Reference: HTML & CSS: The Complete Reference, Fifth Edition by Thomas A. Powell*

### 1. Two-Dimensional Layout Architecture
Unlike Flexbox (which arranges elements along a single axis), **CSS Grid** is a true **two-dimensional** layout engine capable of orchestrating both rows and columns simultaneously.
- **Grid Container**: The parent marked `display: grid`.
- **Grid Lines**: The horizontal and vertical dividing lines creating the grid structure.
- **Grid Track**: The space between two adjacent grid lines (a row or a column).
- **Grid Cell**: The single intersection between a row track and a column track.
- **Grid Area**: Any rectangular space bound by four grid lines.

### 2. Modern Fluid Responsiveness: `repeat(auto-fit, minmax(...))`
Historically, responsive grids required multiple `@media` query breakpoints (e.g. 1 column on mobile, 2 on tablet, 3 on desktop).
With CSS Grid, the browser calculates column counts dynamically using the formula:
$$\texttt{grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));}$$

- `minmax(280px, 1fr)`: Each track will never shrink below `280px`, but can grow to take an equal fraction (`1fr`) of available space.
- `auto-fit`: Instructs the grid to fill the row with as many 280px columns as possible. If extra space remains, `1fr` causes the columns to stretch smoothly and evenly across the container.
- Result: **Zero media queries required for responsive wrapping!**

### 3. Hardware-Accelerated Micro-Interactions
When animating cards on hover:
- Animating `top` or `margin-top` forces the browser engine to perform expensive **Layout (Reflow)** and **Repaint** passes across the entire page.
- Animating `transform: translateY(-4px)` is offloaded directly to the **GPU (Compositor thread)**, yielding 60 FPS performance without layout shifts.

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-3-grid-gallery/style.css`:
1. Style the `.courses-grid` container:
   - `display: grid`
   - `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
   - `gap: 24px`
   - `padding: 24px`
2. Style each `.course-item` card:
   - `background-color: #ffffff`
   - `border-radius: 12px`
   - `padding: 20px`
   - `border: 1px solid #e2e8f0`
   - Smooth GPU transition: `transition: transform 0.2s ease, box-shadow 0.2s ease`
3. Add hover elevation to `.course-item:hover`:
   - `transform: translateY(-4px)`
   - `box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1)`

---

## 🧪 Verification
Verify your implementation with:
```bash
npm.cmd test -- -t "Exercise 3"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
