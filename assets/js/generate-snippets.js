const snippets = document.getElementsByClassName('pattern-snippet');

Array.from(snippets).forEach(function(snippet) {
  const code = snippet.innerHTML; // get snippet code
  const example = `<div class="pattern-example">${code}</div>`
  let button, source, newSnippet;

  if (snippet.classList.contains('no-toggle')) {
    source = `<pre class="pattern-source no-toggle"><code class="language-markup line-numbers"><!--${code}--></code></pre>`
    newSnippet = `${example} ${source}` // throw it all together
  } else {
    button = `<button href="#" class="toggle-source">View Source</button>` // toggle button
    source = `<pre class="pattern-source"><code class="language-markup line-numbers"><!--${code}--></code></pre>`
    newSnippet = `${example} ${button} ${source}` // throw it all together
  }

  snippet.innerHTML = ''; // clean snippet container
  snippet.insertAdjacentHTML('beforeend', newSnippet); // replace snippet container content
});

const toggleSnippets = document.getElementsByClassName('toggle-source');

// toggleFunction
const toggleSnippetSource = (e) => {
  console.log(e.target.nextElementSibling);
  const source = e.target.nextElementSibling; // nextSibling returns #text
  source.style.display = source.style.display === 'none' ? 'block' : 'none';
};

Array.from(toggleSnippets).forEach(function(toggle) {
  toggle.addEventListener('click', (e) => toggleSnippetSource(e));
});
