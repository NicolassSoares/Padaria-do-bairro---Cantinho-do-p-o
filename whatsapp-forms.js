// Número da empresa (substitua pelo número real se necessário)
const numeroWhatsApp = "5519986080910";

// Configuração comum para todos os formulários
document.addEventListener("DOMContentLoaded", function() {
    // === FORMULÁRIO DE CADASTRO ===
    const formCadastro = document.querySelector("form");
    if (formCadastro && formCadastro.querySelector("input[name='nome']")) {
        formCadastro.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.querySelector("input[name='nome']").value;
            const email = document.querySelector("input[name='email']").value;
            const telefone = document.querySelector("input[name='telefone']").value;
            const dataNascimento = document.querySelector("input[name='dataNascimento']").value;
            const rua = document.querySelector("input[name='rua']").value;
            const numeroCasa = document.querySelector("input[name='numero']").value;
            const bairro = document.querySelector("input[name='bairro']").value;
            const cep = document.querySelector("input[name='cep']").value;
            
            // Coletar preferências
            const preferencias = [];
            document.querySelectorAll("input[name='preferencia']:checked").forEach(check => {
                preferencias.push(check.value);
            });

            // Termos aceitos
            const promocoesEmail = document.querySelector("input[name='promocoesEmail']").checked ? "Sim" : "Não";
            const termosUso = document.querySelector("input[name='termosUso']").checked ? "Sim" : "Não";

            // Montar mensagem para WhatsApp
            let mensagem = `📝 *NOVO CADASTRO - Cantinho do Pão* 📝\n\n`;
            mensagem += `👤 *Nome:* ${nome}\n`;
            mensagem += `📧 *Email:* ${email}\n`;
            mensagem += `📞 *Telefone:* ${telefone}\n`;
            mensagem += `🎂 *Data de Nascimento:* ${dataNascimento || "Não informada"}\n\n`;
            mensagem += `🏠 *Endereço:*\n`;
            mensagem += `➤ Rua: ${rua}\n`;
            mensagem += `➤ Número: ${numeroCasa}\n`;
            mensagem += `➤ Bairro: ${bairro}\n`;
            mensagem += `➤ CEP: ${cep || "Não informado"}\n\n`;
            mensagem += `❤️ *Preferências:* ${preferencias.join(", ") || "Nenhuma"}\n\n`;
            mensagem += `✅ *Aceita usar os dados:* ${promocoesEmail}\n`;
            mensagem += `✅ *Aceitou os termos de uso:* ${termosUso}\n\n`;
            mensagem += `_Cadastro realizado através do site_`;

            // Codificar mensagem e redirecionar
            enviarParaWhatsApp(mensagem);
        });
    }

    // === FORMULÁRIO DE CONTATO GERAL ===
    const formContato = document.getElementById("Form-contato");
    if (formContato) {
        formContato.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.querySelector("#Form-contato input[name='nome']").value;
            const email = document.querySelector("#Form-contato input[name='email']").value;
            const endereco = document.querySelector("#Form-contato input[name='endereco']").value;
            const telefone = document.querySelector("#Form-contato input[name='telefone']").value;
            const assunto = document.querySelector("#Form-contato select[name='assunto']").value;
            const mensagemTexto = document.querySelector("#Form-contato textarea[name='mensagem']").value;

            // Montar mensagem para WhatsApp
            let mensagem = `📋 *CONTATO GERAL - Cantinho do Pão* 📋\n\n`;
            mensagem += `👤 *Nome:* ${nome}\n`;
            mensagem += `📧 *Email:* ${email}\n`;
            mensagem += `🏠 *Endereço:* ${endereco}\n`;
            mensagem += `📞 *Telefone:* ${telefone}\n`;
            mensagem += `📌 *Assunto:* ${assunto}\n\n`;
            mensagem += `💬 *Mensagem:*\n${mensagemTexto}\n\n`;
            mensagem += `_Mensagem enviada através do site_`;

            // Codificar mensagem e redirecionar
            enviarParaWhatsApp(mensagem);
        });
    }

    // === FORMULÁRIO DE FEEDBACK ===
    const formFeedback = document.getElementById("formfeedback");
    if (formFeedback) {
        formFeedback.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.querySelector("#formfeedback input[name='nome']").value;
            const email = document.querySelector("#formfeedback input[name='email']").value;
            const telefone = document.querySelector("#formfeedback input[name='telefone']").value;
            const produtoServico = document.querySelector("#formfeedback select[name='produtoServico']").value;
            const avaliacao = document.querySelector("#formfeedback input[name='avaliacao_geral']:checked")?.value || "Não informada";
            const comentarios = document.querySelector("#formfeedback textarea[name='comentarios']")?.value || "Sem comentários";

            // Montar mensagem para WhatsApp
            let mensagem = `⭐ *FEEDBACK - Cantinho do Pão* ⭐\n\n`;
            mensagem += `👤 *Nome:* ${nome}\n`;
            mensagem += `📧 *Email:* ${email}\n`;
            mensagem += `📞 *Telefone:* ${telefone || "Não informado"}\n\n`;
            mensagem += `📊 *Avaliação:*\n`;
            mensagem += `➤ Produto/Serviço: ${produtoServico}\n`;
            mensagem += `➤ Avaliação Geral: ${avaliacao}\n\n`;
            mensagem += `💬 *Comentários:*\n${comentarios}\n\n`;
            mensagem += `_Feedback enviado através do site_`;

            // Codificar mensagem e redirecionar
            enviarParaWhatsApp(mensagem);
        });
    }

    // === FORMULÁRIO DE PEDIDOS ESPECIAIS ===
    const formPedido = document.getElementById("formPedido");
    if (formPedido) {
        formPedido.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.querySelector("#formPedido input[name='nome']").value;
            const telefone = document.querySelector("#formPedido input[name='telefone']").value;
            const email = document.querySelector("#formPedido input[name='email']").value;
            const endereco = document.querySelector("#formPedido input[name='endereco']").value;
            const tipoPedido = document.querySelector("#formPedido input[name='tipoPedido']:checked")?.value || "Não especificado";
            const saborRecheio = document.querySelector("#formPedido select[name='saborRecheio']").value;
            const tamanho = document.querySelector("#formPedido input[name='tamanho']:checked")?.value || "Não especificado";
            const dataEntrega = document.querySelector("#formPedido input[name='dataEntrega']").value;
            const observacoes = document.querySelector("#formPedido textarea[name='observacoes']").value;

            // Montar mensagem para WhatsApp
            let mensagem = `🍞 *PEDIDO ESPECIAL - Cantinho do Pão* 🍞\n\n`;
            mensagem += `👤 *Nome:* ${nome}\n`;
            mensagem += `📞 *Telefone:* ${telefone}\n`;
            mensagem += `📧 *Email:* ${email}\n`;
            mensagem += `🏠 *Endereço:* ${endereco}\n\n`;
            mensagem += `📦 *Detalhes do Pedido:*\n`;
            mensagem += `➤ Tipo: ${tipoPedido}\n`;
            mensagem += `➤ Sabor/Recheio: ${saborRecheio}\n`;
            mensagem += `➤ Tamanho: ${tamanho}\n`;
            mensagem += `➤ Data de Entrega: ${dataEntrega}\n\n`;
            mensagem += `📝 *Observações:*\n${observacoes || "Nenhuma"}\n\n`;
            mensagem += `_Pedido enviado através do site_`;

            // Codificar mensagem e redirecionar
            enviarParaWhatsApp(mensagem);
        });
    }
});

// Função para enviar mensagem para o WhatsApp
function enviarParaWhatsApp(mensagem) {
    // Codificar mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Criar o link do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    // Abrir WhatsApp em nova aba
    window.open(urlWhatsApp, "_blank");
}

// Adicionar máscara de telefone a todos os campos de telefone
document.addEventListener("DOMContentLoaded", function() {
    const camposTelefone = document.querySelectorAll('input[type="tel"]');
    
    camposTelefone.forEach(function(campo) {
        campo.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/(\d{0,2})/, '($1');
            }
            
            e.target.value = value;
        });
    });
});