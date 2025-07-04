import React, { useState, useRef } from 'react';
import './App.css';
import PerguntasCertificacao from './components/PerguntasCertificacao';
import Simulado from './components/Simulado';
import { Certificacao } from './perguntasAWS';

const certificacoes: Certificacao[] = [
  'Cloud Practitioner',
  'Developer',
  'DevOps Engineer',
];

function App() {
  const [selecionada, setSelecionada] = useState<Certificacao>('Cloud Practitioner');
  const [simulado, setSimulado] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="App">
      <h1>Exemplos de Perguntas Oficiais AWS</h1>
      <div className="dropdown-certificacao-container" ref={dropdownRef}>
        <button
          className={"dropdown-certificacao-btn" + (dropdownOpen ? ' open' : '')}
          onClick={() => !simulado && setDropdownOpen((v) => !v)}
          disabled={simulado}
        >
          {selecionada}
          <span className="dropdown-arrow">▼</span>
        </button>
        {dropdownOpen && !simulado && (
          <div className="dropdown-certificacao-list">
            {certificacoes.map((c) => (
              <div
                key={c}
                className={"dropdown-certificacao-item" + (c === selecionada ? ' selected' : '')}
                onClick={() => {
                  setSelecionada(c);
                  setDropdownOpen(false);
                }}
              >
                {c}
              </div>
            ))}
          </div>
        )}
      </div>
      {simulado && (
        <div className="aviso-simulado">
          Finalize o simulado para trocar de certificação.
        </div>
      )}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        {!simulado && (
          <button
            style={{ padding: '10px 28px', fontSize: '1rem', borderRadius: 8, background: '#0073bb', color: '#fff', border: 'none', cursor: 'pointer' }}
            onClick={() => setSimulado(true)}
          >
            Iniciar Simulado
          </button>
        )}
      </div>
      {simulado ? (
        <Simulado certificacao={selecionada} onSair={() => setSimulado(false)} />
      ) : (
        <PerguntasCertificacao certificacao={selecionada} />
      )}
    </div>
  );
}

export default App;
