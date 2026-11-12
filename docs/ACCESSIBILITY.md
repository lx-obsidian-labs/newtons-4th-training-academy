# Accessibility engineering

Target WCAG 2.2 AA; conformance has not been independently established.

| Requirement | Current approach | Verification |
|---|---|---|
| Non-text content | Descriptive SVG accessible names | Screen reader announces machine identity |
| Keyboard operation | Native links, buttons and inputs | Tab, Shift+Tab, Enter, Space |
| Focus visibility | Visual directory focus styles | Inspect every route |
| Reflow | Responsive grid | 320 CSS px and 200% zoom |
| Status updates | Live result counts and quiz feedback | Screen reader test |
| Contrast | High-contrast palette | Measure text and controls |

Test with NVDA/Firefox and TalkBack/Chrome; record browser, viewport, failure and remediation. Verify machine illustrations with a qualified reviewer. Do not treat illustrative graphics as a substitute for authentic equipment photos or supervised training.
