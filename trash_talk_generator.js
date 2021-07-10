const list = require('./index.json')

// define sample function to ramdomly return a item in an array
function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define trashTalkGenerator function
function trashTalkGenerator (target) {
  if (!target) { return '請選一個角色。' }
  return `身為一個${list.target[target].title}，${sample(list.task[target])}，${sample(list.phrase)}吧！`
}

// export trashTalkGenerator
module.exports = trashTalkGenerator