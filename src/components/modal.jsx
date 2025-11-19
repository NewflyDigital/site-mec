import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/Modal.module.css"; // ou crie um estilo exclusivo
import { useState } from "react";

export default function ModalOrcamento({ open, onClose }) {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nome, empresa, telefone, email, mensagem });
    onClose(); // fecha o modal após envio
  };

  if (!open) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>
          ✕
        </button>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{ width: "100%" }}
          noValidate
          autoComplete="off"
        >
          <div className="w-full flex flex-wrap justify-between items-center">
            <TextField
              label="Nome *"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              color="secondary"
              size="small"
              focused
              sx={{ width: "100%", margin: "0.6rem" }}
            />
            <TextField
              label="Empresa *"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              color="secondary"
              size="small"
              focused
              sx={{ width: "100%", margin: "0.6rem" }}
            />
          </div>
          <div className="w-full flex flex-wrap justify-between items-center">
            <TextField
              label="Telefone *"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              color="secondary"
              size="small"
              focused
              sx={{ width: "100%", margin: "0.6rem" }}
            />
            <TextField
              label="E-mail *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="secondary"
              size="small"
              focused
              sx={{ width: "100%", margin: "0.6rem" }}
            />
          </div>
          <div className="w-full flex flex-wrap justify-between items-center">
            <TextField
              label="Mensagem *"
              multiline
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              color="secondary"
              size="small"
              focused
              sx={{ width: "100%", margin: "0.6rem" }}
            />
          </div>
          <div className="w-full max-w-[30rem] flex justify-end px-4 pb-2">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Enviar
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
