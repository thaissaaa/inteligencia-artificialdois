const nomes = ["Maria", "Gilberto", "Flora", "Marcos", "Amanda", "Gustavo", "Gabriele"];




export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}



export const nome = aleatorio(nomes)