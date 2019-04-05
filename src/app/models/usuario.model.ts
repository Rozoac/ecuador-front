export class Usuario {
    constructor(
        public correo: string,
        public clave: string,
        public id_rol?: any[],
        public nombre?: string,
        public estado?: string,
        public apellido?: string,
        public celular?: string,
        public tipoCliente?: any[],
        public imagen?: string,
        public segmento?: any[],
        public ciudad?: any[],
        public id_pais?: string,
        public fecha_creacion?: string,
        public hora_creacion?: string,
        public update?: string,
        public gettoken?: string,
        public _id?: string
    ) { }
}
