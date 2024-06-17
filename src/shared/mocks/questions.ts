import { AnswerType, Question } from "../types/question";

export const QUESTIONS: Question[] = [
  {
    id: "1",
    question: "Какой день недели?",
    answerType: AnswerType.RADIO,
    answerOptions: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
    order: 1
  },
  {
    id: "10",
    question: "Какие ваши любимые игры?",
    answerType: AnswerType.CHECKBOX,
    answerOptions: [
      "Fortnite",
      "Minecraft",
      "League of Legends",
      "World of Warcraft",
      "Roblox",
      "Apex Legends",
    ],
    order: 2
  },
  {
    id: "6",
    question: "Какая ваша любимая музыка?",
    answerType: AnswerType.TEXT,
    answerOptions: [],
    order: 3
  },
  {
    id: "4",
    question: "Какой ваш любимый фильм?",
    answerType: AnswerType.STRING,
    answerOptions: [],
    order: 4
  },
  {
    id: "2",
    question: "Какой месяц?",
    answerType: AnswerType.RADIO,
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
    order: 5
  },
  {
    id: "3",
    question: "Какой ваш любимый цвет?",
    answerType: AnswerType.RADIO,
    answerOptions: [
      "Красный",
      "Синий",
      "Зеленый",
      "Желтый",
      "Фиолетовый",
      "Белый",
      "Черный",
    ],
    order: 6
  },

  {
    id: "5",
    question: "Какой ваш любимый инструмент?",
    answerType: AnswerType.STRING,
    answerOptions: [],
    order: 7
  },
  {
    id: "7",
    question: "Какая ваша любимая книга?",
    answerType: AnswerType.TEXT,
    answerOptions: [],
    order: 8
  },
  {
    id: "8",
    question: "Какая ваша любимая еда?",
    answerType: AnswerType.RADIO,
    answerOptions: ["Пицца", "Суп", "Салат", "Горячее", "Десерт"],
    order: 9
  },
  {
    id: "9",
    question: "Какая ваша любимая игра?",
    answerType: AnswerType.RADIO,
    answerOptions: [
      "Fortnite",
      "Minecraft",
      "League of Legends",
      "World of Warcraft",
      "Roblox",
      "Apex Legends",
    ],
    order: 10
  },
  {
    id: "11",
    question: "Какие из этих фильмов вы видели?",
    answerType: AnswerType.CHECKBOX,
    answerOptions: [
      "Индиана Джонс",
      "Пятый элемент",
      "Матрица",
      "Город грехов",
      "Зеленая миля",
    ],
    order: 11
  },
  {
    id: "12",
    question: "Какие из этих языков вы знаете?",
    answerType: AnswerType.CHECKBOX,
    answerOptions: [
      "Английский",
      "Русский",
      "Французский",
      "Испанский",
      "Немецкий",
      "Итальянский",
      "Китайский",
    ],
    order: 12
  },
  {
    id: "13",
    question: "Какие из этих животных вы любите?",
    answerType: AnswerType.CHECKBOX,
    answerOptions: ["Собаки", "Кошки", "Коты", "Ослы", "Заяц", "Лев", "Тигр"],
    order: 13
  },
  {
    id: "14",
    question: "Какие из этих стран вы посетили?",
    answerType: AnswerType.CHECKBOX,
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
    order: 14
  },
];
