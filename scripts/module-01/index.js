import { getWeekExercises } from "../../utils/data.js";

let previousSelection = null;

$(".week-btn:not(.disabled)").click((e) => {
  $(e.currentTarget).addClass("selected");
  const elementId = $(e.currentTarget).attr("id");
  if (previousSelection !== elementId) {
    removePreviousSelection();
    previousSelection = elementId;
    const exercises = getWeekExercises(elementId);
    hideOtherWeeks();
    createExercisesList(exercises, e.currentTarget);
  }
});

function removePreviousSelection() {
  $(`#${previousSelection}`).removeClass("selected");
  if (previousSelection) $("#exercises-menu").remove();
}

function createExercisesList(exercises, parentElement) {
  const ul = document.createElement("ul");
  ul.id = "exercises-menu";

  exercises.map((exercise) => {
    ul.innerHTML += `<li id="exercise-${
      exercise.id
    }" class="exercise-btn"><span>${("0" + (exercise.id + 1)).slice(
      -2
    )}</span>${exercise.title}</li>`;
  });

  $(`<li id="back-btn" class="week-btn">Voltar</li>`).insertAfter(
    parentElement
  );
  $("#back-btn").click((e) => {
    $(e.currentTarget).addClass("hide");
    $(`#${previousSelection}`).addClass("hide");
    setTimeout(() => {
      $(e.currentTarget).remove();
    }, 500);
    const temp = previousSelection;
    returnWeeks(temp);
  });
  $(ul).insertAfter(parentElement);
}

function returnWeeks(temp) {
  removePreviousSelection();
  previousSelection = null;
  setTimeout(() => {
    $(`#${temp}`).removeClass("hide");
    $(".hidden").map((idx, element) => $(element).removeClass("hidden"));
  }, 600);
}

function hideOtherWeeks() {
  $(".week-btn").map((idx, element) => {
    $(element).addClass("hide");
    setTimeout(() => {
      if (previousSelection !== $(element).attr("id")) {
        $(element).addClass("hidden");
      }
      $(element).removeClass("hide");
    }, 600);
  });
}
