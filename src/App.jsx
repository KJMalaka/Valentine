import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Confetti component for celebration
const Confetti = () => {
  const hearts = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 3,
    size: Math.random() * 20 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-red-400"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            top: '-50px',
          }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: heart.animationDelay,
            ease: 'linear',
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

function App() {
  const [phase, setPhase] = useState(1);
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [affirmationIndex, setAffirmationIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const noButtonTexts = [
    "NO",
    "Are you sure?",
    "Really?",
    "You're breaking my heart...",
    "Please reconsider?",
    "One more chance?",
    "Don't do this to me...",
    "My heart can't take it...",
    "Final answer?",
    "You really mean no?"
  ];

  const affirmations = [
    "You are my peace.",
    "My safe place.",
    "My forever home.",
    "The calm in my chaos.",
    "My favorite hello and hardest goodbye.",
    "The reason I smile."
  ];

  const handleNoClick = () => {
    setNoClickCount(prev => Math.min(prev + 1, noButtonTexts.length - 1));
    setYesScale(prev => prev + 0.15);
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setPhase(3);
      setShowConfetti(false);
    }, 2000);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) {
      return;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (phase === 3 && affirmationIndex < affirmations.length) {
      const timer = setTimeout(() => {
        setAffirmationIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase, affirmationIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2D0B26] via-[#1a0515] to-[#000000] flex items-center justify-center px-4 overflow-hidden relative">
      <audio
        ref={audioRef}
        src="/maqondana.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <motion.button
        type="button"
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-600/40 to-pink-600/30 text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] backdrop-blur-md transition"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="text-xl">{isPlaying ? '⏸️' : '▶️'}</span>
      </motion.button>

      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {showConfetti && <Confetti />}

      <div className="relative z-10 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {/* Phase 1: Landing */}
          {phase === 1 && (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1
                className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-playfair font-bold"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                Happy Valentine's Day,
                <br />
                My Love
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-purple-200/80 mb-12 font-inter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Today is about you
              </motion.p>

              <motion.button
                onClick={() => setPhase(2)}
                className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue
              </motion.button>
            </motion.div>
          )}

          {/* Phase 2: The Question */}
          {phase === 2 && (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h2
                className="text-4xl md:text-6xl mb-16 text-pink-200 font-playfair font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Will you be my Valentine?
              </motion.h2>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <motion.button
                  onClick={handleYesClick}
                  className="px-12 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 font-inter"
                  style={{ 
                    transform: `scale(${yesScale})`
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
                  whileHover={{ scale: yesScale * 1.1 }}
                  whileTap={{ scale: yesScale * 0.95 }}
                >
                  YES! ❤️
                </motion.button>

                <motion.button
                  onClick={handleNoClick}
                  onMouseEnter={handleNoClick}
                  onTouchStart={handleNoClick}
                  className="px-12 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 font-inter"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {noButtonTexts[noClickCount]}
                </motion.button>
              </div>

              <motion.p
                className="mt-8 text-purple-300/60 text-sm italic font-inter"
                initial={{ opacity: 0 }}
                animate={{ opacity: noClickCount > 2 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                The YES button is looking quite appealing, don't you think?
              </motion.p>
            </motion.div>
          )}

          {/* Phase 3: Affirmations */}
          {phase === 3 && (
            <motion.div
              key="phase3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.div
                className="mb-16"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 1 }}
              >
                <div className="text-8xl mb-6">💕</div>
                <h2 className="text-4xl md:text-5xl text-pink-200 mb-4 font-playfair font-bold">
                  I knew you'd say yes!
                </h2>
              </motion.div>

              <div className="space-y-8 mb-16">
                <AnimatePresence mode="wait">
                  {affirmations.slice(0, affirmationIndex + 1).map((affirmation, index) => (
                    <motion.p
                      key={index}
                      className="text-2xl md:text-3xl text-purple-200 font-playfair"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      {affirmation}
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>

              {affirmationIndex >= affirmations.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/30"
                >
                  <h3 className="text-3xl md:text-4xl mb-6 text-pink-200 font-playfair font-bold">
                    One Last Thing...
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-purple-100/90 font-inter">
                    Every moment with you is a gift I never knew I needed. You've turned my ordinary days into extraordinary memories, my fears into courage, and my dreams into reality. Thank you for choosing to be mine, today and always. Happy Valentine's Day, my love.
                  </p>
                  <div className="mt-8 text-pink-300 text-2xl font-playfair">
                    Forever yours ♥
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
