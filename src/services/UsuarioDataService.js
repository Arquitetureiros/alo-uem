import http from '../http-common'

class UsuarioDataService{
    get(id){
        return http.get(`/usuario/${id}`)
    }

    get_all(){
        return http.get('/usuario/')
    }

    post(usuario){
        return http.post('/usuario', usuario)
    }

    put(usuario){
        return http.put('/usuario', usuario)
    }

    async delete(id){
        return await http.delete(`/usuario/${id}`)
    }
}

export default new UsuarioDataService()