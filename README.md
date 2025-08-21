# neo-design-patterns-hw-09

## Завдання

Реалізовано патерн **Шаблонний метод** для експорту даних користувачів у формати CSV, JSON, XML.  
Дані завантажуються з API: https://jsonplaceholder.typicode.com/users

## Як працює шаблонний метод

Базовий клас `DataExporter` визначає незмінну послідовність кроків (`export()`):

1. load()
2. transform()
3. beforeRender()
4. render() (абстрактний)
5. afterRender()
6. save() (абстрактний)

Конкретні класи (`CsvExporter`, `JsonExporter`, `XmlExporter`) реалізують власне `render` і `save`.

## Ітератори

Додатково реалізовані ітератори для обходу експортованих файлів:

- `CsvIterator`
- `JsonIterator`
- `XmlIterator`

Кожен ітератор читає файл і реалізує `[Symbol.iterator]()`, що дозволяє обходити користувачів через `for...of`.

## Запуск

```bash
# Генерація файлів експорту
npx ts-node ./src/main.ts
```

# Обхід готових файлів

```bash
npx ts-node ./src/main-iterate.ts
```
