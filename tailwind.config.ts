import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Moonlit Studios palette
        midnight: "#0A1128",
        deepOcean: "#1B4965",
        mermaidTeal: "#4A9B9B",
        lunarGold: "#FFD700",
        phoenixFire: "#FF8C42",
        moonlightSilver: "#E8E8E8",
        pearlWhite: "#FAFAFA",
        starlight: "#CAE9FF",

        // Phoenix & Peacock (legacy)
        peacockTeal: "#4A9B9B",
        phoenixGold: "#FFD700",

        // Old palette (still usable)
        moonlitTeal: "#1da6a5",
        nightNavy: "#0D1B2A",
        glacierWhite: "#F7F9FA",
        silverMist: "#C9D3D8",

        // ATLA + HP inspired additions
        tealBright: "#3AA7A3",
        oceanDark: "#2D5F6F",
        midnightNavy: "#1B3A4B",
        coralAccent: "#E8998D",
      },
      fontFamily: {
        heading: ["system-ui", "sans-serif"],
        body: ["system-ui", "sans-serif"],
      },
      keyframes: {
        // Fade in up animation (used throughout About page)
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Float animation
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
          "100%": { transform: "translateY(0)" },
        },
        // Gentle floating
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Pulse glow
        pulseGlow: {
          "0%": { opacity: "0.6", transform: "scale(0.98)" },
          "50%": { opacity: "1", transform: "scale(1.03)" },
          "100%": { opacity: "0.6", transform: "scale(0.98)" },
        },
        // Water bending flow animations
        flow: {
          "0%, 100%": { 
            transform: "translate(0, 0) scale(1)",
            opacity: "0.7"
          },
          "33%": { 
            transform: "translate(30px, -30px) scale(1.05)",
            opacity: "0.8"
          },
          "66%": { 
            transform: "translate(-20px, 20px) scale(0.95)",
            opacity: "0.6"
          },
        },
        flowDelayed: {
          "0%, 100%": { 
            transform: "translate(0, 0) scale(1)",
            opacity: "0.6"
          },
          "33%": { 
            transform: "translate(-25px, 25px) scale(1.08)",
            opacity: "0.7"
          },
          "66%": { 
            transform: "translate(15px, -15px) scale(0.92)",
            opacity: "0.5"
          },
        },
        // Moon pulse animation
        moonPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.7"
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "1"
          },
        },
        // Ripple effect
        ripple: {
          "0%": {
            transform: "scale(1)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(1.5)",
            opacity: "0"
          },
        },
        // Shimmer effect
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        // Footsteps walking animation
        footsteps: {
          "0%, 100%": {
            opacity: "0",
            transform: "translateX(-10px)"
          },
          "50%": {
            opacity: "0.4",
            transform: "translateX(0)"
          },
        },
        footstepWalkLeft: {
          "0%": { left: "-5%", top: "50%", opacity: "0", transform: "rotate(-10deg)" },
          "5%": { opacity: "0.6" },
          "25%": { left: "25%", top: "45%", opacity: "0.6", transform: "rotate(-8deg)" },
          "50%": { left: "50%", top: "50%", opacity: "0.5", transform: "rotate(-12deg)" },
          "75%": { left: "75%", top: "55%", opacity: "0.4", transform: "rotate(-10deg)" },
          "95%": { opacity: "0.3" },
          "100%": { left: "105%", top: "50%", opacity: "0", transform: "rotate(-8deg)" },
        },
        footstepWalkRight: {
          "0%": { left: "-5%", top: "55%", opacity: "0", transform: "rotate(10deg)" },
          "5%": { opacity: "0.6" },
          "25%": { left: "25%", top: "52%", opacity: "0.6", transform: "rotate(8deg)" },
          "50%": { left: "50%", top: "55%", opacity: "0.5", transform: "rotate(12deg)" },
          "75%": { left: "75%", top: "48%", opacity: "0.4", transform: "rotate(10deg)" },
          "95%": { opacity: "0.3" },
          "100%": { left: "105%", top: "55%", opacity: "0", transform: "rotate(8deg)" },
        },
      },
      animation: {
        // Standard animations
        fadeInUp: "fadeInUp 0.8s ease forwards",
        floatSlow: "float 4s ease-in-out infinite",
        floatGentle: "floatGentle 2s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.2s ease-in-out infinite",
        
        // Water bending animations
        flow: "flow 20s ease-in-out infinite",
        flowDelayed: "flowDelayed 20s ease-in-out infinite 2s",
        
        // Moon and effects
        moonPulse: "moonPulse 3s ease-in-out infinite",
        ripple: "ripple 2s ease-out infinite",
        shimmer: "shimmer 8s ease infinite",
        
        // HP Easter egg animations
        footsteps: "footsteps 3s ease-in-out infinite",
        footstepWalkLeft: "footstepWalkLeft 8s ease-in-out infinite",
        footstepWalkRight: "footstepWalkRight 8s ease-in-out infinite 0.4s",
      },
    },
  },
  plugins: [],
};

export default config;