import GameSavingLoader from "../gameSavingLoader";


test('should load the gameProgress', (done) => {
  const expected = {
    "id": 9,
    "created": 1546300800,
    "userInfo": {
      "id": 1,
      "name": "Hitman",
      "level": 10,
      "points": 2000
    }
  };

  GameSavingLoader.load().then(result => {
    expect(result).toEqual(expected);
    done();
  });
});
