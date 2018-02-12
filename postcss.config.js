module.exports = {
  plugins: {
    autoprefixer: {
      flexbox: "no-2009", // will add prefixes only for final and IE versions of the flex box specification
      browsers: [
        "ie >= 11",
        "last 2 versions"
      ]
    }
  }
};
