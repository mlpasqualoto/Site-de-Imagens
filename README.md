# Foto Web Site

![image](https://github.com/user-attachments/assets/dfced8cc-0d9e-495c-8333-a4bc8431aa60)

Este é um projeto de um site de fotos simples que utiliza a API do Unsplash para buscar e exibir imagens com base em uma pesquisa. O site oferece uma interface para pesquisar imagens, exibir resultados e navegar por elas.

## Funcionalidades

- **Barra de pesquisa**: permite que o usuário busque por imagens através de palavras-chave.
- **Exibição de imagens**: as imagens são carregadas e exibidas em um layout responsivo usando o CSS Grid.
- **Navegação simples**: o cabeçalho contém links para diferentes seções (Home, Explore, Create) e ícones de notificações.

## Tecnologias Usadas

- **HTML5**: para a estrutura da página.
- **CSS3**: para o estilo da página, incluindo um layout responsivo.
- **JavaScript**: para interatividade e consumo da API do Unsplash.
- **API do Unsplash**: usada para buscar imagens e exibi-las no site.

## Estrutura do Código

- **HTML**: Estrutura da página, incluindo campo de pesquisa e exibição das imagens.
- **CSS**: Estilos responsivos para exibição das imagens em diferentes dispositivos.
- **JavaScript**:
  - **`loadImages(query, count)`**: Carrega as imagens da API Unsplash com base na pesquisa.
  - **`searchImage()`**: Realiza a busca quando o usuário clica no botão de pesquisa.

### Exemplo de Uso

1. Digite um termo na barra de pesquisa.
2. Clique no ícone de busca.
3. As imagens relacionadas ao termo serão exibidas.
