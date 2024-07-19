document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const message = document.getElementById('message');
    const gif = document.getElementById('gif');

    if (noButton && yesButton) {
        noButton.addEventListener('click', () => {
            noButton.style.display = 'none';
            yesButton.style.fontSize = '60px';
            yesButton.style.padding = '30px 60px';
            gif.src = 'https://media.giphy.com/media/5i7umUqAOYYEw/giphy.gif?cid=790b7611ce2yp0q9xuc7a7vm5w6p4b4w6lw575t7ocx16uog&ep=v1_gifs_search&rid=giphy.gif&ct=g';
            message.classList.remove('hidden');
        });

        yesButton.addEventListener('click', () => {
            window.location.href = './2.html';
        });
    }

    const catButtons = document.querySelectorAll('.cat-button');
    catButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = './3.html';
        });
    });
});
