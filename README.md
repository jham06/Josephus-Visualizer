# ⚔️ Josephus Problem Visualizer

An interactive visualization of the Josephus Problem built in pair with React, Vite, and CSS styling.

## 🔗 Live Demo
https://josephus-visualizer-qani.vercel.app/
<img width="850" height="800" alt="image" src="https://github.com/user-attachments/assets/ea8c8402-ac9d-484e-8c6b-a0e4eae4980b" />

## What is the Josephus Problem?
The idea was originally inspired by the famous Flavious Josephus, a 1st century Jewish historian and military leader. 
The legend tells us he and his 40 soldiers were trapped in a cave by Roman soldiers. To avoid Roman captivity as they preferred mass suicide, the soldiers formed a circle and agreed to kill every third remaining person (k = 3) until no one was left. Josephus, who preferred to live, used this mathematical logic to calculate the last two remaining positions in a way such that it allowed both him and a companion to survive, who would eventually surrender.

## Features:
- Set any number of people (N) and steps (K)
- Step through eliminations one at a time if the user wishes
- Auto-play feature with adjustable speed (shifting left implies higher speed which is a minimum of 700ms, and shifting right implies slower speed which is a maximum of 2200ms)
- Alternating glowing green/red circle visualization, and heart/skull emojis that highlights survivng and deceased soldiers.
- Announcement of survivor when last person standing remains'

## Restriction:
- The number of people and steps have a minimum of 2, and a maximum of 50. This is mainly due to performance issues, as it would be hard to visualize 50000 people in a small radius of a circle.
   - ~~Why not only one person? Personally, I don't know, maybe there once existed a soldier who preferred to be enslaved by the Romans!~~

## Tech Stack Used
- React ⚛
- Vite <img width="20" height="20" alt="vite (1)" src="https://github.com/user-attachments/assets/b3226187-394f-4bb4-a0fe-275698973a13" />
- CSS3 🎨

## To run this locally, the following pre-requesite and steps are needed.

### Pre-reqs:
- Node.js installed in device 

### Step by Step:
1. Clone the following repository:
   git clone https://github.com/jham06/josephus-visualizer.git

2. Navigate into the project folder:
   cd josephus-visualizer

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open browser and go to:
   http://localhost:5173

