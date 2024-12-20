import React from "react";
import styled from "styled-components";
import { LotteryResultProps } from "../types";

const LotteryResult: React.FC<LotteryResultProps> = ({ megasena }) => {
  return (
    <Panel>
      <h1>Último Sorteio da Mega-Sena</h1>
      {/* <p><strong>Concurso:</strong> {megasena.numeroDoConcurso}</p>
      <p><strong>Data de Apuração:</strong> {megasena.dataApuracao}</p>
      <p><strong>Data do Próximo Concurso:</strong> {megasena.dataProximoConcurso}</p>
      <p><strong>Valor do Prêmio:</strong> R$ {megasena.valorPremio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p> */}
      <DezenasContainer>
        {megasena.dezenas.map((dezena, index) => (
          <Dezena key={index}>{dezena}</Dezena>
        ))}
      </DezenasContainer>
    </Panel>
  );
};

// Styled-components
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.panelBackground};
  background-color: "white";
  text-align: center;
  padding: 20px;
  font-size: 20px;
`;

const DezenasContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Dezena = styled.span`
  background-color: ${({ theme }) => theme.colors.dezenaBackground};
  color: ${({ theme }) => theme.colors.dezenaText};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export default LotteryResult;
