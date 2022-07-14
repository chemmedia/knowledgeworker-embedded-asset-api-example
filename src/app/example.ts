const lorem = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`;
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const expandable = document.getElementById('expandable');

const create = () => {
    const element = document.createElement('p');
    element.classList.add('kw-paragraph');
    element.innerHTML = lorem;

    return element
};

const check = () => {
    if (expandable && removeButton) {
        if (expandable.childNodes.length <= 1) {
            removeButton.setAttribute('disabled', 'true');
        } else {
            removeButton.removeAttribute('disabled');
        }
    }
};

const add = () => {
    expandable && expandable.appendChild(create());
    check();
};

const remove = () => {
    expandable && expandable.lastChild && expandable.removeChild(expandable.lastChild);
    check();
};

export const start = () => {
    addButton && addButton.addEventListener("click", add);
    removeButton && removeButton.addEventListener("click", remove);
    add();
};