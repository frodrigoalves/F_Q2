# Logo Upload Instructions

## 📁 Structure
```
/workspaces/front10/assets/logo/
├── logo_H_and_V.jpg    (Horizontal/Vertical - para Hub e páginas)
└── logo_opcoes.png     (Opções/Vertical - para Portal)
```

## 📤 Upload via Git

### Option 1: Via VS Code / GitHub Desktop
1. Copy files to `/workspaces/front10/assets/logo/`
2. Commit with message: "Add logo assets (H&V + opcoes versions)"
3. Push to repository

### Option 2: Via Command Line
```bash
# From your local machine
cp "C:\Users\Lenga\Desktop\logo\frontend\LP2\logo_H_and_V.jpg" /workspaces/front10/assets/logo/
cp "C:\Users\Lenga\Desktop\logo\frontend\LP2\logo_opcoes.png" /workspaces/front10/assets/logo/

# Then
cd /workspaces/front10
git add assets/logo/
git commit -m "Add SINGUL AI logo assets"
git push
```

## 🔄 Auto-sync to Server
After pushing, the files will be available at:
- `http://localhost:8080/shared/assets/logo/logo_H_and_V.jpg`
- `http://localhost:8080/shared/assets/logo/logo_opcoes.png`

The system will automatically:
- Use **logo_opcoes.png** on Portal (vertical layout)
- Use **logo_H_and_V.jpg** on Hub & other pages (horizontal layout)

## ✅ Verification
Check if logos are loaded:
```bash
curl -I http://localhost:8080/shared/assets/logo/logo_H_and_V.jpg
curl -I http://localhost:8080/shared/assets/logo/logo_opcoes.png
```
