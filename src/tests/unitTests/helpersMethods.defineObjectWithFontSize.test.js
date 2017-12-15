import helpers from '../../js/helpingMethods/helpers'

describe('tests for define object with font size function', () => {
  const topicMock = [{
    testKey: 'value',
    testKey2: 1,
    testKey3: true,
    testKey4: [1],
    testKey5: {key: 'key'}
  }, {
    testKey: 'value2',
    testKey2: 2,
    testKey3: false,
    testKey4: [2],
    testKey5: {key: 'key2'}
  }];

  const fontsArrayMock = [666, 30, 20, 10, 5, 1];

  test('mock object should get returned in that same state', () => {
    const objectResponse = helpers.defineObjectWithFontSize(topicMock, fontsArrayMock);
    expect(objectResponse).toBeDefined();
    expect(objectResponse[0].topic.testKey).toBe('value');
    expect(objectResponse[0].topic.testKey2).toBe(1);
    expect(objectResponse[0].topic.testKey3).toBe(true);
    expect(Array.isArray(objectResponse[0].topic.testKey4)).toBe(true);
    expect(objectResponse[0].topic.testKey5.key).toBe('key');

    expect(objectResponse).toBeDefined();
    expect(objectResponse[1].topic.testKey).toBe('value2');
    expect(objectResponse[1].topic.testKey2).toBe(2);
    expect(objectResponse[1].topic.testKey3).toBe(false);
    expect(Array.isArray(objectResponse[1].topic.testKey4)).toBe(true);
    expect(objectResponse[1].topic.testKey5.key).toBe('key2');
  });

  test('response should contains new fonts property', () => {
    const objectResponse = helpers.defineObjectWithFontSize(topicMock, fontsArrayMock);
    expect(objectResponse[0].fontSize).toBeDefined();
  });

  test('response objects should get fontsize added starting from left to right', () => {
    const objectResponse = helpers.defineObjectWithFontSize(topicMock, fontsArrayMock);
    expect(objectResponse[0].fontSize).toBe(fontsArrayMock[0]);
    expect(objectResponse[1].fontSize).toBe(fontsArrayMock[1]);
  });
});
