# TinaCMS - Guia de Resolução de Problemas

## 🔴 Erro: "TinaCMS failed to initialize"

### Causa
O Client ID ou Token está inválido ou incorreto.

### Solução
1. Vá para https://app.tina.io
2. Clique em seu projeto
3. Vá em **Tokens**
4. Copie o token **"Content (Read-only)"**
5. Atualize o arquivo `tina/config.ts`
6. Faça push para GitHub
7. Aguarde o Netlify fazer deploy

---

## 🟡 Erro: "Authentication failed"

### Causa
Seu cliente não está logado ou a sessão expirou.

### Solução
1. Clique em **"Login with TinaCMS"**
2. Faça login com sua conta
3. Se não tiver conta, crie uma em https://app.tina.io
4. Autorize o acesso ao repositório

---

## 🟡 Erro: "Cannot read property 'clientId'"

### Causa
O arquivo `tina/config.ts` não foi carregado corretamente.

### Solução
1. Verifique se o arquivo existe em `tina/config.ts`
2. Verifique se o Client ID está correto
3. Recarregue a página (F5)
4. Limpe o cache (Ctrl+Shift+Delete)

---

## 🟡 Página em Branco

### Causa
O TinaCMS não conseguiu carregar a interface.

### Solução
1. Recarregue a página (F5)
2. Tente em modo incógnito (Ctrl+Shift+N)
3. Tente em outro navegador
4. Limpe o cache do navegador
5. Verifique a conexão com internet

---

## 🟡 Mudanças Não Aparecem

### Causa
O site ainda não fez deploy das mudanças.

### Solução
1. Espere 2-3 minutos
2. Recarregue o site principal
3. Verifique se clicou em "Save"
4. Vá para https://app.netlify.com e verifique o status do deploy

---

## 🟡 Erro ao Fazer Upload de Imagem

### Causa
A pasta de uploads não existe ou não tem permissão.

### Solução
1. Verifique se a pasta `public/uploads/` existe
2. Se não existir, crie-a
3. Verifique as permissões da pasta
4. Tente novamente

---

## 🟡 Não Consigo Fazer Login

### Causa
1. Conta não criada
2. Credenciais incorretas
3. Problema de conexão

### Solução
1. Verifique se tem conta em https://app.tina.io
2. Se não tiver, crie uma
3. Verifique se está usando a senha correta
4. Tente fazer logout e login novamente
5. Verifique sua conexão com internet

---

## 🟡 Erro: "Repository not found"

### Causa
O TinaCMS não consegue acessar o repositório do GitHub.

### Solução
1. Vá para https://app.tina.io
2. Vá em **Settings** → **GitHub**
3. Verifique as permissões
4. Reconecte o GitHub
5. Tente novamente

---

## 🟡 Erro: "Token expired"

### Causa
Seu token expirou.

### Solução
1. Vá para https://app.tina.io
2. Vá em **Tokens**
3. Delete o token antigo
4. Crie um novo token
5. Atualize `tina/config.ts`
6. Faça push para GitHub

---

## 📋 Checklist de Verificação

Se nada funcionar, verifique:

- [ ] Client ID está correto em `tina/config.ts`
- [ ] Token está correto em `tina/config.ts`
- [ ] Arquivo foi feito push para GitHub
- [ ] Netlify completou o deploy
- [ ] Você tem uma conta em https://app.tina.io
- [ ] Sua conta tem permissão no repositório
- [ ] Você está conectado à internet
- [ ] Não há erros no console do navegador (F12)

---

## 🔧 Verificar Console de Erros

1. Abra o navegador
2. Aperte **F12** para abrir o Developer Tools
3. Vá em **Console**
4. Procure por mensagens de erro em vermelho
5. Copie a mensagem de erro
6. Envie para o suporte

---

## 📞 Contato para Suporte

Se nenhuma solução funcionar:
- Email: suporte@realiving.com
- Telefone: (55) 855-233-1048
- WhatsApp: (55) 98765-4321

**Inclua:**
- Screenshot do erro
- URL exato onde o erro ocorre
- Navegador que está usando
- Mensagem de erro do console (F12)

---

**Última atualização**: Abril 1, 2026
