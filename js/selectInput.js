const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('click', () => {
        let ratingSelected = input.value;

        const textValue = document.querySelector('#textRating');
        textValue.innerText = `You selected ${ratingSelected} out of 5`;

        const divInputs = document.querySelectorAll('.divInput');

        divInputs.forEach(divInput => {
            if (divInput.querySelector(`input[id="rating-${ratingSelected}"]`)) {
                divInput.classList.replace('bg-darkBlue', 'bg-orange');
                divInput.classList.add("text-black");
            } else {
                divInput.classList.replace('bg-orange', 'bg-darkBlue');
                divInput.classList.remove("text-black");
            }
        });
    });
});


const submit = document.querySelector('button');

submit.addEventListener('click', () => {
    
    
    const sectionRating = document.querySelector('#rating');
    const sectionThanks = document.querySelector('#thanks');

    if (!sectionRating.classList.contains('hidden')) {
        sectionRating.classList.replace('opacity-100', 'opacity-0');
        
        setTimeout(() => {
            sectionRating.classList.add('hidden');
        }, 300);

        sectionThanks.classList.remove('hidden');
        setTimeout(() => {
            sectionThanks.classList.replace('opacity-0', 'opacity-100');
        }, 10); 
    }
});
