# Final charity: water Game — Reflection

## Final prototype URL
https://jaw353.github.io/test-site/

## Repository
https://github.com/jaw353/test-site/tree/final-game

## Difficulty modes
Easy: 45 seconds, an 80-point goal, slower 1050 ms target changes, 82% chance of a clean-water target, and a 5-point polluted-water penalty.
Normal: 30 seconds, a 100-point goal, 820 ms target changes, 76% clean-water chance, and a 10-point penalty.
Hard: 25 seconds, a 150-point goal, faster 620 ms target changes, 68% clean-water chance, and a 15-point penalty.
These settings change the win condition, available time, target speed, target probability, and penalty.

## DOM element change/add/remove
The playfield uses nine button elements. JavaScript changes the active button's content, class, accessible label, and disabled state when a target appears. When a player clicks it, the target is cleared and the next target is created in a new position. The score, timer, progress bar, feedback area, and milestone message also update as the game state changes.

## charity: water footer/link section
The footer and impact panel contain working links to https://www.charitywater.org/ and https://www.charitywater.org/donate. The page states that Water Quest is an independent student project and not an official product or fundraiser.

## Brand font usage
The project uses Montserrat and DM Sans with Avenir Next, Avenir, Proxima Nova, and system sans-serif fallbacks. Montserrat is used for headings and score typography, while DM Sans is used for body copy and controls to keep the presentation consistent.

## Optional sound effect
Web Audio API tones play for collecting clean water, hitting polluted water, reaching a milestone, and winning. Players can turn the sound off using the visible Sound on checkbox. Audio is generated in the browser; there are no external audio files.

## Optional milestone tracking
A JavaScript array stores milestone objects at 25, 50, 75, 100, and 150 points. Conditional checks find milestones reached by the current score and a Set prevents the same milestone from triggering more than once in a round. Each milestone changes the icon, title, and supporting message.

## Reflection: Game Iterations
For the final version, I wanted to take the first prototype from a basic click-and-score activity to a more complete experience. The most important improvement was adding difficulty modes that actually change how the game plays. Easy gives the player more time, a lower goal, slower targets, a higher chance of clean water, and a smaller penalty. Hard shortens the round, raises the goal, speeds up the targets, and makes polluted water more costly. I also refined the playfield so targets appear, respond to clicks, and disappear before the next target appears. Milestone messages and sound effects make progress more noticeable and provide feedback beyond the score counter. I added a visible footer with real charity: water links so players can learn more about the mission behind the game. This iteration taught me that finishing a project is not just adding features; it is making each feature clear, consistent, responsive, and useful to the player.

## Reflection: Interview Question
**Tell me about a time you took a project from an initial idea to a finished product.**

I built Water Quest, a browser game inspired by charity: water's clean-water mission. I started with a simple prototype where a player clicked targets to earn points. For the final version, I broke the work into requirements: difficulty settings, clearer target behavior, a footer with working organization links, sound feedback, and milestone tracking. I used HTML for the structure, CSS for the responsive presentation, and JavaScript for the timer, scoring, DOM updates, and conditional milestone logic. I tested the core interactions and kept the project simple to open directly in a browser without a build process. The project demonstrates how I approach a broad idea by dividing it into smaller requirements, prioritizing the player experience, and iterating until the pieces work together.

## Reflection: LinkedIn Post
I’m excited to share the completed version of **Water Quest**, a browser game inspired by charity: water’s mission to bring clean and safe drinking water to communities around the world. 💧

This project started as a score-based prototype and grew into a more complete game with Easy, Normal, and Hard modes, timed challenges, clean-water rewards, polluted-water penalties, milestone messages, sound effects, and a win celebration.

Building it helped me practice how HTML, CSS, and JavaScript work together: HTML creates the structure, CSS makes the experience responsive, and JavaScript manages game state and interactive behavior. I also learned how visual, audio, and written feedback can make a game easier to understand and more engaging.

The final version is hosted directly on GitHub Pages. I’m proud of how much the project developed through iteration, and I’m looking forward to applying these skills to future projects.

#JavaScript #HTML #CSS #WebDevelopment #GameDevelopment #AI #charitywater
