import http from "../http-common";

class CanhotoDataService {
  EndPoint = "/LeftHanded";

  getAll() {
    return http.get(this.EndPoint);
  }

  getById(id) {
    return http.get(this.EndPoint + `/${id}`)
  }

  create(data) {
    return http.post(this.EndPoint, data);
  }

  update(id, data) {
    return http.put(`${this.EndPoint}/${id}`, data)
  }

  delete(id) {
    return http.delete(this.EndPoint + `/${id}`)
  }

  
}

export default new CanhotoDataService();