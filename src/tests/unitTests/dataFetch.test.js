import dataFetch from '../../api/dataFetch'

describe('Tests for data fetch method', async () => {
  test('user get data fetched', async () => {
    const results = await dataFetch.fetchData();
    expect(results.length).toBe(30);
  });

  test('first result should be Berlin', async () => {
    const results = await dataFetch.fetchData();
    expect(results[0].label).toBe('Berlin');
    expect(results[0].volume).toBe(165);
    expect(results[0].type).toBe('topic');
    expect(results[0].sentiment.negative).toBe(3);
    expect(results[0].sentiment.neutral).toBe(133);
    expect(results[0].sentiment.positive).toBe(29);
    expect(results[0].sentimentScore).toBe(65);
    expect(results[0].burst).toBe(13);
    expect(results[0].pageType.blog).toBe(17);
    expect(results[0].pageType.facebook).toBe(56);
    expect(results[0].pageType.forum).toBe(22);
    expect(results[0].pageType.general).toBe(5);
    expect(results[0].pageType.image).toBe(0);
    expect(results[0].pageType.news).toBe(26);
    expect(results[0].pageType.review).toBe(1);
    expect(results[0].pageType.twitter).toBe(35);
    expect(results[0].pageType.video).toBe(3);
  });
});
