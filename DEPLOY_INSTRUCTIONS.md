# 🚀 Deploy Instructions - REALiving®

## Quick Start

### 1. Baixe os arquivos
- Todos os arquivos estão prontos em `realiving-deploy/`

### 2. Suba para o GitHub

```bash
# Clone seu repositório (ou crie um novo)
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Copie todos os arquivos de realiving-deploy para cá
# (Substitua o conteúdo da pasta)

# Faça commit
git add .
git commit -m "Add REALiving website - ready for deployment"
git push origin main
```

### 3. Configure o Netlify

1. Vá para https://app.netlify.com
2. Clique em **"New site from Git"**
3. Selecione seu repositório do GitHub
4. **Build command**: `pnpm run build`
5. **Publish directory**: `dist/public`
6. Clique em **"Deploy site"**

**Pronto! Seu site estará ao vivo em minutos!** ✅

---

## Estrutura do Projeto

```
realiving-deploy/
├── client/                 # Frontend React
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── server/                # Backend (placeholder)
├── shared/                # Shared types
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
├── netlify.toml           # Netlify configuration ⭐
└── DEPLOY_INSTRUCTIONS.md # This file
```

---

## Arquivos Importantes

### ✅ `netlify.toml`
Configuração automática do Netlify - **NÃO DELETE!**

### ✅ `package.json`
Contém todas as dependências e scripts de build

### ✅ `client/index.html`
Template HTML principal - **IMPORTANTE: Este arquivo DEVE estar no repositório!**

---

## Troubleshooting

### ❌ Erro: "Could not resolve entry module 'index.html'"
**Solução**: Certifique-se de que `client/index.html` foi enviado para o GitHub
```bash
git add client/index.html
git commit -m "Ensure index.html is tracked"
git push
```

### ❌ Erro: "pnpm: command not found"
**Solução**: Netlify instalará automaticamente. Se não funcionar, configure em Build settings:
- Node version: 22.13.0
- Package manager: pnpm

### ❌ Erro: "Module not found"
**Solução**: Certifique-se de que `node_modules` NÃO está no `.gitignore` (está correto por padrão)

---

## Variáveis de Ambiente

Se precisar de variáveis de ambiente no Netlify:

1. Vá para **Site settings** → **Build & deploy** → **Environment**
2. Adicione as variáveis necessárias
3. Redeploy o site

---

## Performance Tips

- ✅ Netlify comprime automaticamente com gzip
- ✅ CDN global para melhor velocidade
- ✅ Cache headers configurados em `netlify.toml`
- ✅ Minificação automática do CSS e JS

---

## Próximos Passos

1. **Domínio personalizado**: Em Site settings → Domain management
2. **SSL/HTTPS**: Automático com Netlify
3. **Analytics**: Configure em Site settings → Analytics
4. **Monitoramento**: Ative em Site settings → Monitoring

---

## Suporte

- 📧 Email: info@REALiving.com
- 📞 Phone: 855.233.1048
- 🌐 Website: https://www.realiving.com

---

**Criado em**: Abril 1, 2026
**Status**: ✅ Pronto para produção
