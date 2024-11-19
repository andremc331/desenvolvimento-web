import React from "react";
import useLottery from "../hooks/useLottery";
import LotteryResult from "../components/LotteryResultProps";
import styled from "styled-components";

const Mega: React.FC = () => {
  const { megasena, loading, error } = useLottery();

  // Exibe mensagem de carregamento enquanto os dados estão sendo carregados
  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  // Exibe mensagem de erro caso a requisição falhe
  if (error) {
    return <div>{error}</div>;
  }

  // Exibe os resultados quando os dados são carregados
  return (
    <Resultado>
      {megasena && <LotteryResult megasena={megasena.megasena} />}
    </Resultado>
  );
};

export default Mega;

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
