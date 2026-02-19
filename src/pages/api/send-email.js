import axios from "axios";

export default async function handler(req, res) {
  console.log("=================================");
  console.log("📩 API FOI CHAMADA");

  if (req.method !== "POST") {
    console.log("❌ Método inválido:", req.method);
    return res.status(405).json({ message: "Método não permitido" });
  }

  console.log("📦 Body recebido:", req.body);

  const { nome, email, telefone, empresa, mensagem } = req.body;

  const apiKey = process.env.BREVO_API_KEY;

  console.log("🔎 Verificando ENV...");
  console.log("ENV BREVO_API_KEY:", apiKey ? "EXISTE ✅" : "NÃO EXISTE ❌");

  if (!apiKey) {
    console.log("❌ API KEY NÃO ENCONTRADA");
    return res.status(500).json({ message: "API Key não configurada." });
  }

  const headers = {
    accept: "application/json",
    "api-key": apiKey,
    "content-type": "application/json",
  };

  const body = {
    sender: {
      name: "Site MEC Implementos",
      email: "contato@mecservicosepecas.com.br",
    },
    to: [
      {
      email: "contato@mecservicosepecas.com.br",
        name: "Site MEC Implementos",
      },
    ],
    subject: "Contato do Site",
    htmlContent: `
      <p><b>Nome:</b> ${nome}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Telefone:</b> ${telefone}</p>
      <p><b>Empresa:</b> ${empresa}</p>
      <p><b>Mensagem:</b> ${mensagem}</p>
    `,
  };

  console.log("🚀 Enviando requisição para Brevo...");

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      body,
      { headers }
    );

    console.log("✅ SUCESSO BREVO!");
    console.log("📬 Resposta Brevo:", response.data);
    console.log("=================================");

    return res.status(200).json({
      success: true,
      brevoResponse: response.data,
    });

  } catch (error) {
    console.log("🔥 ERRO COMPLETO BREVO:");

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    } else {
      console.log("Mensagem:", error.message);
    }

    console.log("=================================");

    return res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
}
