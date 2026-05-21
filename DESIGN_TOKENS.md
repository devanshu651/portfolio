# Design Tokens

## Colors

| Token | Value | Use |
| --- | --- | --- |
| `--bg-primary` | `#080810` | Deep space-black page background |
| `--bg-secondary` | `#0f0f1a` | Card and panel surfaces |
| `--bg-tertiary` | `#1a1a2e` | Elevated overlays |
| `--accent` | `#6C63FF` | Primary CTA, counters, glow |
| `--accent-warm` | `#FF6B6B` | Secondary warmth and project halo |
| `--accent-glow` | `rgba(108, 99, 255, 0.15)` | Ambient glow |
| `--text-primary` | `#F0EFF8` | Main text |
| `--text-secondary` | `#A09FC0` | Muted text |
| `--border` | `rgba(255,255,255,0.06)` | Hairline borders |

## Typography

| Role | Font |
| --- | --- |
| Display / Hero | Instrument Serif via `next/font` |
| Body / UI | DM Sans via `next/font` |
| Mono / Code Labels | JetBrains Mono via `next/font` |

Hero H1 uses `clamp(2.5rem, 6vw, 5.5rem)`. Headings and section titles also use fluid `clamp()` values, while compact UI avoids viewport-scaled text.

## Spacing

| Token | Value |
| --- | --- |
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-6` | `1.5rem` |
| `--space-8` | `2rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |
| `--space-24` | `6rem` |
| `--space-32` | `8rem` |

## Motion

Primary ease: `cubic-bezier(0.16, 1, 0.3, 1)`.

Motion is scoped through `prefers-reduced-motion` guards. GSAP handles section reveals, hero letter entrance, mobile nav stagger, and stat counters. Three.js is disabled on mobile or low-core devices.
