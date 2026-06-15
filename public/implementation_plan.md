# Portfolio Redesign — DVDRod-Inspired Work Section & Case Study Pages

## Background

Your current portfolio at [mkp-portofolio](file:///home/lanss/experimence/side-portofolio/mkp-portofolio) is a solid Next.js 16 site with a working hero, work section, about, and contact. However, the **Work section** uses flat list-style project rows, and there are **no detail/case study pages** for individual projects.

The inspiration site ([dvdrod.com](https://dvdrod.com/)) uses:
- **Rich split-layout project cards** with gradient visuals, decorative blobs, metrics, and hover animations
- **Full case study detail pages** with immersive hero, numbered sections, two-column layouts, quote blocks, image grids, and result metrics
- Dark-first design with light mode toggle, noise texture overlay, custom cursor

Here are reference screenshots I captured:

````carousel
![DVDRod Homepage Hero](file:///home/lanss/.gemini/antigravity-ide/brain/b7990bd4-720e-492f-be0c-47e485b1addc/homepage_hero_1781558333137.png)
<!-- slide -->
![DVDRod Work Section - Project Cards](file:///home/lanss/.gemini/antigravity-ide/brain/b7990bd4-720e-492f-be0c-47e485b1addc/homepage_work_section_1781558339312.png)
<!-- slide -->
![DVDRod Work Section - Card 2](file:///home/lanss/.gemini/antigravity-ide/brain/b7990bd4-720e-492f-be0c-47e485b1addc/homepage_work_card_2_1781558347124.png)
<!-- slide -->
![DVDRod Case Study Hero](file:///home/lanss/.gemini/antigravity-ide/brain/b7990bd4-720e-492f-be0c-47e485b1addc/casestudy_hero_1781558417048.png)
<!-- slide -->
![DVDRod Case Study - Problem Section](file:///home/lanss/.gemini/antigravity-ide/brain/b7990bd4-720e-492f-be0c-47e485b1addc/casestudy_overview_1781558436116.png)
<!-- slide -->
![DVDRod Case Study - Design Details](file:///home/lanss/.gemini/antigravity-ide/brain/b7990bd4-720e-492f-be0c-47e485b1addc/casestudy_design_details_1781558477520.png)
<!-- slide -->
![DVDRod Case Study - Results Metrics](file:///home/lanss/.gemini/antigravity-ide/brain/b7990bd4-720e-492f-be0c-47e485b1addc/casestudy_impact_metrics_3_1781558930718.png)
<!-- slide -->
![DVDRod Case Study Footer - Next Project](file:///home/lanss/.gemini/antigravity-ide/brain/b7990bd4-720e-492f-be0c-47e485b1addc/casestudy_footer_1781558988105.png)
````

---

## User Review Required

> [!IMPORTANT]
> **Project Content**: I'll use the 4 projects already defined in your [projects.ts](file:///home/lanss/experimence/side-portofolio/mkp-portofolio/data/projects.ts). The case study pages will need real content — for now, I'll create a **template structure** populated with your existing project descriptions, and you can refine the copy later. I noticed repos on your GitHub like `Trading_Holic_Bot`, `banking-app`, `librtrack`, `Noxionite`, etc. Should I add any of these or stick with the current 4?

> [!IMPORTANT]
> **GitHub Links**: Each project card will link to a detail page `/work/[project-id]`. Should the detail pages also include a direct "View on GitHub" button linking to the corresponding repo?

> [!WARNING]
> **Static Export**: Your project uses `output: 'export'` for static hosting. Dynamic routes like `/work/[slug]` will work via `generateStaticParams()`, but we need to ensure all project slugs are pre-generated. This is handled automatically.

## Open Questions

1. **Case study images**: The detail pages ideally show screenshots/mockups of the actual project. Do you have any project screenshots, or should I use gradient-based visual placeholders (like dvdrod does with blobs + gradient backgrounds)?
2. **Metrics/Impact Data**: DVDRod shows metrics like "+22% conversion" and "48% completion rate". Do you have similar impact metrics for your projects (e.g., "15% improvement in work effectiveness" for EMIS)? I'll use what I can find from your existing descriptions.
3. **Custom cursor**: DVDRod has a Miro-style custom cursor. Do you want me to implement something similar, or keep the default cursor?

---

## Proposed Changes

### Phase 1: Data Layer — Enrich Project Model

#### [MODIFY] [index.ts](file:///home/lanss/experimence/side-portofolio/mkp-portofolio/types/index.ts)

Extend the `Project` interface with case study fields:

```typescript
export interface ProjectSection {
  label: string          // e.g. "01 — The Challenge"
  title: string          // Section heading
  body: string[]         // Paragraphs
  findings?: { icon: string; title: string; text: string }[]
  quote?: string
}

export interface ProjectMetric {
  value: string          // e.g. "+22%"
  label: string          // e.g. "conversion rate improvement"
}

export interface Project {
  // existing fields...
  slug: string           // URL-safe identifier
  company?: string       // Company/context name
  year?: string          // e.g. "2024"
  role?: string          // Your role
  type?: string          // e.g. "Full Stack · AI Integration"
  heroGradient: string   // CSS gradient for hero background
  accentColor: string    // Accent color for this project
  metrics?: ProjectMetric[]
  sections?: ProjectSection[]
  nextProjectSlug?: string
}
```

#### [MODIFY] [projects.ts](file:///home/lanss/experimence/side-portofolio/mkp-portofolio/data/projects.ts)

Enrich each project with the new fields: `slug`, `company`, `year`, `role`, `type`, `heroGradient`, `accentColor`, `metrics`, `sections`, `nextProjectSlug`. Create detailed case study content for each project based on descriptions.

---

### Phase 2: Work Section Redesign — DVDRod-Style Cards

#### [MODIFY] [ProjectCard.tsx](file:///home/lanss/experimence/side-portofolio/mkp-portofolio/components/shared/ProjectCard.tsx)

Complete redesign from flat row to **split-layout card** matching dvdrod:

- **Left half**: Project info (number, tags, title, description, metrics)
- **Right half**: Visual area with gradient background, decorative blobs, hover-to-scale
- **Corner arrow button** with hover rotate effect
- **Border with subtle hover glow**
- Cards link to `/work/[slug]` detail page
- Grid layout: `grid-template-columns: 1fr 1fr`, min-height ~400px

#### [MODIFY] [Work.tsx](file:///home/lanss/experimence/side-portofolio/mkp-portofolio/components/sections/Work.tsx)

Update the work section to:
- Add section header with label + count (matching dvdrod `.s-header`)
- Stack cards vertically with 16px gap
- GSAP scroll-triggered card reveal animations

#### [MODIFY] [globals.css](file:///home/lanss/experimence/side-portofolio/mkp-portofolio/app/globals.css)

Add new CSS classes:
- `.pcard` — project card with border, radius, overflow hidden
- `.pcard-inner` — grid split layout
- `.pcard-info` — left info panel
- `.pcard-vis` — right visual panel with gradient + blobs
- `.p-arrow` — corner arrow button
- Hover effects: border glow, background scale, arrow rotate
- Individual project gradient classes

---

### Phase 3: Case Study Detail Page

#### [NEW] `app/work/[slug]/page.tsx`

Dynamic route for individual project case studies. Uses `generateStaticParams()` to pre-render all project pages at build time.

**Layout structure** (matching dvdrod):
1. **Full-viewport hero** with gradient background, large project title (text-reveal animation), meta strip (Company, Year, Type, Role)
2. **Summary band** — one-liner TL;DR of the project
3. **Numbered sections** (01 Problem, 02 Approach, 03 Solution, 04 Results) — each with:
   - Section label + number
   - Large section title
   - Body text in two-column layout (text left, visual/sidebar right)
   - Optional findings grid, quote blocks
4. **Results metrics** — large accent-colored numbers in a row
5. **Next project navigation** — "Next Case Study" link with arrow, project name, hover effect

#### [NEW] `components/casestudy/CaseStudyHero.tsx`

Full-viewport hero component with:
- Gradient background matching project theme
- Text reveal animation (GSAP)
- Meta strip (Company, Year, Type, Role)
- Back home link in nav

#### [NEW] `components/casestudy/CaseStudySection.tsx`

Reusable section component for numbered content blocks.

#### [NEW] `components/casestudy/CaseStudyMetrics.tsx`

Impact metrics display with large accent-colored values.

#### [NEW] `components/casestudy/CaseStudyNext.tsx`

"Next Case Study" navigation at bottom of page.

---

### Phase 4: Navigation Updates

#### [MODIFY] [Navbar.tsx](file:///home/lanss/experimence/side-portofolio/mkp-portofolio/components/layout/Navbar.tsx)

- On case study pages: show "Back home" link instead of section nav links
- Maintain floating pill navbar behavior
- Ensure theme toggle works on case study pages

#### [NEW] `app/work/[slug]/layout.tsx`

Case study layout wrapper that provides the appropriate navbar context (back link instead of section anchors).

---

### Phase 5: Polish & Animations

- **Noise texture overlay** on `body::after` (matching dvdrod's fractal noise SVG)
- **GSAP text-reveal animations** on case study hero title (translateY slide-up)
- **ScrollTrigger-based section reveals** on case study content
- **Hover micro-interactions** on project cards (border glow, visual scale, arrow rotate)
- Card stagger animation on scroll

---

### Phase 6: Responsive Design

- Project cards: stack to single column on mobile (info above visual)
- Case study two-column layouts: collapse to single column on tablet
- Meta strip: wrap on mobile
- Reduce font sizes via clamp()
- Hide decorative elements (blobs, large numbers) on small screens

---

### Phase 7: Verification

Run the project and visually verify:

### Automated Tests
```bash
npm run build
```

### Manual Verification
- Check homepage Work section card layout in both light/dark themes
- Click a project card → verify case study page loads with correct content
- Verify GSAP animations (text reveal, scroll triggers)
- Test responsive layout at 375px, 768px, 1024px, 1440px
- Verify "Next Case Study" navigation loops correctly
- Test theme toggle persistence on case study pages

---

## Summary of File Changes

| Action | File | Description |
|--------|------|-------------|
| MODIFY | `types/index.ts` | Add case study types |
| MODIFY | `data/projects.ts` | Enrich project data with case study content |
| MODIFY | `components/shared/ProjectCard.tsx` | Redesign to split-layout card |
| MODIFY | `components/sections/Work.tsx` | Update section layout |
| MODIFY | `app/globals.css` | Add project card and case study CSS |
| MODIFY | `components/layout/Navbar.tsx` | Add case study nav mode |
| NEW | `app/work/[slug]/page.tsx` | Case study detail page |
| NEW | `components/casestudy/CaseStudyHero.tsx` | Hero component |
| NEW | `components/casestudy/CaseStudySection.tsx` | Section component |
| NEW | `components/casestudy/CaseStudyMetrics.tsx` | Metrics component |
| NEW | `components/casestudy/CaseStudyNext.tsx` | Next project nav |
