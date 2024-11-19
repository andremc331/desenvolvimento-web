import { useState, useEffect } from 'react';
import { QuinaProps } from '../types';
import quina1 from '../services/Quina';

const useQuina = () => {
  const [quina, setQuina] = useState<QuinaProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResultado = async () => {
      try {
        const data = await quina1.get(); // Chamando o método get() do serviço
        setQuina(data); // Armazenando os dados no estado
      } catch (err) {
        setError('Erro ao carregar os dados');
      } finally {
        setLoading(false);
      }
    };

    fetchResultado();
  }, []);

  return { quina, loading, error };
};

export default useQuina;