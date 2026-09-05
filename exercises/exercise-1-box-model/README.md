# Exercise 1: CSS Box Model Card

## 🎯 Objective
Master the box model (`box-sizing: border-box`, `padding`, `margin`, `border-radius`, `box-shadow`) to style a High Q Academy program card.

## 📋 Requirements
Inside `style.css`:
1. Universal box-sizing reset:
   ```css
   *, *::before, *::after {
     box-sizing: border-box;
   }
   ```
2. Style `.hq-card`:
   - `max-width: 350px`
   - `padding: 24px`
   - `margin: 20px auto`
   - `border-radius: 12px`
   - `border: 2px solid #f5b904`
   - Background color and box-shadow.
3. Style `.hq-badge`:
   - `display: inline-block`
   - `background-color: #f5b904`
   - `padding: 4px 12px`
   - `border-radius: 999px`
