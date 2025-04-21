
Keep it modular, readable, and easy to plug-n-play.

---

## ✅ Contribution Rules

### 🔨 Adding a New Component

- Create a new folder inside `components/` using **PascalCase**.
  - Example: `components/FadeInSection/FadeInSection.js`
- Include an `index.js` to export the component.
- Stick to functional components written in **JavaScript (not TypeScript)**.
- Local styling only (CSS modules, inline styles, Tailwind — up to you).
- Keep the component **self-contained and reusable**.
- Use descriptive names and **avoid hardcoded logic**.

### 🔁 Updating an Existing Component

You can update a component **if you’re improving it**, not just tweaking style.

- Valid reasons: bug fix, optimization, adding optional props.
- Don’t change core behavior unless needed.
- Leave clear comments and meaningful commit messages.
- One component = one PR. Keep it focused.

---

## ❌ Don’ts

- ❌ No TypeScript files.
- ❌ No `src/` directory.
- ❌ No combining multiple components in one folder.
- ❌ No broken or demo code.
- ❌ No global CSS unless required.
- ❌ Don’t change others' code just for preference.

---

## 🚀 How to Contribute

1. **Fork** this repo
2. Clone it to your machine
3. Make a new branch:  
   `git checkout -b my-new-component`
4. Add your component to the `components/` folder
5. Commit with a clear message:  
   `git commit -m "Add SlideInCard component"`
6. Push your branch:  
   `git push origin my-new-component`
7. Open a **Pull Request**

---

## 🤝 Dev Vibes

This is a shared codebase. Write like someone else will use your component tomorrow.  
Be clean, be kind, and keep it flexible.

---

## 👨‍💻 Author

**Maintained by [@Vishal Ravanank](https://www.linkedin.com/in/vishal-ravanank/)**  
Full-stack dev, UI nerd, and always down to build clean, useful stuff for the community.

---

## 📄 License

MIT — Use it, remix it, share it. Just don’t be a gatekeeping dev.

---

## ⭐ Support the Repo

If this helps you:
- Star the repo
- Share it with your team
- Drop a component in and help it grow

Let’s build a killer stash of React + Next.js components together.
