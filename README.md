# React Custom Hooks

Projeto demonstrando o uso de custom hooks em React para detectar status de conexão online/offline.

## 📋 Funcionalidades

- **Status de Conexão**: Detecta automaticamente quando o usuário está online ou offline
- **Interface Reativa**: Componentes que respondem ao status da conexão
- **Custom Hook**: `useOnlineStatus` reutilizável em toda a aplicação

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🛠️ Tecnologias

- **React 19** - Biblioteca de interface
- **Vite** - Build tool e servidor de desenvolvimento
- **ESLint** - Linting e qualidade de código

## 📁 Estrutura

```
src/
├── components/
│   ├── SaveButton/     # Botão que depende do status online
│   └── StatusBar/      # Barra de status de conexão
├── hooks/
│   └── useOnlineStatus.jsx  # Custom hook para detectar conexão
└── App.jsx
```

## 🔧 Custom Hook: useOnlineStatus

Hook que monitora o status de conexão da internet usando os eventos `online` e `offline` do navegador.

```jsx
const isOnline = useOnlineStatus();
```

Retorna `true` quando online e `false` quando offline.
