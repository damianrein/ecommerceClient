import { UserEntity } from "./user-entity";

export interface Review {
    id:number,
    fecha:Date,
    valoracion:number,
    comentario:string,
    user:UserEntity
}
