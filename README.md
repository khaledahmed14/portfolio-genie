# PortfolioGenie

تحويل حساب جيت هاب الخاص بك إلى بورتفوليو احترافي في ثوانٍ.

# 🧞‍♂️ PortfolioGenie

> Transform your GitHub profile into a high-impact developer portfolio in seconds.

PortfolioGenie is a web-based platform designed for developers and creatives to seamlessly sync their GitHub profile and public repositories, customize their portfolio sections, arrange layout flow, and instantly generate or deploy a high-performance portfolio.

---

## 🚀 Key Features

1. **Authentication & Onboarding:** Secure sign-in via GitHub OAuth simulation or custom developer credentials.
2. **GitHub Data Fetcher:** Instant synchronization of user repositories, star counts, fork data, followers, and profile metadata.
3. **Information Intake & Bio Editor:** Clean management of professional title, bio, tech stack tags, and social links.
4. **Interactive Customizer (The Builder):** Reorder portfolio sections (Hero, About, Projects, Experience, Skills, Contact), adjust featured project card quantities, and toggle UI elements live.
5. **Multi-Format Export & Deployment:**
   - Single-file HTML/CSS/JS code bundle export.
   - Structured JSON export for Figma integration.
   - Simulated instant deployment with live preview switcher (Desktop / Mobile views).

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Modern CSS (Cyber-Luxury Aesthetic: Matte Black `#030712`, Electric Blue `#2563EB`).
- **Backend (Planned):** Node.js, Express, TypeScript, MongoDB.
- **Tools:** Git & GitHub, Figma (Design System & Product Flow).

---

## 📂 Project Structure

```text
portfolio-genie/
├── client/                     # React Frontend Application
│   ├── src/
│   │   ├── assets/             # SVGs & Visual Assets
│   │   ├── components/         # Reusable Components (Common & Layout)
│   │   ├── pages/              # Core App Pages (Auth, Intake, Builder, Preview)
│   │   ├── services/           # API integrations & data helpers
│   │   └── App.jsx             # Main Router & Step Controller
│   ├── package.json
│   └── vite.config.js
├── server/                     # Backend API & Database (Node/TS/Express)
└── README.md
```
