   // Conteúdo do script.js (para o menu móvel)
        document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.getElementById('menu-btn');
            const navigation = document.querySelector('.navigation');

            if (menuBtn && navigation) {
                menuBtn.addEventListener('click', function() {
                    navigation.classList.toggle('active');
                });
            }
        });