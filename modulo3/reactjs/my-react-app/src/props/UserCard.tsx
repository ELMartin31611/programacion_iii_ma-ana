export default function UserCard({ user}) {
  return <div>{user.name} - {user.age} años - su direccion es {user.direccion} - su numero es {user.telefono} </div>;
}
