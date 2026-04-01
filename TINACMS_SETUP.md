# TinaCMS Setup Guide - REALiving

## 🚀 Quick Start

### Step 1: Create TinaCMS Account
1. Go to https://app.tina.io
2. Sign up for free account
3. Create a new project

### Step 2: Get Your Credentials
1. In TinaCMS dashboard, go to **Projects**
2. Select your project
3. Go to **Settings** → **Tokens**
4. Copy your **Client ID** and **Token**

### Step 3: Update Configuration
Edit `tina/config.ts` and replace:
```typescript
clientId: "YOUR_CLIENT_ID",  // Paste your Client ID here
token: "YOUR_TOKEN",          // Paste your Token here
```

### Step 4: Build & Deploy
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Push to GitHub
git add .
git commit -m "Configure TinaCMS"
git push origin main

# Netlify will auto-deploy
```

### Step 5: Access Admin
After deployment, visit: `https://your-site.netlify.app/admin`

---

## 📁 Project Structure

```
realiving/
├── tina/
│   └── config.ts          ← TinaCMS configuration
├── client/
│   └── public/
│       └── admin/
│           └── index.html  ← Admin interface
├── content/               ← Your content (auto-created)
│   ├── blog/
│   └── pages/
└── ...
```

---

## 🎯 What You Can Do

✅ **Edit Blog Posts** - Create, update, delete blog content
✅ **Manage Pages** - Edit website pages
✅ **Upload Media** - Add images and files
✅ **Git Integration** - Changes auto-commit to GitHub
✅ **Preview** - See changes before publishing

---

## 🔧 Customization

### Add New Collection
Edit `tina/config.ts`:
```typescript
{
  label: "Services",
  name: "services",
  path: "content/services",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
    },
    // Add more fields...
  ],
}
```

### Add Custom Fields
```typescript
{
  type: "string",
  label: "Author",
  name: "author",
},
{
  type: "number",
  label: "Price",
  name: "price",
},
{
  type: "boolean",
  label: "Published",
  name: "published",
},
```

---

## 🐛 Troubleshooting

### Admin page shows blank
- Check browser console for errors
- Verify TinaCMS script loaded
- Check Client ID and Token

### Can't edit content
- Verify credentials in `tina/config.ts`
- Check GitHub token permissions
- Ensure you're logged in to TinaCMS

### Changes not saving
- Check network tab in browser
- Verify GitHub integration
- Check TinaCMS project settings

---

## 📚 Resources

- **TinaCMS Docs**: https://tina.io/docs/
- **GitHub Integration**: https://tina.io/docs/advanced/git/
- **Schema Reference**: https://tina.io/docs/schema/

---

## 💡 Tips

1. **Test Locally First**
   ```bash
   npm run dev
   # Visit http://localhost:3000/admin
   ```

2. **Backup Your Content**
   - TinaCMS stores content in your GitHub repo
   - All changes are version controlled

3. **Team Collaboration**
   - Multiple users can edit simultaneously
   - Changes merge automatically

---

## 🆘 Need Help?

- Check TinaCMS documentation: https://tina.io/docs/
- Visit TinaCMS community: https://community.tina.io/
- Contact support: support@tina.io

---

**Status**: ✅ Ready for configuration
**Last Updated**: April 1, 2026
