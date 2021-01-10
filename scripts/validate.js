const validationParams = {
    formSelector: '.form',
    inputSelector: '.form__input',
    inputErrorClass: 'form__input--type--error',
    errorClass: 'form__input-error--active'
};

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add(validationParams.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationParams.errorClass);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if(errorElement)
    {
    inputElement.classList.remove(validationParams.inputErrorClass);
    errorElement.classList.remove(validationParams.errorClass);
    errorElement.textContent = '';
    }
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationParams.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
        });
    });
};

const enableValidation = (validationParams) => {
    const formList = Array.from(document.querySelectorAll(validationParams.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, validationParams);
    });
};

enableValidation(validationParams);