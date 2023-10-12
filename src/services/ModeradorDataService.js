import http from '../http-common'

class ModeradorDataService{
    get(email){
        return http.get(`/moderador/${email}`)
    }

    get_all(){
        return http.get('/moderador/')
    }

    post(moderador){
        return http.post('/moderador', moderador)
    }

    put(moderador){
        return http.put('/moderador', moderador)
    }

    async delete(email){
        return await http.delete(`/moderador/${email}`)
    }
}

export default new ModeradorDataService()