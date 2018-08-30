export class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public password: string,
        public role?: string,
        public gettoken?: string,
        public _id?: string
    ) { }
}
