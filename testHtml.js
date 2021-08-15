const getHtml = require('./getHtml')

const obj = {
  'a': 'b',
  '1': '2'
}

const html = getHtml(obj)

console.log(html)