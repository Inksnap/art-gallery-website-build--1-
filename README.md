This folder contains a plain HTML/CSS/JS version of the Artivio site.

Files:
- index.html — single-page static site
- styles.css — styles
- app.js — data and behavior (gallery, lightbox, contact form)

To preview locally:

Using a simple static server (recommended):

For Node (http-server):

```bash
npx http-server ./plain-site -c-1
```

Or using Python 3 built-in server:

```bash
cd plain-site
python -m http.server 8000
```

Then open http://localhost:8080 (http-server) or http://localhost:8000 (python) in your browser.
