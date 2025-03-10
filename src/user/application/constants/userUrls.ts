const UserUrls = {
  fetchUser() {
    return "/api/v1/users/me";
  },
} as const;

export default UserUrls;
