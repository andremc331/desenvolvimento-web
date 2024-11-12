import React from "react";
import useLottery from "../hooks/useLottery";
import LotteryResult from "../components/LotteryResultProps";
import styled from "styled-components";

const Home: React.FC = () => {
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

export default Home;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
`;
