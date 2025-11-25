import { Project } from './types';

// Importing assets from components/media directory
// Please ensure these files exist in components/media/
import neoImg from './components/media/neo.png';
import solar3dImg from './components/media/3du.png';
import solar2dImg from './components/media/2du.png';
import floodImg from './components/media/flood.png';
import gestureImg from './components/media/3.png';
import chladniImg from './components/media/cp.jpg';

// Video Imports
import chladniVideo from './components/media/chladni_oogway-ascends.mp4';
import neoVideo from './components/media/neo.mp4';
import solar3dVideo from './components/media/3du.mp4';
import gestureVideo from './components/media/gcf.mp4';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Near Earth Objects",
    description: "Explore the fascinating world of near-Earth objects and asteroids in this educational simulation. Learn about their trajectories, compositions, and the potential risks they pose to our planet.",
    role: "Frontend & Simulation",
    year: "2024",
    image: neoImg,
    tags: ["Simulation", "Space", "Education"],
    link: "https://mutasim-rehman.github.io/Near-Earth-Objects/"
  },
  {
    id: '2',
    title: "3D Solar System simulation",
    description: "Experience the solar system like never before in this immersive 3D simulation. Explore planets, moons, and asteroids in a richly detailed environment, all while learning about their unique characteristics.",
    role: "Graphics Engineer",
    year: "2023",
    image: solar3dImg,
    tags: ["Three.js", "WebGL", "Physics"],
    link: "https://mutasim-rehman.github.io/Solar-System/"
  },
  {
    id: '3',
    title: "2D Solar System simulation",
    description: "Explore the wonders of our solar system in this interactive 2D simulation. Navigate through planets, moons, and asteroids while learning about their unique characteristics.",
    role: "Frontend Dev",
    year: "2023",
    image: solar2dImg,
    tags: ["JS", "Educational", "2D"],
    link: "https://mutasim-rehman.github.io/Universe/"
  },
  {
    id: '4',
    title: "Flood Prediction algorithm",
    description: "An end-to-end ML pipeline for flood risk prediction in Pakistan. Automates weather/terrain data collection, engineers time-series & topographical features, and trains an XGBoost model. A CLI runs the modular data, training, and prediction pipeline.",
    role: "Data Scientist",
    year: "2024",
    image: floodImg,
    tags: ["XGBoost", "Python", "Data Pipeline"],
    link: "https://github.com/mutasim-rehman/flood-prediction-project"
  },
  {
    id: '5',
    title: "Gesture-Based Flappy Bird",
    description: "Flap your hand, not just the bird! This version of Flappy Bird replaces keyboard input with live gesture detection, offering a fun and immersive way to play.",
    role: "Game Developer",
    year: "2023",
    image: gestureImg,
    tags: ["OpenCV", "Python", "CV"],
    link: "https://github.com/mutasim-rehman/Gesture-Controlled-Flappy-Bird"
  },
  {
    id: '6',
    title: "Chladni Patterns",
    description: "Explore the mesmerizing world of Chladni patterns in this interactive simulation. Visualize sound vibrations and their intricate patterns as you experiment with different frequencies and materials.",
    role: "Creative Coder",
    year: "2023",
    image: chladniImg,
    tags: ["Physics", "Math", "Visualization"],
    link: "https://github.com/mutasim-rehman/Chladni-patterns"
  }
];

export const CINEMA_PLAYLIST = [
  {
    id: 'chladni',
    title: "The Chladni Resonance",
    description: "Watch as sound transforms into visuals through geometric vibrations in this physics simulation.",
    source: chladniVideo,
    poster: chladniImg,
    duration: "02:14"
  },
  {
    id: 'neo',
    title: "Near Earth Objects",
    description: "A tracking simulation of hazardous asteroids and their celestial trajectories.",
    source: neoVideo,
    poster: neoImg,
    duration: "01:45"
  },
  {
    id: '3du',
    title: "Solar System 3D",
    description: "An immersive three-dimensional voyage through our planetary neighborhood.",
    source: solar3dVideo,
    poster: solar3dImg,
    duration: "03:20"
  },
  {
    id: 'gcf',
    title: "Gesture Flappy Bird",
    description: "Computer vision gameplay allowing hand-movements to control the flight.",
    source: gestureVideo,
    poster: gestureImg,
    duration: "00:58"
  }
];

export const MAIN_COURSE_SKILLS = [
  "Data Science & Analytics",
  "Machine Learning Pipelines",
  "Frontend (React/Vue/Three.js)",
  "Game Development (Unity/C++)",
  "Python & C++ Architecture"
];

export const DESSERT_SKILLS = [
  "Astrophysics & Cosmos",
  "Content Creation",
  "Adobe Premiere & Blender",
  "Visual Storytelling"
];

export const HOTEL_MOTTOS = [
  "Flavor is our Philosophy",
  "Code with Culinary Precision",
  "A Feast for the Mind",
  "Reservations Recommended"
];