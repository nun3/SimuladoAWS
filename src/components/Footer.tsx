import React from "react";

const Footer: React.FC = () => (
  <footer style={{
    width: "100%",
    textAlign: "center",
    padding: "1rem 0",
    fontSize: "0.95rem",
    color: "#888",
    background: "#fafbfc",
    borderTop: "1px solid #eee",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 100,
  }}>
    © QA FLOW — Santos e Mafioleti Consultoria. Todos os direitos reservados.
  </footer>
);

export default Footer; 