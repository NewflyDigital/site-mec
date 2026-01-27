import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Contato.module.css";
import { SendContato } from "../services/sendingblue";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import GoogleMap from "../components/map";
import CssBaseline from "@mui/material/CssBaseline";
import Whats from "../components/whats";
import Link from "next/link";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const themeOptions = {
  palette: {
    type: "white",
    primary: {
      main: "#ff4800",
    },
    secondary: {
      main: "#ffffff",
    },
  },
};

const theme = createTheme(themeOptions);

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal() {
  const [disableButton, setDisableButton] = React.useState(false);
  const [alert, setAlert] = React.useState({
    show: false,
    severity: "info",
    message: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (data) => {
    const { nome, email, telefone, empresa, mensagem } = data;

    setLoading(true);

    SendContato({
      nome,
      email,
      telefone,
      empresa,
      mensagem,
    })
      .then(() => {
        setAlert({
          show: true,
          severity: "success",
          message: "Enviado com sucesso",
        });
      })
      .catch(e => {
        setAlert({
          show: true,
          severity: "error",
          message: `Não foi possível enviar o contato. Detalhes: ${e.message}`,
        });
      })
      .finally(() => {
        setLoading(false);
        reset();
      });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />
        <Backdrop
          sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <section className={styles.backgroundimg}>
          <div className={styles.box}>
            <span>SOLUÇÕES PARA PROJETOS</span>
            <br />
            <h2>Contato</h2>
          </div>
        </section>

        <section className={styles.background}>
          <div className={styles.barra}>Transformamos PROJETOS em REALIDADE.</div>
        </section>

        <section style={{ paddingTop: "5rem" }} className={styles.background}>
          <div className={styles.interno}>
            <div className={styles.box_row}>
              <div className={` ${styles.mobile}`}>
                <Box
                  onSubmit={handleSubmit(onSubmit)}
                  component="form"
                  sx={{ width: "100%" }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="w-full grid grid-cols-2 p-[.5rem] gap-[.5rem]">
                    <TextField
                      id="nome"
                      label="Nome"
                      {...register("nome", { required: "Nome é obrigatório" })}
                      error={!!errors.nome}
                      helperText={errors.nome?.message}
                      fullWidth
                      margin="none"
                      variant="outlined"
                      sx={{ my: ".25rem" }}
                      required
                    />
                    <TextField
                      id="email"
                      label="Email"
                      {...register("email", { required: "E-mail é obrigatório" })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      fullWidth
                      margin="none"
                      variant="outlined"
                      sx={{ my: ".25rem" }}
                      required
                    />
                    <TextField
                      id="telefone"
                      label="Telefone"
                      {...register("telefone", { required: "Telefone é obrigatório" })}
                      error={!!errors.telefone}
                      helperText={errors.telefone?.message}
                      fullWidth
                      margin="none"
                      variant="outlined"
                      sx={{ my: ".25rem" }}
                      required
                    />
                    <TextField
                      id="empresa"
                      label="Empresa"
                      {...register("empresa", { required: "Empresa é obrigatório" })}
                      error={!!errors.empresa}
                      helperText={errors.empresa?.message}
                      fullWidth
                      margin="none"
                      variant="outlined"
                      sx={{ my: ".25rem" }}
                      required
                    />
                  </div>

                  <div className="w-full flex px-[.5rem]">
                    <TextField
                      id="mensagem"
                      label="Mensagem"
                      {...register("mensagem", { required: "Mensagem é obrigatório" })}
                      error={!!errors.mensagem}
                      helperText={errors.mensagem?.message}
                      fullWidth
                      margin="none"
                      variant="outlined"
                      multiline
                      rows={5}
                      sx={{ my: ".25rem" }}
                      required
                    />
                  </div>
                  <div className="w-full flex p-[.5rem]">
                    <Button
                      type="submit"
                      variant="contained"
                      className="!text-[1em] !font-[600] !p-[.75rem] !bg-[#ff4800]"
                      sx={{ width: "100%", maxWidth: "250px" }}
                      disabled={disableButton}
                    >
                      ENVIAR
                    </Button>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.background} style={{ paddingTop: "8rem", paddingBottom: "0rem" }}>
        
        </section>
        <section className={styles.footer}>
          <div className={styles.interno}>
            <div className={styles.box3}>
              <h2 className={styles.titulo3}>Soluções em Implementos</h2>
            </div>
            <div className={styles.box2}>
             <Link legacyBehavior href="https://api.whatsapp.com/send?phone=5527998634303&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20MEC%20Implementos">
              <a target="_blank"  className={styles.botaofooter}>
               Fale Conosco
              </a>
             </Link>
            </div>
          </div>
        </section>
        <Whats />
        <Rodape />
      </ThemeProvider>
      <Snackbar
        open={alert.show}
        autoHideDuration={6000}
        onClose={() => setAlert({ ...alert, show: false })}
      >
        <Alert
          onClose={() => setAlert({ ...alert, show: false })}
          severity={alert.severity}
          variant="filled"
          sx={{ width: "100%", color: "white" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  toggleModal: PropTypes.func,
};
