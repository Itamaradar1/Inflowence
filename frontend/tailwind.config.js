module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '1440px',
      xl: '1440px',
    },

    extend: {   
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        header: "var(--header)",
        accent: "var(--accent)",
        gradient: "gradient-to-r from-yellow-100 to-blue-200",
        bumblebee: "var(--bumblebee)",
        contentcard: "var(--contentcard)",
        veryLightGrey: "var(--veryLightGrey)",
        textbg: "var(--textbg)",
        
     },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F2545B",
          "secondary": "#A8C256",
          "accent": "#18182F",
          "neutral": "#18182F",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ]

  }
};
