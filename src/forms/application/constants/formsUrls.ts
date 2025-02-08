interface FetchFormQuestionsUrlProps {
  formId: number;
}

const FormsUrls = {
  fetchFormQuestions({ formId }: FetchFormQuestionsUrlProps) {
    return `/api/v1/forms/${formId}`;
  },
} as const;

export default FormsUrls;
