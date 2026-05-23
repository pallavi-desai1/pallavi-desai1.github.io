# Personal Website Design Spec
**Date:** 2026-05-22
**Deployment:** GitHub Pages (pallavi-desai1.github.io)

## Context

Pallavi Desai is an MS CS student at UT Austin and B.A. Data Science graduate from UC Berkeley. She needs a personal website that serves both recruiters (industry) and academic audiences equally. The site should lead with her intellectual contributions (research, patents) and reflect a warm, personal aesthetic.

## Tech Stack

- **HTML + CSS + vanilla JS** — no frameworks, no build step, deploys directly to GitHub Pages
- **Google Fonts:** Playfair Display (headings), Inter (body)
- **No external JS dependencies**

## Visual Design

| Element | Value |
|---|---|
| Background | `#FAF7F2` (warm cream) |
| Accent | `#C4714F` (terracotta) |
| Text | `#2C2C2C` (dark charcoal) |
| Section divider | `#EDE8DF` (soft sand) |
| Heading font | Playfair Display (serif) |
| Body font | Inter (sans-serif) |

Style: warm, personal, editorial — magazine-quality spacing, content-forward.

## Page Structure (single scrolling page)

### 1. Sticky Navigation
- Name left, section links right: About · Research · Experience · Education · Leadership · Contact
- Transparent until scroll → cream background on scroll
- Active section link gets terracotta underline
- Hamburger menu on mobile

### 2. Hero
- Two-column split
- Left: headshot (`assets/headshot.jpg`) in soft rounded rectangle with warm shadow
- Right: name (large Playfair Display), tagline ("MS CS at UT Austin · ML Researcher · Founder · Patent Holder"), 2-sentence bio, icon links (Email, LinkedIn, GitHub), and a "Download CV" button linking to `assets/cv.pdf`

### 3. Research & Patents (lead section)
- Two large featured cards side-by-side:
  - AIMarchAssist Patents (US #10,885,891 + #11,289,058)
  - "Towards Interpretable Models of Rumor Spread in LLM-Driven Agent Societies"
- Each card: title, description, terracotta left-edge accent bar
- Below: smaller row for other research roles (DynamiCog Lab, Fung Fellow, Trademark Rebranding, Micro Lab)

### 4. Experience (vertical timeline)
- Roles in order: ML Engineer Intern @ AmEx (2024) → Founder/CEO @ AIMarchAssist (2023–present) → Data Scientist Intern @ AmEx (2023) → PM Intern @ You.com (2022)
- Each entry: company, role, dates, 2–3 bullet points

### 5. Education (side by side)
- Left: UT Austin — M.S. Computer Science, thesis advisor, key coursework
- Right: UC Berkeley — B.A. Data Science, honors, minor, certificate, key coursework

### 6. Leadership (2-across card grid)
- GRACS Co-President (incoming), Berkeley Mentorship Cohort, Sutardja Center Operations/TA, Cal Equestrian Team, CDSS Student Advisory Board

### 7. Honors & Awards
- SEED Scholar (STEM Excellence Through Equity and Diversity, 2021–2025)
- Most Promising Innovation Award — Designing Startups to Transform Society Pitch Competition (May 2024)
- Community Award — Berkeley Mentorship Cohort (April 2023, 1 of 95 mentors)

### 8. Skills & Interests
- Technical skills: terracotta pills
- Languages: sand pills
- Interests: plain text

### 9. Footer
- Centered: email · LinkedIn · GitHub
- No contact form — footer info only; phone number not included
- Quiet copyright line

## Interactions

- **Smooth scroll** on nav link clicks
- **Fade-in on scroll** — sections animate in via Intersection Observer (no library)
- **Nav highlight** — active section tracked on scroll
- **Card hover** — research cards lift with subtle shadow
- **Mobile responsive** — hero stacks vertically, nav hamburger

## File Structure

```
website/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── headshot.jpg
    └── cv.pdf
```

## Content Sources

- Resume: `Pallavi Desai - AT&T Resume.pdf`
- Headshot: `/Users/pallavidesai/Desktop/Berkeley/Photos/2024 Headshot.jpg`
- GitHub Pages repo: pallavi-desai1.github.io
