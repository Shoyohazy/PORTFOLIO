# Portfolio Website – Cinematic Engineering Experience Guidelines

You are working on a premium storytelling portfolio website built with:

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Three.js / React Three Fiber
- shadcn/ui

This is a production-grade personal brand experience for a frontend/full stack engineer.

The goal is NOT to build a generic portfolio.
The goal is to build an immersive engineering narrative that feels cinematic, modern, smooth, and highly polished while remaining optimized and maintainable.

Prioritize:

- performance
- storytelling
- smooth motion
- scalability
- clean architecture
- production-quality UI

Over:

- flashy visuals
- overengineering
- unnecessary complexity

---

# CORE PRINCIPLES

## 1. STORYTELLING OVER SECTIONS

Every section should feel connected.

The website should feel like:

- entering a digital system
- exploring infrastructure
- discovering engineering layers

NOT:

- scrolling through disconnected cards

Transitions between sections must feel seamless and intentional.

---

## 2. PREMIUM MINIMALISM

The design language must remain:

- dark
- spacious
- futuristic
- cinematic
- elegant

Avoid:

- visual clutter
- excessive gradients
- colorful UI
- flashy effects
- overloaded screens

Whitespace is part of the design.

---

## 3. PERFORMANCE IS A FEATURE

This website MUST feel smooth on mid-range devices.

Always prioritize:

- smooth FPS
- optimized rendering
- lightweight animations
- efficient React patterns

DO:

- lazy load heavy sections
- dynamically import 3D scenes
- memoize expensive components
- use transform/opacity animations
- optimize scroll listeners
- minimize rerenders

DO NOT:

- overload Three.js scenes
- create massive particle systems
- stack multiple canvases unnecessarily
- use expensive blur/shadow effects everywhere
- create animation-heavy layouts without purpose

---

## 4. MOTION SHOULD FEEL NATURAL

Animations should feel:

- cinematic
- smooth
- inertial
- responsive
- elegant

NOT:

- bouncy
- exaggerated
- distracting
- over-animated

Motion should guide attention, not steal it.

---

## 5. SUBTLE 3D ONLY

Three.js should enhance storytelling.

It should NEVER dominate usability.

Use 3D for:

- ambient engineering visuals
- connected systems
- floating infrastructure elements
- depth and immersion

Avoid:

- complex gaming scenes
- unnecessary physics
- overly interactive gimmicks

---

# UI / UX GUIDELINES

## 6. VISUAL HIERARCHY

Use:

- spacing
- typography
- opacity
- positioning

Before:

- borders
- bright colors
- heavy effects

The UI should remain clean and highly scannable.

---

## 7. TYPOGRAPHY

Typography is a core visual element.

Preferred fonts:

- Space Grotesk
- Satoshi
- Inter

Guidelines:

- large bold headings
- subtle supporting text
- generous line-height
- clean spacing

Avoid:

- tiny text
- compressed layouts
- too many font weights

---

## 8. COLOR SYSTEM

Maintain a restrained palette.

Primary:

- #000000
- #090909
- #111111

Text:

- #FFFFFF
- #B5B5B5
- #6E6E6E

Accent:

- use ONLY one subtle accent tone

Avoid:

- rainbow gradients
- excessive neon
- saturated UI colors

---

## 9. SPACING DISCIPLINE

Spacing creates the premium feel.

Use:

- large section breathing room
- consistent gaps
- clean alignment

Preferred spacing scale:

- 8
- 16
- 24
- 32
- 48
- 64
- 96

Prefer:

- gap utilities
- flex/grid layouts

Avoid:

- random margins
- cramped sections

---

# INTERACTIONS & ANIMATIONS

## 10. SCROLL EXPERIENCE

Scrolling should feel:

- smooth
- weighted
- immersive

Use:

- Lenis smooth scrolling
- subtle parallax
- stagger reveals
- fade + translate transitions

Avoid:

- aggressive parallax
- excessive scroll hijacking
- motion sickness effects

---

## 11. HOVER INTERACTIONS

Hover states should feel refined.

Examples:

- magnetic buttons
- subtle glow shifts
- animated underline transitions
- soft elevation
- opacity transitions

Avoid:

- dramatic scaling
- flashy color changes

---

## 12. PAGE TRANSITIONS

Page transitions should feel cinematic.

Preferred:

- fade transitions
- directional motion
- masked reveals
- subtle blur transitions

Keep transitions:

- fast
- smooth
- intentional

---

## 13. SECTION REVEALS

Reveal animations should:

- guide attention
- reinforce storytelling
- support pacing

Preferred motion:

- opacity
- translateY
- subtle scaling
- staggered timing

Avoid:

- spinning
- bouncing
- unnecessary transforms

---

# 3D GUIDELINES

## 14. THREE.JS ARCHITECTURE

Three.js scenes must remain lightweight.

Preferred visuals:

- floating nodes
- connected lines
- low-poly geometry
- ambient motion
- subtle lighting

Avoid:

- high polygon models
- unnecessary postprocessing
- heavy shaders
- multiple realtime lights

---

## 15. RESPONSIVE 3D

Mobile devices should:

- reduce 3D complexity
- reduce animation intensity
- preserve smoothness

Performance > visual fidelity.

---

# COMPONENT ARCHITECTURE

## 16. REUSE > REBUILD

Build reusable systems.

Preferred:

- composable components
- reusable animation wrappers
- centralized motion configs
- scalable section layouts

Avoid:

- duplicated animation logic
- giant monolithic components

---

## 17. CLEAN FILE STRUCTURE

Maintain scalable architecture.

Preferred structure:

src/
├── animations/
├── components/
├── sections/
├── scenes/
├── layouts/
├── hooks/
├── shaders/
├── data/
├── lib/
├── utils/
└── styles/

---

## 18. SHADCN/UI USAGE

Use shadcn/ui where appropriate.

Preferred:

- Button
- Dialog
- Sheet
- Tooltip
- Card

Extend using:

- Tailwind utilities
- variants
- composition

Avoid:

- rewriting existing primitives unnecessarily

---

# CODE QUALITY

## 19. KEEP CODE CLEAN

Write:

- modular components
- typed props
- reusable hooks
- maintainable animations
- readable JSX

Avoid:

- deeply nested JSX
- massive files
- duplicated logic

---

## 20. CONSISTENCY OVER EXPERIMENTATION

Maintain a unified visual and motion language.

Every section should feel like part of the same world.

Avoid:

- introducing new aesthetics randomly
- inconsistent animation styles
- drastically different layouts between sections

---

# ACCESSIBILITY

## 21. ACCESSIBILITY MATTERS

Maintain:

- semantic HTML
- keyboard navigation
- reduced motion support
- accessible contrast
- responsive layouts

Animations should never harm usability.

---

# WHAT TO AVOID

- ❌ Generic portfolio layouts
- ❌ Overdesigned glassmorphism
- ❌ Flashy neon cyberpunk aesthetics
- ❌ Heavy particle systems
- ❌ Laggy Three.js scenes
- ❌ Massive blur effects
- ❌ Random animations
- ❌ Cluttered interfaces
- ❌ Too many colors
- ❌ Excessive hover gimmicks
- ❌ Dribbble-style overdesign without usability

---

# EXPECTED OUTPUT STYLE

When building features:

- preserve immersion
- keep transitions smooth
- maintain storytelling flow
- prioritize performance
- ensure responsiveness
- write production-ready code

All additions should feel:

- intentional
- elegant
- scalable
- cinematic

---

# MENTAL MODEL

Think like:

> "I'm crafting an immersive engineering experience that communicates systems thinking, scalability, and modern frontend craftsmanship."

NOT:

> "I'm designing a flashy experimental portfolio for social media likes."
