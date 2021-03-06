(function () {
    //Elements UI
    const divOverlay = document.querySelector('.overlay');
    const modalClarif = document.querySelector('#clarification');
    const modalThanks = document.querySelector('#thanks');
    const burger = document.querySelector('.burger');
    const menuItem = document.querySelectorAll('.horizontal-menu__item');

    //Events
    const askBtn = document.querySelectorAll('.btn')[0];
    askBtn.addEventListener('click', onAskHandler);

    const pushBtn = document.querySelectorAll('.btn')[1];
    pushBtn.addEventListener('click', onPushHandler);

    modalClarif.addEventListener('click', e => {
        e.preventDefault();

        if (e.target.tagName === "BUTTON") {
            console.dir(e.target);
            onSendHadler();
        }
        if (e.target.classList.contains('modal__close')) {
            divOverlay.style.display = 'none';
            modalClarif.style.display = 'none';
        }
    });

    function onAskHandler(e) {
        divOverlay.style.display = 'initial';
        modalClarif.style.display = 'initial';
    }

    function onPushHandler(e) {
        divOverlay.style.display = 'initial';
        modalClarif.style.display = 'initial';
    }

    function onSendHadler() {
        const form = document.forms['form'];
        // console.dir(form);
        const inputName = form.elements['name'];
        const inputPhone = form.elements.phone;
        const inputEmail = form.elements.email;

        let nameValue, phoneValue, emailValue;

        nameValue = inputName.value;
        phoneValue = inputPhone.value;
        emailValue = inputEmail.value;
        console.log(`name is : ${nameValue} and phone - ${phoneValue} and email : ${emailValue}`);

        form.reset();

        modalClarif.style.display = 'none';
        modalThanks.style.display = 'initial';

        setTimeout(function () {
            fadeIn(modalThanks);
            divOverlay.style.display = 'none';
        }, 2200);

    }

    //Scroll and pageUp

    document.addEventListener("scroll", e => {
        const pageUp = document.querySelector('.pageUp');

        if (window.pageYOffset < 1600) {
            fadeIn(pageUp);

        } else {
            fadeOut(pageUp);
        }
    });

    function fadeIn(element) {
        element.style.transition = "opacity 3s";
        element.style.opacity = "0";
    }

    function fadeOut(element) {
        element.style.opacity = 1;
        element.style.transition = "opacity 2s";
        element.style.display = 'inline-block';
    }

    //Burger

    burger.addEventListener('click', e => {
        const hMenu = document.querySelector('.horizontal-menu');
        hMenu.classList.toggle('horizontal-menu_active');
        burger.classList.toggle('burger_active');

        menuItem.forEach(item => {
            item.addEventListener('click', e => {
                location.replace("https://www.cloudmist.ru/");
            })
        })
    });

})();