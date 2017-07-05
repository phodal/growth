const hljs = require('highlightjs'); // https://highlightjs.org/

const md = require('markdown-it')({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(lang, str, true).value
          }</code></pre>`;
      } catch (__) {
        console.error(__);
      }
    }

    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  },
});

export default class MarkdownHelper {
  static convert(str) {
    console.log(md.render(str));
    return md.render(str);
  }
}
