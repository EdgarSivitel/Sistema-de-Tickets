export interface TicketN {
    solicitante:string,
    fechaInicio: string,
    ubicacion: string,
    reporte: string,
    comentarios: string,
    estatus:string ,
    telefono:string
}

export interface Ticket {
    _id:string,
    solicitante:string,
    fechaInicio: string,
    ubicacion: string,
    reporte: string,
    comentarios: string,
    estatus:string ,
    telefono:string
    encargado:string,
    archivado:boolean,
    archivadoUsuario: boolean,
    archivadoVentas:[{
        idUsuario:string,
        archivado:boolean,
    }],
    
}