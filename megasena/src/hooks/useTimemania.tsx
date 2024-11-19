import { useState, useEffect } from 'react';
import { TimemaniaProps } from '../types';
import timemania1 from '../services/Timemania';

const useTimemania = () => {
  const [timemania, setTimemania] = useState<TimemaniaProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResultado = async () => {
      try {
        const data = await timemania1.get(); // Chamando o método get() do serviço
        setTimemania(data); // Armazenando os dados no estado
      } catch (err) {
        setError('Erro ao carregar os dados');
      } finally {
        setLoading(false);
      }
    };

    fetchResultado();
  }, []);

  return { timemania, loading, error };
};

export default useTimemania;