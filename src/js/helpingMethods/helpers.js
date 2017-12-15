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
});

const setColor = (cloud) => {
  if (cloud.topic.sentimentScore < 0) {
    throw new Error('Sentiment of topic is not positive');
  }

  if (cloud.topic.sentimentScore > 60) {
    return 'greenText'
  } else if (cloud.topic.sentimentScore < 40) {
    return 'redText'
  } else {
    return 'greyText'
  }
};

module.exports = {
  defineObjectWithFontSize,
  setColor
};
