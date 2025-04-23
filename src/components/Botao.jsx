export default function Botao({ cor = "primary", onClick, children }) {
    const style = {
      backgroundColor: cor === "primary" ? "#007bff" : cor === "warning" ? "orange" : "#333",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      marginTop: "10px",
      cursor: "pointer"
    };
  
    return (
      <button style={style} onClick={onClick}>
        {children}
      </button>
    );
  }
  