interface FetchFormQuestionsUrlProps {
  formId: number;
}

const FormsUrls = {
  fetchFormQuestions({ formId }: FetchFormQuestionsUrlProps) {
    return `/api/v1/forms/${formId}`;
  },
  submitVoyageProjectForm() {
    return "/api/v1/voyages/submit-project";
  },
} as const;

export default FormsUrls;
