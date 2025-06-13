module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000"],
    },
    upload: {
      startServerCommand: "npm run start",
      target: "temporary-public-storage",
    },
  },
};
