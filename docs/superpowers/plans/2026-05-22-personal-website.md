# Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page personal portfolio website for Pallavi Desai to GitHub Pages (pallavi-desai1.github.io) with a warm editorial aesthetic, leading with research & patents.

**Architecture:** Three static files (index.html, style.css, script.js) plus an assets directory. No build step — files deploy directly to GitHub Pages. HTML is written in full first section-by-section, then CSS layers on top, then JS adds interactivity.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), vanilla JS (Intersection Observer, smooth scroll), Google Fonts (Playfair Display + Inter).

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | All page structure and content |
| `style.css` | All visual styling, responsive layout |
| `script.js` | Smooth scroll, scroll-spy nav highlight, fade-in on scroll, hamburger menu |
| `assets/headshot.jpg` | Pallavi's photo (copied from source) |
| `assets/cv.pdf` | CV for download (user provides) |

---

### Task 1: Set up project structure and copy assets

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`
- Create: `assets/headshot.jpg` (copy from source)
- Create: `.gitignore`

- [ ] **Step 1: Create the assets directory and copy the headshot**

```bash
mkdir -p "/Users/pallavidesai/Desktop/Important Documents/website/assets"
cp "/Users/pallavidesai/Desktop/Berkeley/Photos/2024 Headshot.jpg" \
   "/Users/pallavidesai/Desktop/Important Documents/website/assets/headshot.jpg"
```

Expected: `assets/headshot.jpg` exists and is non-zero bytes.

- [ ] **Step 2: Create a placeholder CV file** (user will replace with real PDF before deploy)

```bash
touch "/Users/pallavidesai/Desktop/Important Documents/website/assets/cv.pdf"
```

- [ ] **Step 3: Create .gitignore**

Create `.gitignore` at the repo root:

```
.DS_Store
.superpowers/
```

- [ ] **Step 4: Create empty style.css and script.js**

Create `style.css` (empty for now):
```css
/* styles added in later tasks */
```

Create `script.js` (empty for now):
```js
// interactions added in a later task
```

- [ ] **Step 5: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add assets/headshot.jpg assets/cv.pdf style.css script.js .gitignore
git commit -m "chore: set up project structure and assets"
```

---

### Task 2: Build HTML — document shell, nav, and hero

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write the full HTML shell with nav and hero**

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pallavi Desai</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- NAV -->
  <nav id="navbar">
    <div class="nav-inner">
      <a class="nav-name" href="#hero">Pallavi Desai</a>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="#research">Research</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#leadership">Leadership</a></li>
        <li><a href="#honors">Honors</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- HERO -->
  <section id="hero" class="hero">
    <div class="hero-inner">
      <div class="hero-photo">
        <img src="assets/headshot.jpg" alt="Pallavi Desai">
      </div>
      <div class="hero-content">
        <h1>Pallavi Desai</h1>
        <p class="tagline">MS CS at UT Austin &middot; ML Researcher &middot; Founder &middot; Patent Holder</p>
        <p class="bio">I build intelligent systems at the intersection of machine learning, language, and real-world impact. From patented hardware for marching bands to NLP research at scale, I bring rigor and creativity to hard problems.</p>
        <div class="hero-links">
          <a href="mailto:pallavi.desai@utexas.edu" class="hero-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/pallavi-desai25/" class="hero-link" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/pallavi-desai1" class="hero-link" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="assets/cv.pdf" class="hero-link cv-button" download>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- RESEARCH & PATENTS placeholder -->
  <section id="research" class="section fade-in">
    <!-- Task 3 -->
  </section>

  <!-- EXPERIENCE placeholder -->
  <section id="experience" class="section fade-in">
    <!-- Task 4 -->
  </section>

  <!-- EDUCATION placeholder -->
  <section id="education" class="section fade-in">
    <!-- Task 5 -->
  </section>

  <!-- LEADERSHIP placeholder -->
  <section id="leadership" class="section fade-in">
    <!-- Task 6 -->
  </section>

  <!-- HONORS placeholder -->
  <section id="honors" class="section fade-in">
    <!-- Task 7 -->
  </section>

  <!-- SKILLS placeholder -->
  <section id="skills" class="section fade-in">
    <!-- Task 8 -->
  </section>

  <!-- FOOTER placeholder -->
  <footer id="footer">
    <!-- Task 8 -->
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify file opens in browser**

Open `index.html` in a browser (double-click or `open index.html`). Expected: blank cream page with "Pallavi Desai" in the tab title and no console errors.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add index.html
git commit -m "feat: add HTML shell with nav and hero structure"
```

---

### Task 3: Build HTML — Research & Patents section

**Files:**
- Modify: `index.html` (replace Research & Patents placeholder)

- [ ] **Step 1: Replace the research section placeholder in index.html**

Replace:
```html
  <!-- RESEARCH & PATENTS placeholder -->
  <section id="research" class="section fade-in">
    <!-- Task 3 -->
  </section>
```

With:
```html
  <!-- RESEARCH & PATENTS -->
  <section id="research" class="section fade-in">
    <div class="section-inner">
      <h2 class="section-title">Research &amp; Patents</h2>

      <div class="featured-cards">
        <div class="featured-card">
          <div class="card-accent"></div>
          <div class="card-body">
            <span class="card-label">2 U.S. Patents &middot; Jan 2020&ndash;Present</span>
            <h3>AIMarchAssist</h3>
            <p>A thin, lightweight electronic display for sheet music using Real-Time Kinematic tracking and AI-based telemetric assessment to provide marching bands with individualized, real-time feedback for music and marching performance.</p>
            <p class="card-meta">Patent #10,885,891 &middot; Continuation #11,289,058</p>
          </div>
        </div>
        <div class="featured-card">
          <div class="card-accent"></div>
          <div class="card-body">
            <span class="card-label">Publication &middot; Aug&ndash;Dec 2025</span>
            <h3>Towards Interpretable Models of Rumor Spread in LLM-Driven Agent Societies</h3>
            <p>Examining how rumors spread and what network features accelerate or hinder them using graph theory and LLM-agent simulations. Collaboration with Rahul Nandakumar, PhD (McCombs School of Business). Submission to journal expected summer 2026.</p>
          </div>
        </div>
      </div>

      <h3 class="subsection-title">Research Roles</h3>
      <div class="research-roles">
        <div class="research-role">
          <div class="role-header">
            <span class="role-title">Graduate Research Assistant</span>
            <span class="role-date">Jan 2026&ndash;Present</span>
          </div>
          <span class="role-org">DynamiCog Lab &middot; UT Austin</span>
          <p>Analyzing secure messages between patients and healthcare providers to improve patient-centered outcomes using LLMs for Named Entity Recognition on synthetic datasets. Collaboration with UCSF and Kaiser Permanente.</p>
        </div>
        <div class="research-role">
          <div class="role-header">
            <span class="role-title">Fung Fellow</span>
            <span class="role-date">Aug&ndash;Dec 2024</span>
          </div>
          <span class="role-org">Fung Institute for Engineering Leadership &middot; UC Berkeley</span>
          <p>Partnered with Reclaim Our Power to develop an interactive GIS-based virtual resource addressing high utility costs and environmental dangers by PG&amp;E. Built dynamic visualizations using ArcGIS software.</p>
        </div>
        <div class="research-role">
          <div class="role-header">
            <span class="role-title">Research Assistant</span>
            <span class="role-date">Sep&ndash;Dec 2022</span>
          </div>
          <span class="role-org">Trademark Rebranding Project &middot; UC Berkeley</span>
          <p>Synthesized 12-column data on why public companies choose to rebrand from 3,000 articles over 20 years. Conducted NLP analysis on 150+ articles to determine rebranding motives.</p>
        </div>
        <div class="research-role">
          <div class="role-header">
            <span class="role-title">Research Assistant</span>
            <span class="role-date">Jan&ndash;May 2022</span>
          </div>
          <span class="role-org">Micro Lab &middot; Haas Business School, UC Berkeley</span>
          <p>Examined online vs. in-person interaction, nonverbal detection of racial bias, and the tendency to delay gratification. Coded nonverbal behaviors for Dr. Dana Carney; conducted preliminary literature reviews on power and stress.</p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Open in browser and verify**

Open `index.html`. Expected: research section appears below hero with two large cards and four smaller role entries.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add index.html
git commit -m "feat: add Research & Patents section HTML"
```

---

### Task 4: Build HTML — Experience section

**Files:**
- Modify: `index.html` (replace Experience placeholder)

- [ ] **Step 1: Replace the experience placeholder**

Replace:
```html
  <!-- EXPERIENCE placeholder -->
  <section id="experience" class="section fade-in">
    <!-- Task 4 -->
  </section>
```

With:
```html
  <!-- EXPERIENCE -->
  <section id="experience" class="section fade-in">
    <div class="section-inner">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="job-title">Machine Learning Engineer Intern</h3>
                <span class="job-org">American Express</span>
              </div>
              <span class="job-date">Jun&ndash;Aug 2024</span>
            </div>
            <ul>
              <li>Conditioned 1.5 years of Slack messages for an intent classification model on Google Cloud Platform. Trained a Multinomial Naive Bayes model and fine-tuned hyperparameters to improve accuracy from <strong>22% to 61%</strong>.</li>
              <li>Built training dataset of 120 keyword-intent pairs from scratch; verified results using K-Fold Cross Validation.</li>
              <li>Presented findings to SVP-level audience; later presented a poster at the 2024 SEED Scholars Research Symposium.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="job-title">Founder &amp; CEO</h3>
                <span class="job-org">AIMarchAssist</span>
              </div>
              <span class="job-date">Aug 2023&ndash;Present</span>
            </div>
            <ul>
              <li>Led team of 2 to develop patented marching band technology. Selected as 1 of 22 out of 150 for Berkeley's Student Entrepreneurship Program.</li>
              <li>Calculated TAM and SAM; conducted 50+ customer interviews by cold-emailing student groups and band directors.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="job-title">Data Scientist Intern</h3>
                <span class="job-org">American Express</span>
              </div>
              <span class="job-date">Jun&ndash;Aug 2023</span>
            </div>
            <ul>
              <li>Synthesized 4 years of user feedback from an internal Slack channel to consolidate pain points for the Cornerstone Interactive Analytics platform.</li>
              <li>Designed a lexicon-based sentiment analysis algorithm using NLTK's Vader — Bag of Words model across <strong>20,000 lines</strong> of feedback, surfacing accurate sentiment scores and word frequencies for 14 Product Managers.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="job-title">Product Management Intern</h3>
                <span class="job-org">You.com</span>
              </div>
              <span class="job-date">Jun&ndash;Aug 2022</span>
            </div>
            <ul>
              <li>Managed and modernized the Social Search feature of a privacy-based LLM aggregator. Made 15–20 feature enhancements based on 50+ user interviews.</li>
              <li>Increased Social Search traffic by <strong>159% in 2 months</strong>. Presented to C-suite and implemented executive feedback directly.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
```

- [ ] **Step 2: Open in browser and verify**

Expected: four timeline entries appear in chronological-descending order with dots and clean layout.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add index.html
git commit -m "feat: add Experience section HTML"
```

---

### Task 5: Build HTML — Education section

**Files:**
- Modify: `index.html` (replace Education placeholder)

- [ ] **Step 1: Replace the education placeholder**

Replace:
```html
  <!-- EDUCATION placeholder -->
  <section id="education" class="section fade-in">
    <!-- Task 5 -->
  </section>
```

With:
```html
  <!-- EDUCATION -->
  <section id="education" class="section fade-in">
    <div class="section-inner">
      <h2 class="section-title">Education</h2>
      <div class="edu-grid">

        <div class="edu-card">
          <div class="edu-header">
            <h3>University of Texas at Austin</h3>
            <span class="edu-date">2025&ndash;Present</span>
          </div>
          <p class="edu-degree">M.S. in Computer Science</p>
          <p class="edu-detail">College of Natural Sciences &middot; Thesis Advisor: Dr. Risto Miikkulainen</p>
          <p class="edu-label">Coursework</p>
          <p class="edu-courses">Generative Models &middot; Databases and LLMs &middot; Machine Learning on Real World Networks &middot; Grounded NLP &middot; Distributed Computing</p>
        </div>

        <div class="edu-card">
          <div class="edu-header">
            <h3>University of California, Berkeley</h3>
            <span class="edu-date">Class of 2025</span>
          </div>
          <p class="edu-degree">B.A. in Data Science</p>
          <p class="edu-detail">College of Computing, Data Science, and Society &middot; SEED Scholars Honors Program &middot; Minor in Science, Technology, &amp; Society &middot; Certificate in Entrepreneurship and Technology (Sutardja Center)</p>
          <p class="edu-label">Coursework</p>
          <p class="edu-courses">Data Engineering &middot; Inferencing, Modeling &amp; Decision Making &middot; Probability for DS &middot; Data Structures &amp; Algorithms</p>
        </div>

      </div>
    </div>
  </section>
```

- [ ] **Step 2: Verify in browser**

Expected: two education cards side by side, both legible with degree, school, and coursework.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add index.html
git commit -m "feat: add Education section HTML"
```

---

### Task 6: Build HTML — Leadership section

**Files:**
- Modify: `index.html` (replace Leadership placeholder)

- [ ] **Step 1: Replace the leadership placeholder**

Replace:
```html
  <!-- LEADERSHIP placeholder -->
  <section id="leadership" class="section fade-in">
    <!-- Task 6 -->
  </section>
```

With:
```html
  <!-- LEADERSHIP -->
  <section id="leadership" class="section fade-in">
    <div class="section-inner">
      <h2 class="section-title">Leadership</h2>
      <div class="leadership-grid">

        <div class="leadership-card">
          <div class="leadership-header">
            <h3>Incoming Co-President</h3>
            <span class="leadership-date">Aug 2025&ndash;Present</span>
          </div>
          <span class="leadership-org">UT Graduate Representative Association of CS (GRACS)</span>
          <p>Elected Co-President for Fall 2026. Previously First Year Liaison Officer. Created UTCoffeeChat, a mentorship platform for MS/PhD students. Conducted climate survey presented to Dr. Peter Stone.</p>
        </div>

        <div class="leadership-card">
          <div class="leadership-header">
            <h3>Operations Manager &amp; Teaching Assistant</h3>
            <span class="leadership-date">Aug 2024&ndash;May 2025</span>
          </div>
          <span class="leadership-org">Sutardja Center for Entrepreneurship and Technology &middot; UC Berkeley</span>
          <p>Coordinated workshops for SCET Innovators in Residence as Peer Startup Coach. Taught 13 students at the Startup Ideation &amp; Ecosystems Workshop; designed curriculum from scratch. Workshops consistently ranked most enjoyed activity.</p>
        </div>

        <div class="leadership-card">
          <div class="leadership-header">
            <h3>Senior Mentor</h3>
            <span class="leadership-date">Aug 2022&ndash;May 2025</span>
          </div>
          <span class="leadership-org">Berkeley Mentorship Cohort</span>
          <p>Mentored 2 freshmen per year for 3 years with individualized support on academics, research, and internships. Held weekly one-on-ones; received the Community Award (1 of 95 mentors) in 2023.</p>
        </div>

        <div class="leadership-card">
          <div class="leadership-header">
            <h3>Senior Member</h3>
            <span class="leadership-date">Aug 2023&ndash;May 2025</span>
          </div>
          <span class="leadership-org">CDSS Undergraduate Student Advisory Board &middot; UC Berkeley</span>
          <p>Appointed to the new College of CDSS's advisory board. Planned orientation activities and pitched a college-wide mentorship program for incoming students.</p>
        </div>

        <div class="leadership-card">
          <div class="leadership-header">
            <h3>Competitive Member</h3>
            <span class="leadership-date">Aug 2022&ndash;Jul 2025</span>
          </div>
          <span class="leadership-org">Cal Equestrian Team</span>
          <p>Mentored new riders; placed 3rd out of 11 at UC Santa Cruz IHSA competition (Nov 2024). Cal Equestrian received Reserve Champion at Fall 2022 and 2024 competitions. Completed a month-long training program in Córdoba, Argentina (Jul 2025), placing 3rd out of 15.</p>
        </div>

      </div>
    </div>
  </section>
```

- [ ] **Step 2: Verify in browser**

Expected: five leadership cards in a 2-across grid, all with org, role, dates, and description.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add index.html
git commit -m "feat: add Leadership section HTML"
```

---

### Task 7: Build HTML — Honors & Awards, Skills & Interests, and Footer

**Files:**
- Modify: `index.html` (replace Honors, Skills, Footer placeholders)

- [ ] **Step 1: Replace the Honors placeholder**

Replace:
```html
  <!-- HONORS placeholder -->
  <section id="honors" class="section fade-in">
    <!-- Task 7 -->
  </section>
```

With:
```html
  <!-- HONORS & AWARDS -->
  <section id="honors" class="section fade-in">
    <div class="section-inner">
      <h2 class="section-title">Honors &amp; Awards</h2>
      <div class="honors-list">

        <div class="honor-item">
          <div class="honor-header">
            <h3>SEED Scholar</h3>
            <span class="honor-date">Jul 2021&ndash;May 2025</span>
          </div>
          <span class="honor-org">STEM Excellence Through Equity and Diversity Honors Program &middot; UC Berkeley</span>
          <p>Engaged in a 6-week Summer Rising program covering Data Science, Algebra, Psychology, and Biology. Fostered collaboration with 25 scholars on DE&amp;I in STEM.</p>
        </div>

        <div class="honor-item">
          <div class="honor-header">
            <h3>Most Promising Innovation Award</h3>
            <span class="honor-date">May 2024</span>
          </div>
          <span class="honor-org">Designing Startups to Transform Society Pitch Competition &middot; UC Berkeley</span>
          <p>Collaborated with a team of 5 to conceptualize a personal data tracking app, validated through 30+ customer interviews. Received the Most Promising Innovation Award out of 13 teams.</p>
        </div>

        <div class="honor-item">
          <div class="honor-header">
            <h3>Community Award</h3>
            <span class="honor-date">Apr 2023</span>
          </div>
          <span class="honor-org">Berkeley Mentorship Cohort</span>
          <p>Awarded to 1 out of 95 mentors for an extraordinary demonstration of equity and inclusion values. Presented by Dean Tsu-Jae King Liu. Nominated by a mentee.</p>
        </div>

      </div>
    </div>
  </section>
```

- [ ] **Step 2: Replace the Skills placeholder**

Replace:
```html
  <!-- SKILLS placeholder -->
  <section id="skills" class="section fade-in">
    <!-- Task 8 -->
  </section>
```

With:
```html
  <!-- SKILLS & INTERESTS -->
  <section id="skills" class="section fade-in">
    <div class="section-inner">
      <h2 class="section-title">Skills &amp; Interests</h2>

      <div class="skills-block">
        <h3 class="skills-label">Technical</h3>
        <div class="pills pills-accent">
          <span class="pill">Python</span>
          <span class="pill">SQL</span>
          <span class="pill">Java</span>
          <span class="pill">MongoDB</span>
          <span class="pill">Git</span>
          <span class="pill">NumPy</span>
          <span class="pill">SciPy</span>
          <span class="pill">Matplotlib</span>
          <span class="pill">Scikit-Learn</span>
          <span class="pill">NLTK</span>
          <span class="pill">SpaCy</span>
        </div>
      </div>

      <div class="skills-block">
        <h3 class="skills-label">Languages</h3>
        <div class="pills pills-sand">
          <span class="pill">Nepali</span>
          <span class="pill">Spanish</span>
          <span class="pill">Hindi</span>
          <span class="pill">Gujarati</span>
        </div>
      </div>

      <div class="skills-block">
        <h3 class="skills-label">Interests</h3>
        <p class="interests-text">Flute &middot; Reading &middot; Aviation &middot; Photography &middot; Live Music &middot; Cooking &middot; Traveling</p>
      </div>

    </div>
  </section>
```

- [ ] **Step 3: Replace the Footer placeholder**

Replace:
```html
  <!-- FOOTER placeholder -->
  <footer id="footer">
    <!-- Task 8 -->
  </footer>
```

With:
```html
  <!-- FOOTER -->
  <footer id="footer">
    <div class="footer-inner">
      <div class="footer-links">
        <a href="mailto:pallavi.desai@utexas.edu">pallavi.desai@utexas.edu</a>
        <a href="https://www.linkedin.com/in/pallavi-desai25/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/pallavi-desai1" target="_blank" rel="noopener">GitHub</a>
      </div>
      <p class="footer-copy">&copy; 2026 Pallavi Desai</p>
    </div>
  </footer>
```

- [ ] **Step 4: Verify all sections in browser**

Open `index.html`. Scroll through the full page. Expected: all sections present — hero, research, experience, education, leadership, honors, skills, footer — all rendering as unstyled HTML (styling comes next).

- [ ] **Step 5: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add index.html
git commit -m "feat: add Honors, Skills, and Footer HTML"
```

---

### Task 8: Write CSS — foundation, reset, variables, typography

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Write the full CSS foundation**

Replace the contents of `style.css` with:

```css
/* =====================
   CSS CUSTOM PROPERTIES
   ===================== */
:root {
  --bg: #FAF7F2;
  --bg-alt: #EDE8DF;
  --accent: #C4714F;
  --accent-light: #E8A98A;
  --text: #2C2C2C;
  --text-muted: #6B6560;
  --white: #FFFFFF;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --radius: 12px;
  --shadow: 0 4px 20px rgba(44, 44, 44, 0.08);
  --shadow-hover: 0 8px 32px rgba(44, 44, 44, 0.14);
  --max-width: 1100px;
  --section-padding: 5rem 1.5rem;
}

/* =====================
   RESET
   ===================== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

/* =====================
   TYPOGRAPHY
   ===================== */
h1, h2, h3 {
  font-family: var(--font-serif);
  line-height: 1.2;
  color: var(--text);
}

h1 { font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 700; }
h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 600; }
h3 { font-size: 1.15rem; font-weight: 600; }

p { margin-bottom: 0.75rem; }
p:last-child { margin-bottom: 0; }

/* =====================
   LAYOUT UTILITIES
   ===================== */
.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.section {
  padding: var(--section-padding);
}

.section:nth-child(even) {
  background: var(--bg-alt);
}

.section-title {
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  display: block;
  width: 48px;
  height: 3px;
  background: var(--accent);
  margin-top: 0.5rem;
  border-radius: 2px;
}

.subsection-title {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--text-muted);
  margin: 2.5rem 0 1.25rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

/* =====================
   FADE-IN ON SCROLL
   ===================== */
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: none;
}
```

- [ ] **Step 2: Verify in browser**

Refresh `index.html`. Expected: page now has the cream background, proper font (Playfair Display for headings, Inter for body), and overall cleaner text layout. Sections may still be unstyled but readable.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add style.css
git commit -m "feat: add CSS foundation, reset, variables, and typography"
```

---

### Task 9: Write CSS — Nav and Hero

**Files:**
- Modify: `style.css` (append to end of file)

- [ ] **Step 1: Append nav and hero CSS**

Append to `style.css`:

```css
/* =====================
   NAV
   ===================== */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 1.5rem;
  transition: background 0.3s, box-shadow 0.3s;
}

#navbar.scrolled {
  background: var(--bg);
  box-shadow: 0 2px 12px rgba(44, 44, 44, 0.08);
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-name {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: 0.01em;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
  border-bottom-color: var(--accent);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s;
}

/* =====================
   HERO
   ===================== */
.hero {
  padding: 7rem 1.5rem 5rem;
  background: var(--bg);
}

.hero-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-photo img {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  aspect-ratio: 3/4;
  object-fit: cover;
  object-position: top;
}

.hero-content h1 {
  margin-bottom: 0.5rem;
}

.tagline {
  color: var(--accent);
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 1.25rem;
  letter-spacing: 0.01em;
}

.bio {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 1.75rem;
  max-width: 520px;
}

.hero-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text);
  border: 1.5px solid var(--bg-alt);
  border-radius: 6px;
  padding: 0.45rem 0.9rem;
  background: var(--white);
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.hero-link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.cv-button {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
}

.cv-button:hover {
  background: #a85c3d;
  border-color: #a85c3d;
  color: var(--white);
}
```

- [ ] **Step 2: Verify in browser**

Refresh `index.html`. Expected: sticky nav visible at top, hero shows photo on left and text/links on right, CV button terracotta-colored.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add style.css
git commit -m "feat: add nav and hero CSS"
```

---

### Task 10: Write CSS — Research, Experience, Education

**Files:**
- Modify: `style.css` (append to end of file)

- [ ] **Step 1: Append research, experience, education CSS**

Append to `style.css`:

```css
/* =====================
   RESEARCH & PATENTS
   ===================== */
.featured-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.featured-card {
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
}

.featured-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

.card-accent {
  width: 5px;
  background: var(--accent);
  flex-shrink: 0;
}

.featured-card .card-body {
  padding: 1.75rem;
}

.card-label {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

.featured-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.card-meta {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: 0.75rem;
}

.research-roles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.research-role {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.25rem 1.5rem;
  box-shadow: var(--shadow);
}

.role-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
}

.role-title {
  font-weight: 600;
  font-size: 0.95rem;
}

.role-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.role-org {
  display: block;
  font-size: 0.82rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.research-role p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* =====================
   EXPERIENCE
   ===================== */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--bg-alt);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg);
  box-shadow: 0 0 0 2px var(--accent);
}

.timeline-content {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.5rem 1.75rem;
  box-shadow: var(--shadow);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.job-title {
  font-size: 1.05rem;
  margin-bottom: 0.15rem;
}

.job-org {
  display: block;
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 500;
}

.job-date {
  font-size: 0.82rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.timeline-content ul {
  list-style: disc;
  padding-left: 1.25rem;
}

.timeline-content li {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 0.4rem;
}

.timeline-content li:last-child { margin-bottom: 0; }

/* =====================
   EDUCATION
   ===================== */
.edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.edu-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.75rem;
  box-shadow: var(--shadow);
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}

.edu-header h3 { font-size: 1.05rem; }

.edu-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.edu-degree {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.edu-detail {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.edu-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
}

.edu-courses {
  font-size: 0.85rem;
  color: var(--text);
  line-height: 1.6;
}
```

- [ ] **Step 2: Verify in browser**

Refresh. Expected: research cards with terracotta left bar, experience timeline with dots and cards, education side by side.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add style.css
git commit -m "feat: add Research, Experience, and Education CSS"
```

---

### Task 11: Write CSS — Leadership, Honors, Skills, Footer

**Files:**
- Modify: `style.css` (append to end of file)

- [ ] **Step 1: Append leadership, honors, skills, footer CSS**

Append to `style.css`:

```css
/* =====================
   LEADERSHIP
   ===================== */
.leadership-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.leadership-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.leadership-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
}

.leadership-header h3 { font-size: 1rem; }

.leadership-date {
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.leadership-org {
  display: block;
  font-size: 0.82rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.leadership-card p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* =====================
   HONORS & AWARDS
   ===================== */
.honors-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.honor-item {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.5rem 1.75rem;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--accent-light);
}

.honor-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
}

.honor-header h3 { font-size: 1.05rem; }

.honor-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.honor-org {
  display: block;
  font-size: 0.82rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.honor-item p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* =====================
   SKILLS & INTERESTS
   ===================== */
.skills-block {
  margin-bottom: 1.75rem;
}

.skills-block:last-child { margin-bottom: 0; }

.skills-label {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pill {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
}

.pills-accent .pill {
  background: #F5E8E2;
  color: var(--accent);
}

.pills-sand .pill {
  background: var(--bg-alt);
  color: var(--text);
}

.interests-text {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* =====================
   FOOTER
   ===================== */
#footer {
  background: var(--text);
  color: rgba(255,255,255,0.6);
  padding: 3rem 1.5rem;
  text-align: center;
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.footer-links a {
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--accent-light);
}

.footer-copy {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
}
```

- [ ] **Step 2: Verify full page in browser**

Refresh and scroll through the whole page. Expected: all sections styled, cards have shadows, pills colored, footer dark with light links.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add style.css
git commit -m "feat: add Leadership, Honors, Skills, and Footer CSS"
```

---

### Task 12: Write CSS — Mobile responsive

**Files:**
- Modify: `style.css` (append to end of file)

- [ ] **Step 1: Append responsive CSS**

Append to `style.css`:

```css
/* =====================
   RESPONSIVE
   ===================== */
@media (max-width: 768px) {
  :root {
    --section-padding: 3rem 1.25rem;
  }

  /* Nav hamburger */
  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--bg);
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.25rem;
    box-shadow: 0 8px 24px rgba(44,44,44,0.1);
    border-top: 1px solid var(--bg-alt);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    font-size: 1rem;
  }

  /* Hero stacks */
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-photo img {
    max-width: 260px;
    margin: 0 auto;
    aspect-ratio: 1/1;
  }

  .bio {
    margin: 0 auto 1.75rem;
  }

  .hero-links {
    justify-content: center;
  }

  /* Research */
  .featured-cards,
  .research-roles {
    grid-template-columns: 1fr;
  }

  /* Education */
  .edu-grid {
    grid-template-columns: 1fr;
  }

  /* Leadership */
  .leadership-grid {
    grid-template-columns: 1fr;
  }

  /* Timeline */
  .timeline-header {
    flex-direction: column;
    gap: 0.25rem;
  }
}
```

- [ ] **Step 2: Verify on mobile viewport**

Open browser DevTools → toggle device toolbar → set to iPhone SE (375px wide). Expected: hero stacks, nav shows hamburger, all grids go single-column.

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add style.css
git commit -m "feat: add mobile responsive CSS"
```

---

### Task 13: Write JavaScript — smooth scroll, scroll-spy, fade-in, hamburger

**Files:**
- Modify: `script.js`

- [ ] **Step 1: Write the full script.js**

Replace `script.js` with:

```js
document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky nav background ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // --- Hamburger menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // --- Smooth scroll (handles nav links + any href="#...") ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // --- Active nav highlight on scroll (scroll-spy) ---
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navAnchorMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    navAnchorMap[a.getAttribute('href').slice(1)] = a;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Object.values(navAnchorMap).forEach(a => a.classList.remove('active'));
        const a = navAnchorMap[entry.target.id];
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));

  // --- Fade-in on scroll ---
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

});
```

- [ ] **Step 2: Verify interactions in browser**

Refresh `index.html`. Check:
- Scrolling past 20px adds cream background to nav
- Clicking a nav link scrolls smoothly to that section
- Nav link for visible section gets terracotta underline
- Sections fade in as you scroll down
- On mobile (DevTools): hamburger opens/closes the nav menu

- [ ] **Step 3: Commit**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add script.js
git commit -m "feat: add smooth scroll, scroll-spy, fade-in, and hamburger JS"
```

---

### Task 14: Final check and GitHub Pages deployment prep

**Files:**
- No new files — verify and push

- [ ] **Step 1: Check the GitHub username in hero links**

Open `index.html` and confirm the GitHub URL is correct. If Pallavi's GitHub username is not `pallavi-desai1`, update both the hero link and footer link:

```html
<!-- Hero -->
<a href="https://github.com/YOUR_USERNAME" ...>GitHub</a>

<!-- Footer -->
<a href="https://github.com/YOUR_USERNAME" ...>GitHub</a>
```

- [ ] **Step 2: Replace the cv.pdf placeholder with the real CV**

Copy the actual CV PDF into assets:

```bash
cp "/path/to/real/cv.pdf" "/Users/pallavidesai/Desktop/Important Documents/website/assets/cv.pdf"
```

If not ready yet, leave the placeholder — the button will still render, just won't download anything meaningful.

- [ ] **Step 3: Full visual review**

Open `index.html` locally and scroll through the entire page. Verify:
- [ ] Nav sticky and scroll-spy working
- [ ] Hero photo and CV button visible
- [ ] Research cards lift on hover
- [ ] Timeline dots aligned
- [ ] Education cards side by side
- [ ] Leadership 2-across grid
- [ ] Honors with terracotta left bar
- [ ] Skills pills colored correctly
- [ ] Footer links work (email, LinkedIn, GitHub)
- [ ] Mobile: switch DevTools to 375px and verify stacked layout + hamburger

- [ ] **Step 4: Add .nojekyll file** (required for GitHub Pages to serve CSS/JS correctly)

```bash
touch "/Users/pallavidesai/Desktop/Important Documents/website/.nojekyll"
```

- [ ] **Step 5: Commit and push**

```bash
cd "/Users/pallavidesai/Desktop/Important Documents/website"
git add .nojekyll assets/cv.pdf
git commit -m "chore: add .nojekyll and finalize for GitHub Pages deployment"
git push origin main
```

- [ ] **Step 6: Verify on GitHub Pages**

After pushing, go to the repository Settings → Pages → ensure source is set to `main` branch, root directory. The site will be live at `https://pallavi-desai1.github.io` within ~2 minutes.
