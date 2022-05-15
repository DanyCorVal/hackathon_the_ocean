import http from "./../http-common";

class LoginService {
  login(data) {
    return http.post("/logIn", data);
  }
}

export default new LoginService();
