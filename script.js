// FILTRO PARA BUSCAR  --Barra funcional de manera dinámica (filtrar mientras se escribe)
document.getElementById('mainSearch').addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.document-card'); // Tus tarjetas de tesis

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if(title.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});