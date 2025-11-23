# Справочник по практической стилистике русского языка

Handbook of Practical Stylistics of the Russian Language

## Цель проекта

Собрать и систематизировать сведения о трудных случаях в лексической семантике и грамматике русского языка, проблемах вариативности, и представить их в доступной форме для широкой аудитории.

## Технологический стек

**Frontend**: React 19, TypeScript, Redux Toolkit, React Router DOM, CSS Modules

**Данные**: JSON, Redux Store

**Сборка**: Webpack 5, Babe

**Code Quality**: ESLint, Prettier, Stylelint

**Документация**: Storybook

## Архитектура

```
src/
├── articles/           # разметка содержания статей
│
├── assets/             # статические ресурсы
│
├── components/         # логические компоненты и их UI
│
├── data/
│      ├── handbook.json  # структура справочника, мета-информация статей
│      └── team.jsom      # данные команды проекта
│
├── pages/                # страницы приложения
│
├── services/             # slice'ы для данных справочника и хранилище
│
├── styles/               # Переменные, шрифты, глобальные стиили
│
├── utils/                # Константы, типы и вспомогательные функции
│
└──  index.tsx
```

## Установка и запуск

```bash
# Клонирование репозитория
git clone [repository-url]

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run start

# Сборка для продакшена
npm run build

# Проверка качества кода
npm run check

# Запуск Storybook
npm run storybook
```

## Команда проекта

**Руководител проекта**

Юлия Михайловна Кувшинская

- почта: ykuvshinskaya@hse.ru, kjulia4@yandex.ru

**Разработчики**:

Анна Луценко

- github: usmor,
- почта: aklustenko@edu.hse.ru
