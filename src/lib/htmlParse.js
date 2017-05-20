import htmlparser from './htmlparser2';

const blockTagArr = ['div', 'p', 'img', 'address',
  'blockquote', 'dir', 'dl', 'iframe',
  'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'menu', 'ol', 'pre', 'table', 'ul', 'li', 'hr', 'tbody', 'tr', 'td', 'th'];

// const inlineTagArr = ['a', 'abbr', 'b', 'big',
//   'br', 'cite', 'code', 'em', 'label', 'span', 'strong'];


function indexOf(item, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      return true;
    }
  }
  return false;
}

// function pushText(parent, text) {
//   if (!parent.children) {
//     parent.children = [];
//   }
//   parent.children.push({
//     name: 'text',
//     text: text,
//     parent: parent,
//     type: 'inline',
//   });
// }


export default function (html, done) {
  // var startTime = new Date().getTime()

  const rootStack = [{
    name: 'div',
    type: 'block',
  }];
  const tagStack = [rootStack[0]];

  const opts = {
    recognizeSelfClosing: true,
    lowerCaseAttributeNames: true,
    lowerCaseTags: true,
    decodeEntities: true,
  };

  const parser = new htmlparser.Parser({
    onopentag: (tag, attrs) => {
      // console.log('openTag:');
      // console.log(name);

      const father = tagStack[tagStack.length - 1];
      if (!father.children) {
        father.children = [];
      }

      if (indexOf(tag, blockTagArr)) {
        father.children.push({
          name: tag,
          attribs: attrs,
          type: 'block',
          parent: father,
        });
        tagStack.push(father.children[father.children.length - 1]);
      } else {
        let display = 'inline';
        if (father.name === 'pre') {
          display = 'block';
        }

        father.children.push({
          name: tag,
          attribs: attrs,
          type: display,
          parent: father,
        });
        tagStack.push(father.children[father.children.length - 1]);
      }
    },
    ontext: (content) => {
      if (content === '\n') {
        return;
      }
      const father = tagStack[tagStack.length - 1];
      if (!father.children) father.children = [];

      father.children.push({
        name: 'text',
        text: content,
        parent: father,
        type: 'inline',
      });
    },
    onclosetag: () => {
      tagStack.pop();
    },
    onend: () => {
      done(rootStack[0].children);
      // let endTime = new Date().getDate();
      // console.log(startTime - endTime);
    },
  }, opts);

  parser.write(html);
  parser.end();
}
