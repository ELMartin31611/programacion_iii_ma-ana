import { useEffect, useState } from 'react';

export default function FetchUsers() {
  const [users, setUser] = useState<any | null>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <h3>Usuario:</h3>
      {users ? (
    
        users.map((user,i)=>
          <>
            <li key={i}>
              {user.name} - {user.email}
            </li>
          </>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
