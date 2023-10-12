import http from '../http-common'

class ComentarioDataService{
    get(id){
        return http.get(`/comentario/${id}`)
    }

    get_all(){
        return http.get('/comentario/')
    }

    get_by_publicacao(id){
        return http.get(`/comentario/publicacao/${id}`)
    }

    post(comentario){
        return http.post('/comentario', comentario)
    }

    put(comentario){
        return http.put('/comentario', comentario)
    }

    async delete(id){
        return await http.delete(`/comentario/${id}`)
    }
}

export default new ComentarioDataService()