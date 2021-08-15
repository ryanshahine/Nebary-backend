const getHtml = require('./getHtml')

const obj = {
  'a.mp4': 'b',
  'abc.mp4': 'b',
  'test.jpg': 'b',
  'aaaa.jpg': 'b',
  'bbb.png': 'b',
  '1.mov': '2'
}

const html = getHtml(obj)

console.log(html)