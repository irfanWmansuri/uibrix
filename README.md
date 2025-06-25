# ⚛️ React + Next.js Components Library

Welcome to the **React + Next.js Components Library** — a growing collection of clean, reusable, plug-and-play components designed for modern web apps.

> This is *not* an NPM package. It's a source-code-first project. Grab the components you need or contribute your own. Devs helping devs, open-source style. ✌️

---

## 📁 Project Structure

All components live under the top-level `components/` directory.\
Each component resides in its own folder using **PascalCase** naming convention:

```

components/
   FadeInSection/
  │   ├── FadeInSection.js
  │   └── index.js

```

> 🧠 Tip: Keep each component self-contained, readable, and ready to drop into any React or Next.js app.

---

## ✅ Contribution Guidelines

We’re open to community contributions — whether it’s new components, improvements, or optimizations. Please follow these rules to keep the repo clean and collaborative.

### 🌿 Branching Strategy

Use descriptive branch names:

- `feature/<component-name>`
- `bugfix/<component-name>`
- `hotfix/<description>`

Example:

```bash
git checkout -b feature/SlideInCard
```

---

### 👨‍💻 Adding a New Component

1. Create a new folder in `components/` named in PascalCase.
2. Add your main component file (`ComponentName.js`).
3. Add an `index.js` to export the component cleanly.
4. Write **functional components** in **JavaScript only**.
5. Use local styles (CSS Modules, Tailwind, or inline styles).
6. Ensure the component is **reusable**, with flexible props.
7. Add default values and avoid hardcoded logic.

**Example structure:**

```
components/
  └── SlideInCard/
      ├── SlideInCard.js
      └── index.js
```

---

### ♻️ Updating an Existing Component

Valid updates include:

- Fixing bugs
- Improving performance
- Adding optional props

> 🔒 Please avoid changing core behavior unless it’s necessary.

- Leave helpful code comments
- Use meaningful commit messages
- **One component per PR**

---

## 🚫 What *Not* To Do

- ❌ No TypeScript
- ❌ No `src/` directory
- ❌ No bundling multiple components in a single folder
- ❌ No demo/broken/incomplete code
- ❌ No global CSS (unless necessary)
- ❌ Don’t change others' code without a valid reason

---

## 🚀 How to Contribute

1. **Fork** this repo
2. Clone your fork
3. Create a new branch:
   ```bash
   git checkout -b feature/YourComponent
   ```
4. Add your component inside `components/`
5. Commit your changes:
   ```bash
   git commit -m "Add <ComponentName> component"
   ```
6. Push your branch:
   ```bash
   git push origin feature/YourComponent
   ```
7. Submit a **Pull Request**

> We’ll review your PR and suggest improvements if needed. Once merged, your component becomes part of the library!

---

## 🤝 Open Source Culture

This is a **developer-first project**. Build like someone else will use your component tomorrow.\
Write clean code. Name things clearly. Keep it flexible and maintainable.

---

## 👨‍💼 Maintainer

**Vishal Ravanank**\
[LinkedIn](https://www.linkedin.com/in/vishal-ravanank/)\
Full-stack developer | UI enthusiast | Community builder

---

## 📄 License

**MIT License** — Free to use, remix, and share.\
Let’s grow this stash of quality components together, minus the gatekeeping. 💯

---

## ⭐ Support This Project

If this library helps you:

- 🌟 Star the repo
- 📣 Share it with your dev circle
- 📥 Submit a component or improvement

---

Let’s build a go-to stash of React + Next.js components for the community.\
Clean. Modular. Open-source. 🔥