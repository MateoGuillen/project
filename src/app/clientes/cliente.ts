export class Cliente{
  id:number;
  nombre: string | null;
  apellido: string | null;
  email: string | null;
  createAT!: string |null;

  constructor(id: number,nombre: string | null,apellido: string | null, email: string | null) {
    this.id= id;
    this.nombre= nombre;
    this.apellido= apellido;
    this.email= email;
  }

}
