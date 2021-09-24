import http from "./http-common"
class ProyectsApiService{
    getAll(){
        return http.get("/proyects");
    }
    getById(id){
        return http.get(`/proyects/${id}`);
    }
    create(data){
        return http.post("/proyects",data);
    }
    update(id,data){
        return http.put(`proyects/${id}`,data);
    }
    delete(id){
        return http.delete(`/proyects/${id}`);
    }
    findByTittle(title){
        return http.get(`proyects?title=${title}`);
    }
}
export default new ProyectsApiService();