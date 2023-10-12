import http from '../http-common'

class FotoDataService{
    get(id){
        return http.get(`/foto/${id}`)
    }

    get_all(){
        return http.get('/foto/')
    }

    post(foto){
        return http.post('/foto', foto)
    }

    put(foto){
        return http.put('/foto', foto)
    }

    async delete(id){
        return await http.delete(`/foto/${id}`)
    }
}

export default new FotoDataService()