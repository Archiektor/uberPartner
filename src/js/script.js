(function () {
    //Elements UI
    const divOverlay = document.querySelector('.overlay');
    const modalClarif = document.querySelector('#clarification');
    const modalThanks = document.querySelector('#thanks');

    //Events
    const askBtn = document.querySelectorAll('.btn')[0];
    askBtn.addEventListener('click', onAskHandler);

    const pushBtn = document.querySelectorAll('.btn')[1];
    pushBtn.addEventListener('click', onPushHandler);

    // const sendBtn = document.querySelectorAll('.btn_special');
    // sendBtn.addEventListener('click', onSendHadler);

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
            modalThanks.style.display = 'none';
            divOverlay.style.display = 'none';
        }, 2200);

    }

    //Scroll and pageUp

    document.addEventListener("scroll", e => {
        const pageUp = document.querySelector('.pageUp');

        // console.log('Current scroll from the top: ' + window.pageYOffset);
        if (window.pageYOffset < 1600) {
            pageUp.style.transition = "opacity 1s";
            pageUp.style.opacity = "0";
            // pageUp.style.display = 'none';

        } else {
            pageUp.style.display = 'inline-block';
            // pageUp.style.transform = "rotate(15deg)";
            pageUp.style.opacity = 1;
            pageUp.style.transition = "opacity 2s";


        }
    });

})();