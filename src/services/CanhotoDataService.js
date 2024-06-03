import http from "../http-common";

class CanhotoDataService {
  EndPoint = "/LeftHanded";

  getAll() {
    return http.get(this.EndPoint);
  }

  create(data) {
    return http.post(this.EndPoint, data);
  }
}

export default new CanhotoDataService();