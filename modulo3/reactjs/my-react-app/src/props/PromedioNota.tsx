import { useState } from "react";

export default function PromedioNota() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [numero3, setNumero3] = useState(0);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`Resultado, ${(numero1 + numero2 + numero3) / 3}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="Number"
                placeholder="Numero1"
                value={numero1}
                onChange={(e) => setNumero1(Number(e.target.value))}
            />
            <input
                type="Number"
                placeholder="Numero2"
                value={numero1}
                onChange={(e) => setNumero2(Number(e.target.value))}
            />
            <input
                type="Number"
                placeholder="Numero3"
                value={numero2}
                onChange={(e) => setNumero3(Number(e.target.value))}
            />
            <button type="submit">Enviar</button>
        </form>

        
    );
}