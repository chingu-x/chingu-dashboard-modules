const FormsUrls = {
  fetchFormQuestions(formId: number) {
    return `/api/v1/forms/${formId}`;
  },
  submitWeeklyCheckinForm() {
    return "/api/v1/voyages/sprints/check-in";
  },
} as const;

export default FormsUrls;
