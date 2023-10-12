import http from '../http-common'

class PublicacaoDataService{
    get(id){
        return http.get(`/publicacao/${id}`)
    }

    get_all(){
        return http.get('/publicacao/')
    }

    post(publicacao){
        return http.post('/publicacao', publicacao)
    }

    put(publicacao){
        return http.put('/publicacao', publicacao)
    }

    async delete(id){
        return await http.delete(`/publicacao/${id}`)
    }
}

export default new PublicacaoDataService()