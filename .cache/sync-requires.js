const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tanaynistala/Websites/Elev8-Website/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/tanaynistala/Websites/Elev8-Website/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/tanaynistala/Websites/Elev8-Website/src/pages/about.tsx"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/Users/tanaynistala/Websites/Elev8-Website/src/pages/blog.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/tanaynistala/Websites/Elev8-Website/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/tanaynistala/Websites/Elev8-Website/src/pages/index.tsx"))),
  "component---src-templates-blog-post-index-tsx": hot(preferDefault(require("/Users/tanaynistala/Websites/Elev8-Website/src/templates/BlogPost/index.tsx")))
}

