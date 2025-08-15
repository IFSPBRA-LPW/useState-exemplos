import { useState } from "react";

// Exemplo 1:
export default function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function reduzir() {
    setContador(contador - 1);
  }

  return (
    <div>
      <h1>Valor: {contador}</h1>
      <button onClick={aumentar}>+</button>
      <button onClick={reduzir}>-</button>
    </div>
  );

// Exemplo 2:
// export default function NomeUsuario() {
//   const [nome, setNome] = useState("Visitante");

//   function trocarNome() {
//     setNome("Maria Joaquina");
//   }

//   return (
//     <div>
//       <p>Olá, {nome}!</p>
//       <button onClick={trocarNome}>Trocar nome</button>
//     </div>
//   );

// Exemplo 3
// export default function Perfil() {
//   const [usuario, setUsuario] = useState({
//     nome: "João",
//     idade: 25,
//   });

//   function fazerAniversario() {
//     setUsuario((prev) => ({
//       ...prev,
//       idade: prev.idade + 1,
//     }));
//   }

//   return (
//     <div>
//       <p>
//         {usuario.nome} tem {usuario.idade} anos
//       </p>
//       <button onClick={fazerAniversario}>Fazer aniversário</button>
//     </div>
//   );
}
