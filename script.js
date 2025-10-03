 (function(){
        const btn = document.querySelector('.mobile-toggle');
        const nav = document.getElementById('mainNav');
        btn && btn.addEventListener('click', function(){
          const open = nav.classList.toggle('open');
          btn.setAttribute('aria-expanded', open);
        });
      })();
    