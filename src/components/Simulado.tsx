import React, { useState, useEffect } from 'react';
import { perguntasPorCertificacao, Certificacao, PerguntaAWS } from '../perguntasAWS';

interface Props {
  certificacao: Certificacao;
  onSair: () => void;
}

const TEMPO_TOTAL = 60 * 10; // 10 minutos em segundos

const Simulado: React.FC<Props> = ({ certificacao, onSair }) => {
  const perguntas = perguntasPorCertificacao[certificacao];
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState<(string | string[] | null)[]>(Array(perguntas.length).fill(null));
  const [finalizado, setFinalizado] = useState(false);
  const [tempo, setTempo] = useState(TEMPO_TOTAL);
  const [mostrarEn, setMostrarEn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (finalizado) return;
    if (tempo === 0) {
      setFinalizado(true);
      return;
    }
    const timer = setInterval(() => setTempo((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [tempo, finalizado]);

  const multipla = !!perguntas[indice].respostas;
  const selecionada = respostas[indice];

  const handleClick = (alternativa: string) => {
    if (finalizado) return;
    if (multipla) {
      let novas: string[] = Array.isArray(selecionada) ? [...selecionada] : [];
      if (novas.includes(alternativa)) {
        novas = novas.filter(a => a !== alternativa);
      } else {
        novas.push(alternativa);
      }
      setRespostas(r => r.map((s, i) => i === indice ? novas : s));
    } else {
      setRespostas(r => r.map((s, i) => i === indice ? (selecionada === alternativa ? null : alternativa) : s));
    }
  };

  const responder = () => {
    // trava a resposta para a pergunta atual
    // (no simulado, não permite alterar após avançar)
    // mas permite desmarcar antes de avançar
    if (indice < perguntas.length - 1) setIndice(indice + 1);
    else setFinalizado(true);
  };

  const anterior = () => {
    if (indice > 0) setIndice(indice - 1);
  };

  // Acertos considerando múltipla escolha
  const acertos = respostas.filter((r, i) => {
    const p = perguntas[i];
    if (p.respostas && Array.isArray(r)) {
      return r.length === p.respostas.length && r.every(a => p.respostas!.includes(a));
    } else if (p.resposta && typeof r === 'string') {
      return r === p.resposta;
    }
    return false;
  }).length;

  // Relatório de desempenho por serviço/tópico
  const erros: { pergunta: string; resposta: string | string[] | null; correta: string | string[] }[] = perguntas
    .map((p, i) => ({
      pergunta: p.pergunta,
      resposta: respostas[i],
      correta: p.respostas ? p.respostas : p.resposta || ''
    }))
    .filter((r, i) => {
      const p = perguntas[i];
      if (p.respostas && Array.isArray(r.resposta)) {
        return !(r.resposta.length === p.respostas.length && r.resposta.every(a => p.respostas!.includes(a)));
      } else if (p.resposta && typeof r.resposta === 'string') {
        return r.resposta !== p.resposta;
      }
      return true;
    });

  // Feedback visual
  let acertou = false;
  if (finalizado) {
    if (perguntas[indice].respostas && Array.isArray(selecionada)) {
      acertou = selecionada.length === perguntas[indice].respostas!.length && selecionada.every(a => perguntas[indice].respostas!.includes(a));
    } else if (perguntas[indice].resposta && typeof selecionada === 'string') {
      acertou = selecionada === perguntas[indice].resposta;
    }
  }

  return (
    <div>
      <div className="simulado-header">
        <button onClick={() => setShowModal(true)} className="simulado-sair">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{verticalAlign: 'middle', marginRight: 6}} aria-label="Sair">
            <path d="M7 3v2h6V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2H7v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z" fill="#c00"/>
            <path d="M13 10H4m0 0l2.5-2.5M4 10l2.5 2.5" stroke="#c00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Sair do Simulado
        </button>
        <span className="simulado-tempo">
          Tempo restante: {Math.floor(tempo / 60)}:{(tempo % 60).toString().padStart(2, '0')}
        </span>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Tem certeza que deseja sair do simulado?</h3>
            <div className="modal-botoes">
              <button className="btn-modal sair" onClick={onSair}>Sim, sair</button>
              <button className="btn-modal cancelar" onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      {!finalizado ? (
        <div>
          <div className="pergunta-card">
            <p className="pergunta">
              <strong>Pergunta {indice + 1} de {perguntas.length}:</strong> {perguntas[indice].pergunta} {multipla && <span className="multipla-info">(Múltipla escolha)</span>}
            </p>
            <ul className="alternativas-lista">
              {perguntas[indice].alternativas.map((alt, i) => {
                let checked = false;
                let classe = '';
                if (multipla && Array.isArray(selecionada)) {
                  checked = selecionada.includes(alt.texto);
                  if (finalizado && checked) {
                    if (perguntas[indice].respostas && perguntas[indice].respostas!.includes(alt.texto)) classe = 'correta';
                    else classe = 'errada';
                  }
                } else if (!multipla && typeof selecionada === 'string') {
                  checked = selecionada === alt.texto;
                  if (finalizado && checked) {
                    if (alt.texto === perguntas[indice].resposta) classe = 'correta';
                    else classe = 'errada';
                  }
                }
                return (
                  <li
                    key={i}
                    className={classe + ' alternativa-item'}
                    onClick={() => handleClick(alt.texto)}
                  >
                    <span className="alternativa-texto">
                      {multipla && <input type="checkbox" checked={checked} readOnly />}
                      {!multipla && <input type="radio" checked={checked} readOnly />}
                      {alt.texto}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="botoes-navegacao-simulado">
              <button onClick={anterior} disabled={indice === 0} className="btn-nav btn-anterior">Anterior</button>
              <button onClick={responder} disabled={multipla ? !(Array.isArray(selecionada) && selecionada.length > 0) : !selecionada} className="btn-nav btn-proxima">{indice === perguntas.length - 1 ? 'Finalizar' : 'Próxima'}</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pergunta-card" style={{ textAlign: 'center' }}>
          <h2>Simulado Finalizado!</h2>
          <p><strong>Nota:</strong> {acertos} de {perguntas.length} ({Math.round((acertos / perguntas.length) * 100)}%)</p>
          <p><strong>Tempo gasto:</strong> {((TEMPO_TOTAL - tempo) / 60).toFixed(1)} minutos</p>
          <h3>Relatório de Desempenho</h3>
          <div className="relatorio-desempenho">
            {erros.length === 0 ? (
              <p>Parabéns! Você acertou todas as perguntas.</p>
            ) : (
              erros.map((e, i) => (
                <div key={i} className="relatorio-card">
                  <div className="relatorio-pergunta">Pergunta: {e.pergunta}</div>
                  <div className="relatorio-resposta">Sua resposta: {Array.isArray(e.resposta) ? e.resposta.join(', ') : e.resposta}</div>
                  <div className="relatorio-correta">Correta: {Array.isArray(e.correta) ? e.correta.join(', ') : e.correta}</div>
                </div>
              ))
            )}
          </div>
          <button onClick={() => setShowModal(true)} style={{ marginTop: 16, padding: '10px 28px', fontSize: '1rem', borderRadius: 8, background: '#0073bb', color: '#fff', border: 'none', cursor: 'pointer' }}>Voltar</button>
        </div>
      )}
    </div>
  );
};

export default Simulado; 