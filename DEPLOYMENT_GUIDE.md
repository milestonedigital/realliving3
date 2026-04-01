# 🚀 Guia de Deploy - REALiving com TinaCMS

## 📋 O que você recebeu:

- ✅ Código completo do site (React + Express + TinaCMS)
- ✅ Admin panel com login/logout
- ✅ TinaCMS configurado com suas credenciais
- ✅ Banco de dados (Drizzle ORM)
- ✅ Testes automatizados

## 🔧 Credenciais TinaCMS Configuradas:

```
Client ID: bd936801-9e30-4584-b0fa-4b8adf05c8e0
Token: d06c9632ad0650a5fc9d83c3a22284d56958a777
```

---

## 📦 Passo 1: Extrair a pasta

```bash
unzip realiving-deploy-final.zip
cd realiving
```

---

## 🔌 Passo 2: Instalar dependências

```bash
pnpm install
# ou
npm install
```

---

## 🧪 Passo 3: Testar localmente

```bash
pnpm dev
# ou
npm run dev
```

Acesse: `http://localhost:3000`

### Testar Admin Panel:
- URL: `http://localhost:3000/admin-login`
- Username: `admin`
- Password: `realiving2024`

### Testar TinaCMS:
- URL: `http://localhost:3000/admin`
- Faça login com sua conta TinaCMS

---

## 🌐 Passo 4: Deploy no Netlify

### Opção A: Deploy automático via GitHub

1. **Criar repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/seu-usuario/realiving.git
   git push -u origin main
   ```

2. **Conectar ao Netlify**
   - Acesse: https://app.netlify.com
   - Clique em "New site from Git"
   - Selecione seu repositório
   - Configure:
     - Build command: `pnpm build` (ou `npm run build`)
     - Publish directory: `dist`

3. **Adicionar variáveis de ambiente**
   - Vá em Settings → Environment
   - Adicione as variáveis necessárias (se houver .env)

4. **Deploy**
   - Clique em "Deploy site"
   - Aguarde o build completar

### Opção B: Deploy manual

```bash
# Build o projeto
pnpm build

# Fazer deploy (Netlify CLI)
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## ✅ Após o Deploy

### 1. Acessar Admin Panel
```
https://seu-site.netlify.app/admin-login
```

Credenciais:
- Username: `admin`
- Password: `realiving2024`

### 2. Acessar TinaCMS
```
https://seu-site.netlify.app/admin
```

Faça login com sua conta TinaCMS para editar conteúdo.

### 3. Verificar Funcionalidades

- ✅ Homepage carrega
- ✅ Admin login funciona
- ✅ Admin panel abre
- ✅ TinaCMS carrega
- ✅ Pode editar conteúdo

---

## 📁 Estrutura do Projeto

```
realiving/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── pages/         # Páginas (Home, AdminLogin, AdminPanel, etc)
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── App.tsx        # Rotas principais
│   │   └── main.tsx       # Entry point
│   └── public/            # Arquivos estáticos
├── server/                # Backend Express + tRPC
│   ├── routers/           # API routes (admin.ts)
│   ├── db.ts              # Database helpers
│   └── _core/             # Core infrastructure
├── tina/                  # TinaCMS config
│   ├── config.ts          # Configuração (credenciais aqui!)
│   └── auth.ts            # Autenticação
├── drizzle/               # Database schema
├── package.json           # Dependências
├── vite.config.ts         # Vite config
└── netlify.toml           # Netlify config
```

---

## 🔐 Segurança

### Senhas & Credenciais

**IMPORTANTE**: Nunca commit credenciais reais no GitHub!

1. **Variáveis de Ambiente**
   - Crie arquivo `.env.local` (não commit)
   - Adicione variáveis sensíveis lá

2. **Netlify Environment**
   - Adicione variáveis no painel do Netlify
   - Não aparecem no GitHub

3. **Credenciais TinaCMS**
   - Já estão configuradas em `tina/config.ts`
   - Mantenha seguras!

---

## 🆘 Troubleshooting

### Erro: "Cannot find module"
```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro: "Port 3000 already in use"
```bash
# Usar porta diferente
pnpm dev -- --port 3001
```

### TinaCMS não carrega
- Verifique credenciais em `tina/config.ts`
- Verifique conexão com internet
- Limpe cache do navegador

### Admin login não funciona
- Verifique se servidor está rodando
- Verifique console do navegador (F12)
- Tente credenciais: admin / realiving2024

---

## 📞 Suporte

Se tiver problemas:
1. Verifique este guia
2. Verifique logs do servidor
3. Verifique console do navegador (F12)
4. Contate seu desenvolvedor

---

**Status**: ✅ Pronto para Deploy
**Data**: Abril 1, 2026
**Versão**: 1.0
