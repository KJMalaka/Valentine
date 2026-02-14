# 💕 Valentine's Day Experience

A romantic, interactive Valentine's Day web experience built with React, Framer Motion, and Tailwind CSS. Features smooth animations, a music player, and three engaging phases that culminate in heartfelt affirmations.

## ✨ Features

- **Three-Phase Experience**
  - Phase 1: Romantic greeting with smooth fade-in animations
  - Phase 2: Interactive "Will you be my Valentine?" with a playful NO button that keeps dodging
  - Phase 3: Celebration with confetti hearts, affirmations, and a final love message

- **🎵 Background Music Player**
  - Floating glassmorphic play/pause button in the top-right corner
  - Manual control (no autoplay)
  - Loops continuously with elegant styling

- **✨ Smooth Animations**
  - Framer Motion powered transitions between phases
  - Floating confetti hearts on "YES" click
  - Gradient text and glowing effects
  - Responsive animations across all devices

- **📱 Mobile Responsive**
  - Fully responsive design with Tailwind CSS
  - Works seamlessly on phones, tablets, and desktops
  - Touch-friendly buttons and controls

- **🎨 Luxury Dark Theme**
  - Deep purple and black gradient background
  - Pink and purple accent colors
  - Glassmorphism effects with backdrop blur
  - Ambient glow effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KJMalaka/Valentine.git
cd Valentine
```

2. Install dependencies:
```bash
npm install
```

3. Add the audio file:
   - Place `maqondana.mp3` in the `public` folder
   - Path should be: `public/maqondana.mp3`

### Running the Project

**Development Mode:**
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm preview
```

## 📁 Project Structure

```
Valentine/
├── src/
│   ├── App.jsx              # Main React component
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── public/
│   └── maqondana.mp3        # Background music (add manually)
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── valentine.html           # Alternative HTML version
```

## 🛠️ Technologies Used

- **React 18.2** - UI framework
- **Vite 5.0** - Build tool
- **Framer Motion 10.16** - Animation library
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## 🎨 Customization

### Change the Message
Edit the affirmations in `src/App.jsx`:
```javascript
const affirmations = [
  "You are my peace.",
  "My safe place.",
  // Add your own affirmations here
];
```

### Customize Colors
Update the Tailwind classes in `src/App.jsx` or extend `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors
    },
  },
}
```

### Change Music
Replace `public/maqondana.mp3` with your own audio file and update the path in `src/App.jsx`:
```javascript
<audio
  ref={audioRef}
  src="/your-music-file.mp3"
  loop
  preload="auto"
/>
```

### Adjust Animation Timing
Modify the transition durations in the motion components:
```javascript
transition={{ duration: 0.8, delay: 0.4 }}
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and free to use for personal or commercial purposes.

## 💝 Credits

- Music: "Maqondana by Feza"
- Fonts: Playfair Display & Inter from Google Fonts
- Built with ❤️ for Valentine's Day 2026

---

**Made with love** 💕 Enjoy the experience!
