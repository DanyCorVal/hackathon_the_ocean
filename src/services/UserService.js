import http from "./../http-common";

class UserService {
  create(data) {
    return http.post("/users", data);
  }
}

export default new UserService();
