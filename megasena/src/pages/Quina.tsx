import React from "react";
import styled from "styled-components";
import useQuina from "../hooks/useQuina";
import QuinaResult from "../components/QuinaResultProps";

const Quina: React.FC = () => {
  const { quina, loading, error } = useQuina();

  // Exibe mensagem de carregamento enquanto os dados estão sendo carregados
  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  // Exibe mensagem de erro caso a requisição falhe
  if (error) {
    return <div>{error}</div>;
  }

  // Exibe os resultados quando os dados são carregados
  return <Resultado>{quina && <QuinaResult quina={quina.quina} />}</Resultado>;
};

export default Quina;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
`;

const Resultado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.panelBackground};
  text-align: center;
  padding: 20px;
`;
