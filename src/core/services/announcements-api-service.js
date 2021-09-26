import http from "./http-common"
class AnnouncementApiService{
    getAllAnnouncement(){
        return http.get("/announcement");
    }
    getByIdAnnouncement(id){
        return http.get(`/proyects/${id}`);
    }
    createAnnouncement(data){
        return http.post("/proyects",data);
    }
    updateAnnouncement(id,data){
        return http.patch(`proyects/${id}`,data);
    }
    deleteAnnouncement(id){
        return http.delete(`/proyects/${id}`);
    }
    findByTittleAnnouncement(title){
        return http.get(`proyects?title=${title}`);
    }
}
export default new AnnouncementApiService();