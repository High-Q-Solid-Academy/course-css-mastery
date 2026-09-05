# Exercise 4: Mobile-First Responsive Landing Page

## 🎯 Objective
Use CSS Custom Properties (Variables) and Mobile-First Media Queries to style a responsive High Q Solid Academy landing page.

## 📋 Requirements
Inside `style.css`:
1. Define CSS custom variables on `:root`:
   ```css
   :root {
     --hq-yellow: #f5b904;
     --hq-dark: #0b1a2c;
     --hq-text: #1e293b;
     --hq-bg: #f8fafc;
   }
   ```
2. Mobile-first typography and single-column layout for small screens.
3. Media query for desktop screens:
   ```css
   @media (min-width: 768px) {
     .hero-content {
       display: flex;
       align-items: center;
       justify-content: space-between;
     }
   }
   ```
4. Style the High Q primary CTA button with background `var(--hq-yellow)` and text color `var(--hq-dark)`.
