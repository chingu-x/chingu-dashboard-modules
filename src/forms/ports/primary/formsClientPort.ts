export interface FormsClientPort {
  fetchFormQuestions: (
    props: FetchFormQuestionsRequestDto
  ) => Promise<FetchFormQuestionsResponseDto>;
}
