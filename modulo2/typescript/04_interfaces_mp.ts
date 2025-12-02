
interface Usuario_mp {
  id: number;
  nombre: string;
  correo: string;
  activo: boolean;
}

function mostrarUsuario_mp(usuario: Usuario_mp): void {
  if (!usuario.activo) {
    console.log("El usuario no está activo");
  } else {
    console.log("Usuario activo");
  }

  console.log("ID:", usuario.id);
  console.log("Nombre:", usuario.nombre);
  console.log("Correo:", usuario.correo);
}

let usuario1: Usuario_mp = {
  id: 1,
  nombre: "Martin",
  correo: "martin@gmail.com",
  activo: true
};

mostrarUsuario_mp(usuario1);
