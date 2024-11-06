const accessKey = '8PljNZ-C4gMJ0ImsEgq1aNjcN6VY-P7QImg_-EwISw4'; // Access Key da API

async function loadImages(query = 'cyberpunk', count = 22) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${accessKey}`);
    const data = await response.json();
    
    const homePage = document.getElementById('home-page');
    homePage.innerHTML = ''; // Limpa o conteúdo antes de adicionar novas imagens

    data.results.forEach(foto => {
      const imgElement = document.createElement('img');
      imgElement.src = foto.urls.small; // Usa a URL da imagem em tamanho pequeno
      imgElement.alt = foto.alt_description || 'Imagem do Unsplash';
      homePage.appendChild(imgElement);
    });
  } catch (error) {
    console.error('Erro ao carregar imagens:', error);
  }
};

// Chama a função para carregar imagens ao abrir a página
loadImages();

// Função da barra de pesquisa
function searchImage() {
  const search = document.getElementById("header-search").value.trim();
  loadImages(search, 22);
};
