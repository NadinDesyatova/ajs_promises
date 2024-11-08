import GameSavingLoader from "./gameSavingLoader";


GameSavingLoader.load().then(game => game, error => error.message);
