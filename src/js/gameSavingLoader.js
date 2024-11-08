import GameSaving from "./gameSaving";
import read from "./reader";
import json from "./parser";


export default class GameSavingLoader {
  static load() {
    const result = read().then((buffer) => json(buffer)
    ).then((string) => {
      const { id: savingId, created, userInfo: { id: userId, name: userName, level, points } } = JSON.parse(string);
      const currentGame = new GameSaving(savingId, created, userId, userName, level, points);
      return new Promise((resolve) => {
        resolve(currentGame);
      });
    });
    return result;
  }
}
