# Exercise 1: CSS Box Model & Card Component Geometry

<div align="center">

### High Q Solid Academy &bull; CSS Mastery Lab 01
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: The CSS Box Model

*Reference: HTML & CSS: The Complete Reference, Fifth Edition by Thomas A. Powell (McGraw-Hill)*

### 1. The Four Concentric Boxes
In CSS, every renderable element on the page forms a rectangular box following the CSS Box Model specification. This box consists of four concentric areas:

```
+-----------------------------------------------------------+
|                          MARGIN                           |
|  +-----------------------------------------------------+  |
|  |                       BORDER                        |  |
|  |  +-----------------------------------------------+  |  |
|  |  |                    PADDING                    |  |  |
|  |  |  +-----------------------------------------+  |  |  |
|  |  |  |                 CONTENT                 |  |  |  |
|  |  |  |         (Text, Images, Child DOM)       |  |  |  |
|  |  |  +-----------------------------------------+  |  |  |
|  |  +-----------------------------------------------+  |  |
|  +-----------------------------------------------------+  |
+-----------------------------------------------------------+
```

1. **Content Area**: The innermost region where text, child elements, or media render.
2. **Padding Area**: The transparent space surrounding the content, enclosed by the border.
3. **Border Area**: The perimeter surrounding the padding. Its thickness, style, and color are configurable.
4. **Margin Area**: The transparent space outside the border separating this element from its neighbors.

### 2. The Box-Sizing Revolution: `content-box` vs `border-box`
In legacy W3C CSS (`box-sizing: content-box`):
$$\text{Rendered Width} = \text{width} + \text{padding-left} + \text{padding-right} + \text{border-left} + \text{border-right}$$
If you set `width: 300px; padding: 20px; border: 2px solid;`, the element physically expands to $300 + 40 + 4 = 344\text{px}$, frequently breaking multi-column layouts!

Under modern engineering practice and the **High Q Universal Reset**:
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```
With `border-box`, declared `width` is the **final outer rendered width**. Padding and border are subtracted from inside the box:
$$\text{Content Width} = \text{width} - (\text{padding} + \text{border})$$

### 3. Margin Collapsing
Vertical margins between adjacent block-level elements in normal flow collapse into a single margin:
$$\text{Rendered Margin} = \max(\text{margin-bottom}_{\text{top element}}, \text{margin-top}_{\text{bottom element}})$$

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-1-box-model/style.css`:
1. Apply the universal `box-sizing: border-box` reset to `*`, `*::before`, and `*::after`.
2. Style the `.hq-card` element:
   - `max-width: 350px`
   - `padding: 24px`
   - `margin: 20px auto`
   - `border-radius: 12px`
   - `border: 2px solid #f5b904` (High Q Gold)
   - Background color: `#ffffff`
   - Subtle box-shadow: `0 4px 12px rgba(0, 0, 0, 0.08)`
3. Style the `.hq-badge` pill:
   - `display: inline-block`
   - `background-color: #f5b904`
   - `color: #0b1a2c` (High Q Dark Navy)
   - `padding: 4px 12px`
   - `border-radius: 999px`
   - `font-size: 0.85rem`
   - `font-weight: 600`

---

## 🧪 Verification
Verify your implementation with:
```bash
npm.cmd test -- -t "Exercise 1"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
