function showCard(cardId) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.id === cardId) {
            card.classList.add('active');
            card.classList.remove('fade-out');
        } else {
            card.classList.add('fade-out');
            setTimeout(() => {
                card.classList.remove('active');
            }, 500);
        }
    });
}
