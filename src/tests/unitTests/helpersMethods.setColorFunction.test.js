import helpers from '../../js/helpingMethods/helpers'

describe('tests for setColor function', () => {
  const sentimentWIthValue61 = {
    topic: {
      sentimentScore: 61
    }
  };

  const sentimentWIthValue60 = {
    topic: {
      sentimentScore: 60
    }
  };

  const sentimentWIthValue59 = {
    topic: {
      sentimentScore: 59
    }
  };

  const sentimentWIthValue40 = {
    topic: {
      sentimentScore: 40
    }
  };

  const sentimentWIthValue41 = {
    topic: {
      sentimentScore: 41
    }
  };

  const sentimentWIthValue39 = {
    topic: {
      sentimentScore: 39
    }
  };

  const sentimentWIthValue0 = {
    topic: {
      sentimentScore: 0
    }
  };

  const sentimentWIthValue1 = {
    topic: {
      sentimentScore: 1
    }
  };

  test('function returns greenText when sentiment value is bigger then 60', () => {
    expect(helpers.setColor(sentimentWIthValue61)).toBe('greenText')
  });
  test('function returns greyText when sentiment value is equals to  60', () => {
    expect(helpers.setColor(sentimentWIthValue60)).toBe('greyText')
  });

  test('function returns greyText when sentiment value is lower then 60', () => {
    expect(helpers.setColor(sentimentWIthValue59)).toBe('greyText')
  });

  test('function returns greyText when sentiment value is bigger then 40', () => {
    expect(helpers.setColor(sentimentWIthValue41)).toBe('greyText')
  });

  test('function returns redText when sentiment value is lower then 40', () => {
    expect(helpers.setColor(sentimentWIthValue39)).toBe('redText')
  });

  test('function returns greyText when sentiment value is equal to 40', () => {
    expect(helpers.setColor(sentimentWIthValue40)).toBe('greyText')
  });

  test('function returns greyText when sentiment value is equal to 0', () => {
    expect(helpers.setColor(sentimentWIthValue0)).toBe('redText')
  });

  test('function returns redText when sentiment value is bigger then 0', () => {
    expect(helpers.setColor(sentimentWIthValue1)).toBe('redText')
  });
});
