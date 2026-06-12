# One-time setup + deploy script for Windows
# Usage: powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1

$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host "`n=== YANN Blog Deploy ===" -ForegroundColor Cyan

# 1. GitHub
if (-not (gh auth status 2>$null)) {
    Write-Host "`n[1/4] GitHub login (browser will open)..." -ForegroundColor Yellow
    gh auth login --hostname github.com --git-protocol https --web
}

Write-Host "`n[2/4] Push to GitHub..." -ForegroundColor Yellow
$repo = "c0d9nqa3/MyBlog"
if (-not (gh repo view $repo 2>$null)) {
    gh repo create MyBlog --public --source=. --remote=origin --push
} else {
    git push -u origin main
}

Write-Host "`n[3/4] Enable GitHub Pages (Actions)..." -ForegroundColor Yellow
gh api "repos/$repo/pages" -X POST -f build_type=workflow 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "  Pages may already be enabled — check repo Settings > Pages" -ForegroundColor DarkGray
}

# 2. Cloudflare
if (-not (npx wrangler whoami 2>$null)) {
    Write-Host "`n[4/4] Cloudflare login (browser will open)..." -ForegroundColor Yellow
    npx wrangler login
} else {
    Write-Host "`n[4/4] Cloudflare already logged in" -ForegroundColor Green
}

Write-Host "`nDeploying to Cloudflare Pages..." -ForegroundColor Yellow
npm run deploy

Write-Host "`n=== Done ===" -ForegroundColor Green
Write-Host "  Cloudflare: https://yann-blog.pages.dev"
Write-Host "  GitHub:     https://c0d9nqa3.github.io/MyBlog"
Write-Host "`nOptional: add CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID to GitHub Secrets for auto-deploy on push."
