const data = {
  "week-1": [
    {
      id: 0,
      title: "Currículo",
    },
    {
      id: 1,
      title: "Formulário",
    },
    {
      id: 2,
      title: "Loja Virtual",
    },
  ],
  "week-2": [
    {
      id: 0,
      title: "Discursivas",
    },
    {
      id: 1,
      title: "Váriaveis + Template Literals",
    },
    {
      id: 2,
      title: "Arrays",
    },
    {
      id: 3,
      title: "Operadores Lógicos",
    },
    {
      id: 4,
      title: "Operadores relacionais e estruturas de repetição",
    },
  ],
};

const getWeekExercises = (week) => {
  return data[week];
};

export { getWeekExercises };
