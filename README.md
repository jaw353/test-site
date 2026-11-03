# Water Quest — final charity: water game

A self-contained browser game inspired by charity: water's mission. This is an independent student project, not an official product or fundraiser.

## Play
When GitHub Pages is configured for the `final-game` branch, the public site is:
https://jaw353.github.io/test-site/

## Run locally
Download the repository and open `index.html` in any modern browser. There is no build step or package installation.

## Gameplay
- Easy: 45 seconds, 80 points, 1050 ms target interval, 82% clean-water chance, 5-point polluted-water penalty.
- Normal: 30 seconds, 100 points, 820 ms target interval, 76% clean-water chance, 10-point penalty.
- Hard: 25 seconds, 150 points, 620 ms target interval, 68% clean-water chance, 15-point penalty.
- Click clean water for +10; polluted water deducts the selected mode penalty.
- Timed rounds, reset, locally stored best score, milestone messages, browser-generated sound effects, and win confetti.
- Sound can be muted.

## Files
- `index.html` — page structure, game area, impact section, and links.
- `styles.css` — responsive visual design, typography, and motion handling.
- `game.js` — game state, scoring, difficulty, timer, milestones, sound, and celebration.
- `reflection-answers.md` — final project reflections.

## GitHub Pages deployment
In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select branch **final-game** and folder **/(root)**, then save. This publishes the files directly from this GitHub repository. No external hosting service is used.

The previous `main` branch contains the earlier prototype and is kept unchanged.

## Branding and transparency
The palette is inspired by charity: water's recognizable yellow and clean-water imagery. Montserrat and DM Sans fonts are paired with Avenir/Proxima-style system fallbacks. The footer links to charity: water's official website and donation page. Water Quest is not an official charity: water game and no donations are collected here.

## Accessibility
Native buttons and form controls, keyboard operation, live regions for status and milestones, visible focus styles, and reduced-motion support.
