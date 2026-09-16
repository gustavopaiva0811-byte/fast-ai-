FAST AI COMPLETA — estilo ChatGPT
====================================
Inclui:
- Interface profissional responsiva
- Login/demonstração local
- Nova conversa
- Histórico + pesquisa
- Modo escuro
- Seleção de modelo
- Exportação de conversa
- Anexo de arquivo no pedido (interface)
- Modos rápidos para estudo, e-book, conteúdo e projetos
- Backend separado para IA real
- Chamada da OpenAI Responses API pelo servidor

Para executar:
1. Instale Node.js.
2. Abra esta pasta no terminal.
3. Rode: npm install
4. Copie .env.example para .env.
5. Coloque sua chave em OPENAI_API_KEY.
6. Rode: npm start
7. Abra http://localhost:3000

Segurança:
- Nunca coloque a chave no HTML/JavaScript do navegador.
- O login local é apenas demonstração. Para produção, implemente autenticação real, sessões seguras, banco de dados, HTTPS, rate limiting e validação.
- O anexo nesta versão entra como referência de nome; para leitura real de PDFs/documentos, implemente upload no servidor e processamento apropriado.
