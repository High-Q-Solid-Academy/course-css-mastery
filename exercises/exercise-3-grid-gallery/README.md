# Exercise 3: Auto-Responsive CSS Grid Gallery

## 🎯 Objective
Use modern CSS Grid to create a responsive multi-column layout without media queries using `repeat(auto-fit, minmax(280px, 1fr))`.

## 📋 Requirements
Inside `style.css`:
1. Style `.courses-grid`:
   - `display: grid`
   - `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
   - `gap: 24px`
   - `padding: 24px`
2. Style `.course-item`:
   - `background-color: #ffffff`
   - `border-radius: 12px`
   - `padding: 20px`
   - `border: 1px solid #e2e8f0`
   - `transition: transform 0.2s ease, box-shadow 0.2s ease`
3. Hover effect for `.course-item:hover`:
   - `transform: translateY(-4px)`
   - `box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1)`
