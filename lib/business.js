export const address = 'Alameda Campomar, 565 - Cidade Praiana, Rio das Ostras - RJ';
export const mapQuery = encodeURIComponent('Box 122 Insulfilm, ' + address);
export const maps = 'https://www.google.com/maps/search/?api=1&query=' + mapQuery;
export const directions = 'https://www.google.com/maps/dir/?api=1&destination=' + mapQuery;
export const whatsapp = (message = 'Olá! Gostaria de pedir um orçamento com a Box 122.') =>
  'https://wa.me/5522992910086?text=' + encodeURIComponent(message);

export const nav = [
  ['Serviços', '#servicos'], ['Agendamento', '#agendamento'], ['Galeria', '#galeria'], ['Depoimentos', '#depoimentos'],
  ['Localização', '#localizacao'], ['Contato', '#contato'],
];

export const photos = {
  facade: { file: 'fachada', label: 'Fachada da Box 122 na Alameda Campomar' },
  sign: { file: 'placa-servicos', label: 'Placa de serviços na entrada da Box 122' },
  suv: { file: 'suv-no-box', label: 'SUV vermelho no box da Box 122' },
  front: { file: 'carro-frente', label: 'Carro branco na entrada do box' },
  bay: { file: 'carros-no-box', label: 'Sedã branco no box da Box 122' },
  home: { file: 'pelicula-residencial', label: 'Aplicação de película no vidro de uma janela residencial' },
  audio: { file: 'som-e-acessorios', label: 'Equipamentos de som expostos na Box 122' },
};

export const bookingOptions = ['Películas automotivas', 'Películas residenciais', 'Películas comerciais', 'Som e acessórios automotivos', 'Envelopamento', 'Alarmes e bloqueadores', 'Reparo de vidros e travas elétricas'];

export const services = [
  { title: 'Películas automotivas', photo: photos.bay, text: 'Mais conforto ao dirigir, menos calor dentro do carro e a privacidade que você procura. Consulte as opções de proteção UV e acabamento para seu veículo.' },
  { title: 'Películas residenciais', photo: photos.home, text: 'Mais conforto nos ambientes que recebem sol direto. Encontre a película adequada aos vidros da sua casa ou apartamento.' },
  { title: 'Som e acessórios automotivos', photo: photos.audio, text: 'O som automotivo faz parte da atuação da Box 122. Converse com a equipe sobre a instalação de som e acessórios compatíveis com seu carro.' },
];

// Preencha somente com avaliações verificadas e respectivos links de origem.
// Formato: { author: 'Nome público', quote: 'Trecho real', url: 'https://...' }
export const reviews = [];

// Cadastre aqui somente perfis oficiais confirmados.
export const socialLinks = [];
