# JavaScript DOM Tutorial

A focused, hands-on collection of DOM manipulation examples — from basic selectors
to dynamic UI components — written in plain HTML, CSS, and vanilla JavaScript.

## Getting started

Open `src/index.html` in a browser to browse all examples, or open any individual
file directly.

> No build step, no dependencies, no frameworks.

## Examples

| File | Topic |
|------|-------|
| `dom-selectors.html` | `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, `querySelectorAll` |
| `dom-style-properties.html` | Setting inline styles via `element.style` and a reusable `applyStyles` helper |
| `dom-change-content.html` | Toggling element content and styles with a boolean state flag |
| `dom-create-delete-elements.html` | `createElement`, `appendChild`, `removeChild`, event delegation |
| `dom-class-toggle.html` | `classList.toggle`, accessible accordion menu with `aria-expanded` |
| `dom-form-events.html` | `focus`, `blur`, `change` events; live preview; native `<dialog>` for submission summary |
| `dom-mouse-events.html` | All ten mouse events wired via a config array and `addEventListener` |
| `dom-timer-countdown.html` | `setInterval`-based countdown with clean time decomposition |
| `dom-image-slider.html` | Auto-advancing carousel with dots, pause-on-hover, and correct index logic |
| `event-propagation.html` | Bubbling vs. capturing, `stopPropagation`, interactive phase switcher and live log |

## What changed from the original

- All files renamed with `.html` extension and moved to `src/`.
- Generic `fun()` / `fun1()` function names replaced with descriptive names (`applyStyles`, `createEntry`, `tick`, `goTo`, …).
- `var` replaced with `const` / `let` throughout.
- Inline event handlers (`onclick=""`, `onfocus=""`, …) replaced with `addEventListener`.
- `alert()` in the form example replaced with a native `<dialog>`.
- `Dom-Image-Slider`: fixed malformed image array, missing `id` on `<img>`, wrong index arithmetic, and broken `next()` function; added dot indicators and auto-advance.
- `Dom-Timer`: updated target date (was hardcoded to past 2025); added `clearInterval` on expiry; improved readability with `padStart`.
- `Event-Propagation`: fixed malformed viewport meta tag; replaced static `alert()` calls with an interactive phase switcher and an on-screen log.
- `Dom-Class-Toggle`: added `aria-expanded` for accessibility.
- Added `src/index.html` as a navigable entry point.

## Technologies

- Vanilla JavaScript (ES6+)
- HTML5 / CSS3
- No external runtime dependencies
