const FormsUrls = {
  fetchFormQuestions(formId: number) {
    return `/api/v1/forms/${formId}`;
  },
} as const;

export default FormsUrls;
