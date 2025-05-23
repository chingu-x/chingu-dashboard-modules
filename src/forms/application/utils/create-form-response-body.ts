import type { CreateFormResponseBody } from "@/forms/application/types";

export function createFormResponseBody({
  data,
  questions,
}: CreateFormResponseBody) {
  type ResponseType = {
    questionId: number;
    text?: string;
    optionChoiceId?: number;
    boolean?: boolean;
    numeric?: number;
  };
  const responses = [] as ResponseType[];

  for (const [key, value] of Object.entries(data)) {
    let response: ResponseType;
    const question = questions.find(
      (question) =>
        question.id === Number(key) ||
        question.subQuestions.find(
          (subQuestion) => subQuestion.id === Number(key),
        ),
    );

    if (question && question.inputType.name === "boolean") {
      if (value !== "") {
        response = { questionId: Number(key), boolean: value === "true" };
        responses.push(response);
      }
    }

    if (
      question &&
      (question.inputType.name === "radio" ||
        question.inputType.name === "radioIcon" ||
        question.inputType.name === "scale" ||
        question.inputType.name === "radioGroup")
    ) {
      if (value !== "") {
        response = { questionId: Number(key), optionChoiceId: Number(value) };
        responses.push(response);
      }
    }

    if (
      question &&
      (question.inputType.name === "checkbox" ||
        question.inputType.name === "teamMembersCheckbox")
    ) {
      if (value.length !== 0) {
        let numeric: number;
        if (Array.isArray(value)) {
          numeric = Number(value.reduce((a, b) => a + b, ""));
          response = {
            questionId: Number(key),
            numeric: numeric,
          };
          responses.push(response);
        }
      }
    }

    if (
      question &&
      (question.inputType.name === "text" ||
        question.inputType.name === "shortText" ||
        question.inputType.name === "url")
    ) {
      if (value !== "") {
        response = {
          questionId: Number(key),
          text: value as string,
        };
        responses.push(response);
      }
    }
  }

  return responses;
}
