module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { 50: "#fee2e2" },
        red: { 50: "#fef2f2", 400: "#f43f5e", 700: "#dc2626", 900: "#b91c1c" },
        blue_gray: {
          100: "#d9d9d9",
          300: "#9ca3af",
          600: "#616675",
          700: "#4b5563",
          800: "#374151",
          900: "#1f2937",
          "100_00": "#d1d5db00",
          "100_01": "#d1d5db",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          600: "#6b7280",
          900: "#111827",
          "900_cc": "#111827cc",
          "100_02": "#f3f3f3",
          "100_01": "#ecfdf5",
        },
        teal: { 400: "#10b981", 800: "#047857" },
        black: { 900: "#000000", "900_0c": "#0000000c" },
        white: { A700_00: "#ffffff00", A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 1px  2px 0px #0000000c",
        bs1: "0px 4px  6px -2px #0000000c",
      },
      fontFamily: { inter: "Inter", copperplate: "Copperplate" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff00,#ffffff)",
        gradient1: "linear-gradient(90deg ,#f3f3f3,#d1d5db00)",
        gradient2: "linear-gradient(180deg ,#ffffff00,#f3f4f6)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
