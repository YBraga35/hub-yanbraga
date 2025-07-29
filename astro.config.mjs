import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuração de Internacionalização (i18n)
  // Essencial para o site bilíngue
  i18n: {
    // O idioma padrão do seu site
    defaultLocale: 'pt-BR',
    // Lista de todos os idiomas suportados
    locales: ['pt-BR', 'en-US'],
    routing: {
      // Não adiciona o prefixo /pt-BR/ para o idioma padrão. 
      // A URL será seuhub.com/ para português e seuhub.com/en-US/ para inglês.
      prefixDefaultLocale: false
    }
  }
});
