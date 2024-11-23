Filmes React 🎥
Este é um projeto React que consome a API do The Movie Database (TMDB) para exibir informações sobre filmes, incluindo os melhores avaliados, pesquisa por título e detalhes de filmes.

🚀 Funcionalidades
Página inicial: Exibe os filmes mais bem avaliados.
Barra de pesquisa: Permite buscar filmes pelo título.
Detalhes do filme: Mostra informações detalhadas de um filme específico (em desenvolvimento).
Design responsivo: Interface adaptada para diferentes dispositivos.
Estilização personalizada: CSS customizado para uma experiência de usuário agradável.
🛠️ Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces.
React Router: Gerenciamento de rotas.
TMDB API: Para obter informações sobre filmes.
CSS: Estilização personalizada.
React Icons: Para ícones visuais.
Vite: Ferramenta para desenvolvimento e build do projeto.
🌐 API Utilizada
O projeto consome a API pública do TMDB. Certifique-se de criar uma conta no TMDB para obter sua própria chave de API.

Documentação: TMDB API
Configuração do arquivo .env:
env
Copiar código
VITE_API_KEY=sua_chave_de_api_aqui
VITE_API=https://api.themoviedb.org/3/movie/
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_IMG=https://image.tmdb.org/t/p/w500/
📂 Estrutura do Projeto
bash
Copiar código
src/
├── components/
│   ├── MovieCard.jsx       # Componente para exibir informações do filme
│   ├── Navbar.jsx          # Barra de navegação
├── pages/
│   ├── Home.jsx            # Página inicial com os melhores filmes
│   ├── Search.jsx          # Página de busca de filmes
│   ├── Movie.jsx           # Página de detalhes do filme (em desenvolvimento)
├── App.jsx                 # Componente principal
├── main.jsx                # Entrada do projeto
├── styles/
│   ├── Navbar.css          # Estilo da barra de navegação
│   ├── MovieGrid.css       # Estilo para exibir os filmes
🔧 Instalação e Execução
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install
Configure o .env: Adicione sua chave da API TMDB e os valores de URL no arquivo .env.

Execute o projeto:

bash
Copiar código
npm run dev
Acesse no navegador: http://localhost:5173

🖼️ Prévia do Projeto
Página Inicial
Exibe os filmes mais bem avaliados, organizados de forma atraente.

Barra de Pesquisa
Interface simples e funcional para encontrar filmes por título.

📚 Próximos Passos
Implementar a página de detalhes do filme.
Melhorar a experiência do usuário com animações e transições.
Adicionar paginação nos resultados de busca.
📝 Licença
Este projeto é de código aberto e está disponível sob a licença MIT.

