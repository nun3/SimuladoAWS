import React, { useState, useEffect } from 'react';
import { Certificacao, perguntasPorCertificacao, PerguntaAWS, AlternativaAWS } from '../perguntasAWS';

interface Props {
  certificacao: Certificacao;
}

// Função para embaralhar um array
function embaralharArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PerguntasCertificacao: React.FC<Props> = ({ certificacao }) => {
  const perguntasOriginais = perguntasPorCertificacao[certificacao];
  const [selecionadas, setSelecionadas] = useState<(string | string[] | null)[]>(Array(perguntasOriginais.length).fill(null));
  const [alternativasEmbaralhadas, setAlternativasEmbaralhadas] = useState<AlternativaAWS[][]>([]);
  const [mostrarEn, setMostrarEn] = useState(false);

  useEffect(() => {
    setSelecionadas(Array(perguntasOriginais.length).fill(null));
    // Embaralhar alternativas de cada pergunta
    const novasAlternativas = perguntasOriginais.map(p => embaralharArray(p.alternativas));
    setAlternativasEmbaralhadas(novasAlternativas);
  }, [certificacao, perguntasOriginais.length]);

  const handleClick = (perguntaIdx: number, alternativa: string, multipla: boolean) => {
    const atual = selecionadas[perguntaIdx];
    if (multipla) {
      let novas: string[] = Array.isArray(atual) ? [...atual] : [];
      if (novas.includes(alternativa)) {
        novas = novas.filter(a => a !== alternativa);
      } else {
        novas.push(alternativa);
      }
      setSelecionadas(sel => sel.map((s, i) => i === perguntaIdx ? novas : s));
    } else {
      setSelecionadas(sel => sel.map((s, i) => i === perguntaIdx ? (atual === alternativa ? null : alternativa) : s));
    }
  };

  return (
    <div className="perguntas-certificacao">
      <h2>{certificacao}</h2>
      {perguntasOriginais.map((p: PerguntaAWS, idx: number) => {
        const multipla = !!p.respostas;
        const selecionada = selecionadas[idx];
        const alternativas = alternativasEmbaralhadas[idx] || [];
        // Correção para múltipla escolha
        let acertou = false;
        if (multipla && Array.isArray(selecionada) && p.respostas) {
          acertou = selecionada.length === p.respostas.length && selecionada.every(a => p.respostas!.includes(a));
        } else if (!multipla && typeof selecionada === 'string' && p.resposta) {
          acertou = selecionada === p.resposta;
        }
        // Explicação das alternativas selecionadas
        let explicacoes: AlternativaAWS[] = [];
        if (multipla && Array.isArray(selecionada)) {
          explicacoes = alternativas.filter(a => selecionada.includes(a.texto));
        } else if (!multipla && typeof selecionada === 'string') {
          const alt = alternativas.find(a => a.texto === selecionada);
          if (alt) explicacoes = [alt];
        }
        return (
          <div key={idx} className="pergunta-card">
            <p className="pergunta">
              <strong>Pergunta {idx + 1}:</strong> {p.pergunta}
              {multipla && <span className="multipla-info">(Múltipla escolha)</span>}
            </p>
            <ul className="alternativas-lista">
              {alternativas.map((alt: AlternativaAWS, i: number) => {
                let classe = '';
                if (multipla && Array.isArray(selecionada)) {
                  if (selecionada.includes(alt.texto)) {
                    if (p.respostas && p.respostas.includes(alt.texto)) classe = 'correta';
                    else classe = 'errada';
                  }
                } else if (!multipla && typeof selecionada === 'string') {
                  if (alt.texto === p.resposta && selecionada === alt.texto) classe = 'correta';
                  else if (selecionada === alt.texto) classe = 'errada';
                }
                return (
                  <li
                    key={i}
                    className={classe + ' alternativa-item'}
                    onClick={() => handleClick(idx, alt.texto, multipla)}
                  >
                    <span className="alternativa-texto" style={{flex: 1}}>
                      {multipla && <input type="checkbox" checked={Array.isArray(selecionada) && selecionada.includes(alt.texto)} readOnly />}
                      {alt.texto}
                    </span>
                    {!selecionada && alt.link && (
                      <a
                        href={alt.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="alternativa-link"
                        title="Saiba mais sobre esse tópico"
                        onClick={e => e.stopPropagation()}
                        style={{marginLeft: 'auto'}}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Saiba mais" style={{verticalAlign: 'middle'}}>
                          <circle cx="10" cy="10" r="9" stroke="#0073bb" strokeWidth="2" fill="none"/>
                          <rect x="9.2" y="8" width="1.6" height="5" rx="0.8" fill="#0073bb"/>
                          <circle cx="10" cy="6" r="1" fill="#0073bb"/>
                        </svg>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
            {explicacoes.length > 0 && (
              <div className={"feedback-expl" + (acertou ? ' correta' : ' errada')}>
                {acertou ? 'Correto! ' : 'Incorreto! '}
                <span>
                  {explicacoes.map((alt, i) => (
                    <span key={i}>{alt.explicacao}{i < explicacoes.length - 1 ? ' | ' : ''}</span>
                  ))}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PerguntasCertificacao; 