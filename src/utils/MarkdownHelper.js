const hljs = require('highlightjs'); // https://highlightjs.org/

const md = require('markdown-it')({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(lang, str, true).value
          }</code></pre>`.replace(/\n/g, '<br>');
      } catch (__) {
        console.error(__);
      }
    }

    return `<pre class="hljs"><code>${md.utils.escapeHtml(str).replace(/\n/g, '<br>')}</code></pre>`;
  },
});

export default class MarkdownHelper {
  static convert(str) {
    return md.render(str);
  }
}
