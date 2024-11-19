import React from "react";
import styled from "styled-components";
import TimemaniaResult from "../components/TimemaniaResultProps";
import useTimemania from "../hooks/useTimemania";

const Timemania: React.FC = () => {
  const { timemania, loading, error } = useTimemania();

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
      {timemania && <TimemaniaResult timemania={timemania.timemania} />}
    </Resultado>
  );
};

export default Timemania;

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
