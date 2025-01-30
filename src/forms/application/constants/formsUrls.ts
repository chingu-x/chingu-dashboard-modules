const FormsUrls = {
  fetchFormQuestions(formId: string) {
    return `/api/v1/forms/${formId}`;
  },
} as const;

export default FormsUrls;
