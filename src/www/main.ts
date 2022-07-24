import FormValidation from './Modules/FormValidation';

const form = document.querySelector('form');

if (form) new FormValidation(form).init();
