# Bee Communications — Design System

## Brand Identity
- **Client:** Gerlinde Oberndorfer, MTD — Bee Communications
- **Business:** B2B Teamkommunikation & Organisationsentwicklung
- **Location:** Salzburg, Austria
- **Tagline:** "Kommunikation | Organisation | Entwicklung"
- **Claims:** "Kommunikation, die bee_geistert." / "Innen beginnen." #innenbeginnen
- **Concept:** Schwarmwissen — bee/swarm as metaphor for team collaboration

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#F9B233` | CTAs, accents, highlights |
| `primary-dark` | `#D4941E` | Hover/active states |
| `primary-light` | `#FDF0D5` | Section backgrounds, subtle fills |
| `neutral-900` | `#1A1A1A` | Headlines, primary text |
| `neutral-700` | `#4A4A4A` | Body text |
| `neutral-200` | `#E8E4DF` | Dividers, borders |
| `neutral-50` | `#FAF8F5` | Alternate section backgrounds |
| `background` | `#FEFDFB` | Page base (warm white) |
| `accent` | `#C67D4A` | Secondary accent (terracotta) |

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display/H1 | DM Serif Display | 400 | `clamp(48px, 8vw, 120px)` |
| H2 | DM Serif Display | 400 | `clamp(32px, 5vw, 64px)` |
| H3 | Inter | 600 | `clamp(20px, 2.5vw, 28px)` |
| Body | Inter | 400 | `clamp(16px, 1.2vw, 18px)` |
| Label | Inter | 500 | 14px, uppercase, tracking 0.08em |
| Quote | DM Serif Display italic | 400 | Context-dependent |

- Headlines: letter-spacing -0.02em
- Self-hosted fonts (no CDN)

## Design Elements
- Hexagonal grid patterns (CSS-generated, very subtle)
- Grain/noise texture overlay for organic feel
- Honeycomb-inspired card borders on hover
- Organic rounded shapes as section dividers
- Amber-gold gradient accents
- Custom SVG certification seals

## Motion
- Lenis smooth scroll
- GSAP fromTo + ScrollTrigger for all reveals
- Kinetic split text on hero headline
- Magnetic cursor on CTAs
- Custom cursor (dot + follower)
- Counter animation on stats
- Staggered card reveals
- Parallax on background textures

## Responsive
- Mobile-first, Tailwind breakpoints
- `clamp()` fluid typography
- Container queries for component layouts
- Min touch target 44px
