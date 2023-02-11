const data = {
  "week-1": [
    {
      id: 0,
      title: "Currículo",
      html: "week-01/exercise-01.html",
    },
    {
      id: 1,
      title: "Formulário",
      html: "week-01/exercise-02.html",
    },
    {
      id: 2,
      title: "Loja Virtual",
      html: "week-01/exercise-03.html",
    },
  ],
  "week-2": [
    {
      id: 0,
      title: "Discursivas",
      html: "week-02/exercise-01.html",
    },
    {
      id: 1,
      title: "Váriaveis + Template Literals",
      html: "week-02/exercise-02.html",
    },
    {
      id: 2,
      title: "Arrays",
      html: "week-02/exercise-03.html",
    },
    {
      id: 3,
      title: "Operadores Lógicos",
      html: "week-02/exercise-04.html",
    },
    {
      id: 4,
      title: "Operadores de atribuição e estruturas de repetição",
      html: "week-02/exercise-05.html",
    },
  ],
};

const getWeekExercises = (week) => {
  return data[week];
};

export { getWeekExercises };
