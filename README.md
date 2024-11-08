# Домашнее задание к лекции «Promises, async/await»

## Promises

### Описание

Реализован класс `GameSavingLoader`, который даёт возможность экспорта сохранённого прогресса игры в виде JSON, а с помощью метода `load` загружает данные (с помощью функции `read`), парсит их (с помощью функции `json()`) и создаёт объект типа `GameSaving`.

Метод `load` возвращает `Promise` с данными.

Спецификации объекта типа `GameSaving`:
```javascript
{
  "id": <number>, // id сохранения
  "created": <timestamp>, // timestamp создания
  "userInfo": {
    "id": <number>, // user id
    "name": <string>, // user name
    "level": <number>, // user level
    "points": <number> // user points
  }
}
```
---