# Grimório do Mestre Cronista - Hub de Campanhas

Bem-vindo ao código-fonte do Hub de Campanhas do Mestre Cronista. Este projeto foi construído com [Astro](https://astro.build/) para ser um site de conteúdo extremamente rápido, otimizado para SEO e fácil de manter.

## ✨ Visão Geral

Este site serve como um portfólio digital e hub central para todas as campanhas de RPG de mesa mestradas pelo DM Yan. Os principais objetivos são:

- **Performance:** Carregamento quase instantâneo graças à arquitetura de "ilhas" do Astro.
- **Bilíngue:** Suporte completo para Português (pt-BR) e Inglês (en-US) com rotas dedicadas.
- **Design Responsivo:** Experiência de usuário otimizada para desktops, tablets e celulares.
- **Fácil Manutenção:** Conteúdo e dados centralizados para facilitar atualizações.

## 🚀 Estrutura do Projeto

O projeto segue a estrutura padrão do Astro, com algumas convenções específicas para este site.

/├── public/│   ├── images/             # Imagens estáticas (banners de campanha, etc.)│   └── favicon.svg         # Ícone do site├── src/│   ├── components/         # Componentes reutilizáveis (.astro)│   │   ├── ScheduleCard.astro│   │   └── ...│   ├── i18n/│   │   └── ui.ts           # Arquivo central com todas as traduções│   ├── layouts/│   │   └── BaseLayout.astro # Layout principal do site│   ├── pages/│   │   ├── [lang]/│   │   │   ├── index.astro       # Página Inicial│   │   │   └── campaigns.astro   # Página de Campanhas│   │   └── index.astro         # Redirecionamento da raiz│   └── styles/│       └── global.css        # Estilos globais e variáveis de cor├── astro.config.mjs        # Arquivo de configuração do Astro├── package.json            # Dependências e scripts do projeto└── README.md               # Este arquivo
### Pastas Chave

-   `public/images/campaigns/`: **IMPORTANTE!** Coloque todas as imagens (banners) das suas campanhas aqui.
-   `src/components/`: Contém os blocos de construção da UI. Cada componente é autônomo, com seu próprio HTML, CSS e JavaScript (se necessário).
-   `src/i18n/ui.ts`: **O coração do conteúdo.** Todas as strings de texto usadas no site estão aqui, separadas por idioma. Para alterar um texto, edite este arquivo.
-   `src/pages/[lang]/campaigns.astro`: **Onde a mágica acontece.** Este arquivo contém os dados de todas as suas campanhas. Para adicionar, remover ou atualizar uma mesa, você editará o array `weeklySchedule` neste arquivo.

## ⚙️ Como Rodar o Projeto Localmente

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
3.  Abra seu navegador e acesse `http://localhost:4321`.

## ✏️ Guia de Manutenção Futura

### Como Adicionar uma Nova Campanha

1.  **Abra o arquivo:** `src/pages/[lang]/campaigns.astro`.
2.  **Encontre o array:** Localize a constante `weeklySchedule`.
3.  **Adicione um novo objeto:** Copie e cole um dos objetos existentes dentro do array e altere seus valores para refletir a nova campanha.
    -   **`status`**: Use `"recruiting"`, `"full"` ou `"available"`.
    -   **`image`**: Adicione o caminho para a imagem do banner, que deve estar em `public/images/campaigns/`.
    -   **`premise`**: Escreva a sinopse da campanha aqui. Ela aparecerá no modal.
4.  Salve o arquivo. O site será atualizado automaticamente.

### Como Alterar um Texto ou Tradução

1.  **Abra o arquivo:** `src/i18n/ui.ts`.
2.  **Encontre a chave:** Localize a chave de texto que você deseja alterar (ex: `'welcome.title'`).
3.  **Edite o valor:** Altere o texto para as versões em `pt-BR` e `en-US`.
4.  Salve o arquivo.

### Como Alterar o Estilo

-   Para mudanças globais (cores, fontes), edite `src/styles/global.css`.
-   Para mudanças específicas de um componente (ex: o card de campanha), edite a tag `<style>` dentro do arquivo do componente correspondente (ex: `src/components/ScheduleCard.astro`).
