const FormsUrls = {
  fetchFormQuestions(formId: number) {
    return `/api/v1/forms/${formId}`;
  },
  submitWeeklyCheckinForm() {
    return "/api/v1/voyages/sprints/check-in";
  },
  submitVoyageProjectForm() {
    return "/api/v1/voyages/submit-project";
  },
} as const;

export default FormsUrls;
