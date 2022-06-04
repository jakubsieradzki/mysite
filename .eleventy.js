module.exports = function (eleventyConfig) {
  // copy static files
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      // includes: "_includes",
      // data: "_data",
      output: "_site"
    }
  };
};