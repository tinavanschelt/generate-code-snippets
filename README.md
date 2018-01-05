
## Code Snippets

Just a little js script I use to generate [prism.js](http://github.com/PrismJS) code snippets automatically.

### Prism Configuration

You can download your own prism.js configuration at [prismjs.com](http://prismjs.com/download.html), the configuration used with the example includes the following Prism plugins:
- [Unescaped Markup](http://prismjs.com/plugins/unescaped-markup/) (requirement for the script to work)
- [Normalize Whitespace](http://prismjs.com/plugins/normalize-whitespace/) (just really handy)
- [Line Numbers](http://prismjs.com/plugins/line-numbers/) (buggy when used with the above)

## Getting started

Download and include the following files in your project and modify as needed.

- /assets/js/generate-snippets.js
- /assets/js/prism.js
- /assets/css/generate-snippets.css
- /assets/css/prism.css

## Usage

The source code of anything inside a div with class "pattern-snippet" will be converted into a syntax-highlighted code block underneath the original example. (See index.html)
