module.exports = {
  darkMode: "class", // Или "media" "class"
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "red",
      },
      ringWidth: {
        DEFAULT: "0px",
      },
      fontSize: {
        "radix-xs": "12px", // size-1 в Radix
        "radix-sm": "14px", // size-2 в Radix
        "radix-base": "16px", // size-3 в Radix
        "radix-lg": "18px", // size-4 в Radix
        "radix-xl": "20px", // size-5 в Radix
        "radix-2xl": "24px", // size-6 в Radix
        "radix-3xl": "30px", // size-7 в Radix
        "radix-4xl": "36px", // size-8 в Radix
      },
    },
  },
  plugins: [],
}
