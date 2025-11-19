import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY; // ✅ sem NEXT_PUBLIC_

export const SendContato = async ({ nome = "", email = "", telefone = "", empresa = "", mensagem = "" }) => {
  if (!apiKey) {
    console.error("❌ ERRO: Chave da API Brevo não encontrada!");
    throw new Error("A chave da API Brevo não foi configurada.");
  }

  const headers = {
    accept: "application/json",
    "api-key": apiKey,
    "content-type": "application/json",
  };

  const subject = "Contato do Site";

  const htmlContent = `
    <html>
      <body>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefone:</b> ${telefone}</p>
        <p><b>Empresa:</b> ${empresa}</p>
        <p><b>Mensagem:</b> ${mensagem}</p>
      </body>
    </html>
  `;

  const body = {
    sender: {
      name: `Site NSA Implementos`,
      email: `nsabrevo@gmail.com`, // remetente autorizado na Brevo
    },
    to: [
      {
        email: `contato@nsaimplementos.com.br`, // destinatário
        name: `Site NSA Implementos`,
      },
    ],
    subject,
    htmlContent,
  };

  try {
    const response = await axios.post("https://api.brevo.com/v3/smtp/email", body, { headers });
    return response.data;
  } catch (error) {
    console.error("❌ Erro ao enviar e-mail:", error.response?.data || error.message);
    throw error;
  }
};
