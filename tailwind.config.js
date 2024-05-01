import utils from "./src/helpers/utils";

/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@sira-ui/tailwind")({
      themes: [
        {
          name: "dark",
          colorScheme: "dark",
          prefersColorScheme: true,
          colors: {
            primary: "#634673",
            secondary: "#583533",
          },
        },
      ],
    }),
  ],
};
