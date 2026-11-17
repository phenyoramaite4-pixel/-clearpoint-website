# Clearpoint Technologies website

A responsive one-page business website for Clearpoint Technologies, built with plain HTML, CSS and JavaScript. There is no build step and no animation.

## Structure

```
index.html   Page content and inline SVG illustrations
style.css    Styles (Frost Steel palette, Inter, light and dark mode)
script.js    Contact form: opens the visitor's email app with the request filled in
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Before going live

- Replace the placeholder email `hello@your-domain.com` in `index.html` (contact section and footer) and in `script.js`.
- Add real founder names and photos to the Team section.
- Swap the concept illustrations in "What we can build for you" for real project screenshots once they exist.

## Deploy with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open Settings, then Pages.
3. Under Build and deployment, choose "Deploy from a branch", select `main` and the `/ (root)` folder, then save.

## Push to GitHub

```
git init
git add .
git commit -m "Add Clearpoint Technologies website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/clearpoint-website.git
git push -u origin main
```

## Brand

- Slate `#334155`, Sky Blue `#0EA5E9`, Cloud `#F8FAFC`, Midnight `#0F172A`
- Typeface: Inter (loaded from Google Fonts)
