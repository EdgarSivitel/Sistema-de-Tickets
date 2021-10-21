export interface UsuarioN {
    nombre: string,
    tipo:number,
    correo:string,
    usuario:string, 
    contrasena:string, 
    empresa:string,
    ubicacion:string
}
export interface Usuario {
    _id:string,
    nombre: string,
    tipo:number,
    correo:string,
    usuario:string, 
    contrasena:string, 
    empresa:string,
    ubicacion:string,
    vericado:boolean
}