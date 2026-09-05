# Exercise 2: Flexbox Navigation Bar & Axis Alignment

<div align="center">

### High Q Solid Academy &bull; CSS Mastery Lab 02
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: The CSS Flexible Box Layout

*Reference: HTML & CSS: The Complete Reference, Fifth Edition by Thomas A. Powell*

### 1. One-Dimensional Axis Geometry
Flexbox is designed for distributing space and aligning items along a single dimension at a time (either as a row or as a column).
- **Flex Container**: The parent element upon which `display: flex` is applied.
- **Flex Items**: The direct child elements inside the flex container.
- **Main Axis**: The primary axis determined by `flex-direction` (default is `row` = horizontal left-to-right).
- **Cross Axis**: The perpendicular axis to the main axis (default is vertical top-to-bottom).

```
Main Axis (flex-direction: row) ------------------------------------>
+-------------------------------------------------------------------+
|  [Logo]                  [Links / Buttons]              [Profile] |
+-------------------------------------------------------------------+
Cross Axis |
           v
```

### 2. Primary Flexbox Alignment Properties
| Property | Axis Controlled | Function |
| :--- | :--- | :--- |
| `justify-content` | **Main Axis** | Distributes free space between flex items (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`). |
| `align-items` | **Cross Axis** | Aligns items along the cross axis (`stretch`, `flex-start`, `flex-end`, `center`, `baseline`). |
| `gap` | **Both Axes** | Sets explicit gutters between flex items without requiring hacky margins. |

For a modern navigation bar:
- `justify-content: space-between` pushes the brand logo to the far left and the navigation links to the far right.
- `align-items: center` vertically centers items of differing heights within the navigation bar.

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-2-flexbox-nav/style.css`:
1. Style the `.navbar` container:
   - `display: flex`
   - `justify-content: space-between`
   - `align-items: center`
   - `padding: 16px 32px`
   - `background-color: #0b1a2c` (High Q Dark Navy)
   - `color: #ffffff`
2. Style the `.nav-links` list:
   - `display: flex`
   - `list-style: none`
   - `gap: 20px`
   - `align-items: center`
   - `margin: 0; padding: 0`
3. Style the anchor links `.nav-links a`:
   - `text-decoration: none`
   - `color: #ffffff`
   - `font-weight: 500`
   - Smooth hover transition: `:hover` changes `color` to `#f5b904` (High Q Gold).

---

## 🧪 Verification
Verify your implementation with:
```bash
npm.cmd test -- -t "Exercise 2"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
