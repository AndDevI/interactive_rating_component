const fild = document.querySelector('fieldset');

for (let i = 0; i < 5; i++ ) {
    const divInputElement = document.createElement('div');
    divInputElement.classList.add("bg-darkBlue", "rounded-full", "relative", "p-3", "hover:text-black", "hover:bg-white", "divInput");

    const inputElement = document.createElement('input');
    inputElement.classList.add("hidden");
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('value', i + 1);
    inputElement.setAttribute('name', 'rating');
    inputElement.setAttribute('id', `rating-${i + 1}`);

    const labelElement = document.createElement('label');
    labelElement.classList.add("relative", "flex", "items-center", "justify-center", "cursor-pointer");
    labelElement.setAttribute('for', `rating-${i + 1}`);
    labelElement.innerText = i + 1;

    fild.appendChild(divInputElement);
    divInputElement.appendChild(inputElement);
    divInputElement.appendChild(labelElement);
}