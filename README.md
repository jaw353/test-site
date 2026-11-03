# Water Quest — final charity: water game

A self-contained browser game inspired by charity: water's mission. It is an independent student project, not an official product or fundraiser.

## Play
https://jaw353.github.io/test-site/

## Run locally
Download the repository and open `index.html` in any modern browser. There is no build step or package installation.

## Gameplay
- Easy: 45 seconds, 80 points, 1050 ms target interval, 82% clean target probability, 5-point polluted-water penalty.
- Normal: 30 seconds, 100 points, 820 ms target interval, 76% clean target probability, 10-point penalty.
- Hard: 25 seconds, 150 points, 620 ms target interval, 68% clean target probability, 15-point penalty.
- Click clean water for +10; polluted water deducts the selected mode penalty.
- Timed rounds, reset, locally stored best score, milestone messages, browser-generated sound effects, and win confetti.
- All audio can be muted.

## Files
- index.html — page and links
- styles.css — responsive visual design and typography
- game.js — state, scoring, difficulty, timer, milestones, sound
- .github/workflows/pages.yml — GitHub Pages deployment

## Branding and transparency
Yellow-led palette and clean-water imagery are inspired by charity: water. Montserrat/DM Sans with Avenir/Proxima-style fallbacks provide a consistent sans-serif treatment. Footer links lead to charity: water's official website and donation page. This is not an official charity: water game and no donations are collected here.

## Accessibility
Native buttons and form controls, keyboard operation, live regions for status/milestones, visible focus styles, and reduced-motion support.
