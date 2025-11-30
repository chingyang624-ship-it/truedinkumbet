# Truedinkumbet Next.js 迁移指南

## 快速开始

### 1️⃣ 初始化 Next.js 项目

```bash
npx create-next-app@latest truedinkumbet-nextjs --typescript --tailwind --eslint
cd truedinkumbet-nextjs
```

### 2️⃣ 复制所有文件

复制 `NEXTJS_MIGRATION` 文件夹中的以下内容到新项目：

#### 配置文件

- `package.json` → 项目根目录（合并依赖）
- `next.config.js` → 项目根目录
- `tsconfig.json` → 项目根目录（可选，已在 create-next-app 中生成）
- `tailwind.config.ts` → 项目根目录（覆盖）
- `postcss.config.js` → 项目根目录（覆盖）

#### 应用文件

- `app/` 整个文件夹 → 项目的 `app/` 目录
- `components/` 整个文件夹 → 项目的 `components/` 目录
- `app/globals.css` → `app/globals.css`

### 3️⃣ 安装依赖

```bash
npm install
# 或
pnpm install
```

### 4️⃣ 启动开发服务器

```bash
npm run dev
# 访问 http://localhost:3000
```

## 项目结构

```
truedinkumbet-nextjs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 根布局
│   ├── page.tsx                 # 首页 (/)
│   ├── globals.css              # 全局样式
│   ├── slots/page.tsx           # /slots
│   ├── live-casino/page.tsx     # /live-casino
│   ├── sports/page.tsx          # /sports
│   ├── fishing/page.tsx         # /fishing
│   ├── crypto-casino/page.tsx   # /crypto-casino
│   ├── about/page.tsx           # /about
│   ├── info-centre/page.tsx     # /info-centre
│   ├── responsible-gaming/page.tsx  # /responsible-gaming
│   └── terms-conditions/page.tsx    # /terms-conditions
├── components/
│   ├── Header.tsx               # 顶部导航
│   ├── Footer.tsx               # 底部信息
│   └── landing/
│       ├── HeroSection.tsx
│       ├── TitleSection.tsx
│       ├── CarouselSection.tsx
│       ├── FeaturesSection.tsx
│       ├── GamesSection.tsx
│       ├── BonusesSection.tsx
│       └── FAQSection.tsx
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 主要改进

### ✅ Next.js 优势

1. **SSR (Server-Side Rendering)** - 每个页面都生成完整 HTML
2. **自动代码分割** - 只加载需要的代码
3. **图片优化** - 自动优化和响应式图片
4. **内置 SEO** - 每页面有独立 meta tags
5. **API Routes** - 可轻松添加后端 API
6. **更好的性能** - Lighthouse 评分更高

### 🔧 配置说明

#### `next.config.js`

- 配置了 builder.io 为允许的远程图片来源
- 可扩展以支持其他外部资源

#### `tailwind.config.ts`

- 包含所有 Radix UI 颜色变量
- 支持深色模式
- 配置了动画和过渡效果

## SEO 优化

每个页面都有自动生成的 meta tags：

```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: '...',
  openGraph: { ... }
}
```

## 部署到 Netlify

### 方法 1: 使用 Netlify 控制面板

1. 将代码推送到 GitHub
2. 在 Netlify 连接 GitHub 仓库
3. 构建命令: `npm run build`
4. 发布目录: `.next`

### 方法 2: 使用 Netlify CLI

```bash
npm install -g netlify-cli
netlify link
netlify deploy --prod
```

## 关键文件说明

### `app/layout.tsx`

根布局，定义全局 meta tags 和 Toaster 通知

### `components/Header.tsx`

顶部导航组件，使用 'use client' 标记使其可交互

### `components/Footer.tsx`

底部组件，包含所有链接和合作伙伴信息

### `app/page.tsx`

首页，由多个 section 组件组成

## 自定义页面

要添加新页面，例如 `/blog`:

```typescript
// app/blog/page.tsx
export const metadata = {
  title: 'Blog - Truedinkumbet',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* 您的内容 */}
      </main>
      <Footer />
    </div>
  )
}
```

## 故障排除

### 端口被占用

```bash
# 使用不同端口
npm run dev -- -p 3001
```

### 样式不加载

确保 tailwind 配置中包含了 `app` 目录：

```typescript
content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"];
```

## 性能提示

1. **使用 Image 组件** - 自动优化图片
2. **动态导入** - `import dynamic from 'next/dynamic'`
3. **路由预加载** - 自动预加载链接内容
4. **移除未使用的包** - 减少 bundle 大小

## 生成站点地图

安装 `next-sitemap`:

```bash
npm install next-sitemap
```

在 `next.config.js` 中配置并生成 sitemap.xml

## 环境变量

创建 `.env.local` 文件:

```
NEXT_PUBLIC_API_URL=https://api.truedinkumbet.com
NEXT_PUBLIC_AFFILIATE_URL=https://truedinkumbet.com/affiliate
```

## 下一步

1. ✅ 迁移完成 - 所有页面都已准备好
2. 🔄 自定义内容 - 添加您自己的内容和组件
3. 📊 添加分析 - 集成 Google Analytics
4. 🚀 部署 - 部署到 Netlify

---

**需要帮助？** 查看 Next.js 官方文档: https://nextjs.org/docs
