import { Hijo } from "./Hijo";
import { useState } from "react";
import { useCallback } from "react";

export const Padre = () => {
    const numeros = [2, 4, 6, 8, 10];

    const [valor, setValor] = useState(0);

    const incrementar =  useCallback((num) => {
        setValor((c) => c + num);
    }, []);

    // const incrementar = (num) => {
    //     setValor(valor + num);
    // };

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {numeros.map((n) => (
                <Hijo key={n} numero={n} incrementar={incrementar} />
            ))}
            {/* <Hijo /> */}
        </div>
    );
};
