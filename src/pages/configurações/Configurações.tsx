import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Button, Box, Typography } from "@mui/material";

function Configuracoes() {
  const [name, setName] = useState("Williams Silva");
  const [email, setEmail] = useState("Limmwillams@sidi.com");
  const [telefone, setTelefone] = useState("(81) 9 4002-8922");
  const [senha, setSenha] = useState("********");
  const [mensagem, setMensagem] = useState("");
  const [mensagemVisible, setMensagemVisible] = useState(false);

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSenha(event.target.value);
  };

  const handleTelefoneChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTelefone(event.target.value);
  };

  const handleSaveChanges = () => {
    setMensagem("Alterações salvas com sucesso!");
    setMensagemVisible(true);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      margin="0 auto"
      maxWidth="800px"
    >
      <Container maxWidth="sm">
        <TextField
          id="name"
          label="Nome"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleNameChange}
          margin="normal"
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          margin="normal"
        />

        <TextField
          id="senha"
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          value={senha}
          onChange={handleSenhaChange}
          margin="normal"
        />

        <TextField
          id="telefone"
          label="Telefone"
          type="tel"
          variant="outlined"
          fullWidth
          value={telefone}
          onChange={handleTelefoneChange}
          margin="normal"
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={handleSaveChanges}
        >
          Salvar Mudanças
        </Button>

        {mensagemVisible && (
          <Typography variant="body1" color="success">
            {mensagem}
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default Configuracoes;
