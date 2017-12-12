const defineObjectWithFontSize = (topics, fontArray) => topics.map((topic, index) => {
  if (index > fontArray.length - 1) {
    return {
      topic,
      fontSize: fontArray[fontArray.length - 1]
    }
  }
  return {
    topic,
    fontSize: fontArray[index]
  }
})

module.exports = {
  defineObjectWithFontSize
}
