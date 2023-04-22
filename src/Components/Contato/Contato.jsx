import React from "react";
import foto from '../../img/contato.jpg'
import * as S from './ContatoModule'

const Contato = () => {
  return <div>
      <S.Container>
    
        <img src={foto} alt="Maquina de escrever" />
       <S.Box>
        <h1>Entre em contato</h1>
        <S.Dados>
          <S.List>Carolina@gmail.com</S.List>
          <S.List>9999-9999</S.List>
          <S.List>Rua alecrim dourado, 999</S.List>
        </S.Dados>
       </S.Box>
      </S.Container>
  </div>;
};
export default Contato;
