import React from "react";
import styled from "styled-components";
import { QuinaResultProps } from "../types";

const QuinaResult: React.FC<QuinaResultProps> = ({ quina }) => {
  return (
    <Panel>
      <h1>Último Sorteio da Quina</h1>
      {/* <p><strong>Concurso:</strong> {quina.numeroDoConcurso}</p>
      <p><strong>Data de Apuração:</strong> {quina.dataApuracao}</p>
      <p><strong>Data do Próximo Concurso:</strong> {quina.dataProximoConcurso}</p>
      <p><strong>Valor do Prêmio:</strong> R$ {quina.valorPremio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p> */}
      <DezenasContainer>
        {quina.dezenas.map((dezena, index) => (
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

export default QuinaResult;
