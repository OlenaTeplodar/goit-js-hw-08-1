import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormLocalStorage, 500));

function getData() {
        try {
            const dataJSON = localStorage.getItem(STORAGE_KEY);

            if (!dataJSON) return;

            const formData = JSON.parse(dataJSON);

            const keys = Object.keys(formData);

            for (let key of keys) {
                refs.form.elements[key].value = formData[key];
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }

getData();

function onFormLocalStorage(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData);

    e.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}
