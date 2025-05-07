document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: 'Henrique e Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Jorge e Mateus', image: './img/artista-jorge-mateus.jpg'},
        {name: 'Zé Neto e Cristiano', image: './img/artista-ze-neto.jpg'},
        {name: 'Gustavo Lima', image: './img/artista-gustavo-limma.jpg'},
        {name: 'Luan Santana', image: './img/artista-luan-santana.jpg'},
        {name: 'Matheus e Kauan', image: './img/artista-mateus-kauan.jpg'}
    ]
    
    const albumsData = [
        {name: 'White Noise', artist:'Sleep John', image: './img/album-white-noise.jpg'},
        {name: 'O céu explica tudo', artist:'Henrique e Julaino', image: './img/album-ceu-explica.jpg'},
        {name: 'Nada como um dia apos o outro', artist:'Racionais', image: './img/album-racionais.jpg'},
        {name: 'HIT ME AND SOFT', artist:'Billie Eilish', image: './img/album-hit-me.jpg'},
        {name: 'CAJU', artist:'Liniker', image: './img/album-caju.jpg'},
        {name: 'Escandalo intimo', artist:'Luiza Sonza', image: './img/album-escandalo.jpg'}
    ]

    const albumGrid = document.querySelector('.albums-grid');
    const artistsGrid = document.querySelector('.artists-grid');

    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');
        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;
        albumGrid.appendChild(albumCard);
    });

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `;
        artistsGrid.appendChild(artistCard);
    })

})
