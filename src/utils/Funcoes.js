export const campoVazio = (campo) => {
    if(campo == null || campo == '' || campo == []){
        return true
    } 
    return false
}

export const statusPublicacao = (status) => {
    switch (status) {
        case 1:
            return "Desativado"
        case 2:
            return "Resolvido"
        case 3:
            return "Em Revisao"
        case 4:
            return "Aprovado"
        case 5:
            return "Reprovado"
        case 6: 
            return "Alteração"

    }
}