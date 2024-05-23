export default {
  name: "CampFire Hub",
  baseAPIUrl: import.meta.env.DEV
    ? "http://localhost:3000/"
    : "https://campfirehub-backend.vercel.app/",
};
