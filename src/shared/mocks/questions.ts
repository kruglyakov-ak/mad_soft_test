import { Question } from "../../widgets/model/types";

export const QUESTIONS: Question[] = [
  {
    id: "1",
    question: "Какой день недели?",
    answerType: "single",
    answerOptions: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
  },
  {
    id: "2",
    question: "Какой месяц?",
    answerType: "single",
    answerOptions: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  },
  {
    id: "3",
    question: "Какой ваш любимый цвет?",
    answerType: "single",
    answerOptions: [
      "Красный",
      "Синий",
      "Зеленый",
      "Желтый",
      "Фиолетовый",
      "Белый",
      "Черный",
    ],
  },
  {
    id: "4",
    question: "Какой ваш любимый фильм?",
    answerType: "string",
  },
  {
    id: "5",
    question: "Какой ваш любимый инструмент?",
    answerType: "string",
  },
  {
    id: "6",
    question: "Какая ваша любимая музыка?",
    answerType: "text",
  },
  {
    id: "7",
    question: "Какая ваша любимая книга?",
    answerType: "text",
  },
  {
    id: "8",
    question: "Какая ваша любимая еда?",
    answerType: "single",
    answerOptions: ["Пицца", "Суп", "Салат", "Горячее", "Десерт"],
  },
  {
    id: "9",
    question: "Какая ваша любимая игра?",
    answerType: "single",
    answerOptions: [
      "Fortnite",
      "Minecraft",
      "League of Legends",
      "World of Warcraft",
      "Roblox",
      "Apex Legends",
    ],
  },
  {
    id: "10",
    question: "Какие ваши любимые игры?",
    answerType: "multiple",
    answerOptions: [
      "Fortnite",
      "Minecraft",
      "League of Legends",
      "World of Warcraft",
      "Roblox",
      "Apex Legends",
    ],
  },
  {
    id: "11",
    question: "Какие из этих фильмов вы видели?",
    answerType: "multiple",
    answerOptions: [
      "Индиана Джонс",
      "Пятый элемент",
      "Матрица",
      "Город грехов",
      "Зеленая миля",
    ],
  },
  {
    id: "12",
    question: "Какие из этих языков вы знаете?",
    answerType: "multiple",
    answerOptions: [
      "Английский",
      "Русский",
      "Французский",
      "Испанский",
      "Немецкий",
      "Итальянский",
      "Китайский",
    ],
  },
  {
    id: "13",
    question: "Какие из этих животных вы любите?",
    answerType: "multiple",
    answerOptions: ["Собаки", "Кошки", "Коты", "Ослы", "Заяц", "Лев", "Тигр"],
  },
  {
    id: "14",
    question: "Какие из этих стран вы посетили?",
    answerType: "multiple",
    answerOptions: [
      "США",
      "Австралия",
      "Канада",
      "Мексика",
      "Франция",
      "Германия",
      "Италия",
      "Китай",
      "Япония",
      "Бразилия",
    ],
  },
];
