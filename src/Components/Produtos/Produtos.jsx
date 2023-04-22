import React, { useState } from "react";
import { useEffect } from "react";
import { Link, json } from "react-router-dom";
import * as S from "./ProdutosModules"

export default function Produtos() {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);
  console.log(produtos)

  if(produtos === null) return null
  return (
    <S.Container>{produtos.map((produto)=> (
        <Link to="produto/produto.id" key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <S.Title>{produto.nome}</S.Title>
        </Link>
    ))}</S.Container>
  );
}
