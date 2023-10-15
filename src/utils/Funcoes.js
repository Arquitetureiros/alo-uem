export const campoVazio = (campo) => {
    if(campo == null || campo == '' || campo == []){
        return true
    } 
    return false
}