# Magic Card

移动端项目：Vue 3 + TypeScript + Vue Router 5 + Pinia + VueUse + Naive UI（按需）+ Tailwind 4 + Axios 封装 + ESLint + Vitest。

## 技术栈

- **Vite** + **Vue 3** + **TypeScript**
- **Vue Router 5**、**Pinia**、**@vueuse/core**
- **Naive UI**（按需引入）、**Tailwind 4**（样式优先级高于 Naive）
- **Axios** 封装请求
- **ESLint** + **Prettier**
- **Vitest** + **@vue/test-utils** 单元测试

## 环境要求

- **Node.js >= 18**（推荐 20+）。若使用 nvm，在项目根目录执行 `nvm use`（已提供 `.nvmrc`）。
- 若启动或构建报错 `Unexpected token '||='` 或 `'??='`，说明当前 Node 版本过低，请升级到 18 或以上。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` | 生产构建 |
| `npm run preview` | 预览构建产物 |
| `npm run lint` | ESLint 检查 |
| `npm run lint:fix` | ESLint 自动修复 |
| `npm run format` | Prettier 格式化 |
| `npm run test` | Vitest 监听模式 |
| `npm run test:run` | Vitest 单次运行 |
| `npm run test:coverage` | 覆盖率报告 |

## 环境变量

在 `.env` / `.env.production` 中配置：

- `VITE_API_BASE`：接口 baseURL
- `VITE_APP_TITLE`：应用标题

## 目录说明

- `src/api`：Axios 封装与接口模块
- `src/components`：公共组件
- `src/composables`：组合式函数（自动导入）
- `src/layouts`：布局
- `src/router`：路由
- `src/stores`：Pinia 状态
- `src/views`：页面
- `tests/unit`：单元测试
