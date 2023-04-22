import React from "react";
import { NavLink } from "react-router-dom";
import * as S from './HeaderModule'

const Header = ()=> {
    return (
        <S.Navegacao>
            <S.Ul>
                <S.Lista>
                    <NavLink to="/" and>Produtos</NavLink>
                </S.Lista>
                <S.Lista>
                    <NavLink to="contato">Contato</NavLink>
                </S.Lista>
            </S.Ul>
        </S.Navegacao>
    )
}
export default Header
