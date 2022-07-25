import Constants from '../Constants/Constants';

type TInput = HTMLInputElement | HTMLTextAreaElement;

const setSmallMessage = (element: TInput, txt?: string | null, show: boolean = false) => {
  const small = element.parentElement?.querySelector('.small');

  if (small) {
    if (txt) small.innerHTML = txt;
    if (show) small.classList.remove('d-none');
    else if (!small.classList.contains('d-none')) small.classList.add('d-none');
  }
};

const maxLen = (event: Event, input: TInput, max: number, small: boolean = false) => {
  const target = event.target as HTMLInputElement;

  if (target.value.length > max) {
    const value = target.value.split('');
    const arr: string[] = [];
    for (let i = 0; i < max; i++) arr.push(value[i]);
    target.value = arr.join('');
  }
  if (small) setSmallMessage(input, (max - target.value.length).toString(), true);
};

const minLen = (event: Event, input: TInput, min: number) => {
  const target = event.target as HTMLInputElement;

  if (target.value.length < min) setSmallMessage(input, null, true);
  else setSmallMessage(input, null, false);
};

const setEmailValidation = (input: HTMLInputElement) => {
  input.addEventListener('input', (event) => {
    let error: boolean = false;
    const { value } = event.target as HTMLInputElement;
    const arr: Array<string> = value.split('');
    const obj = { at: arr.includes('@'), dot: arr.includes('.') };
    const afterAt = value.split('@')[1];
    const beforeAt = value.split('@')[0];

    if (!afterAt || (afterAt !== undefined && afterAt.length < 4)) error = true;
    if (!beforeAt || (beforeAt !== undefined && beforeAt.length < 2)) error = true;
    if (!obj.at) error = true;
    if (!obj.dot) error = true;
    if (value.split(' ').length > 1) error = true;

    if (error) setSmallMessage(input, null, true);
    else setSmallMessage(input);
  });
};

const action = (input: TInput, id: string) => {
  const setMaxLenght = (max: number, small: boolean = false) => {
    input.addEventListener('input', (event) => maxLen(event, input, max, small));
  };

  const setMinLenght = (min: number) => {
    input.addEventListener('input', (event) => minLen(event, input, min));
  };

  const setMaxAndMinLenght = (max: number, min: number) => {
    input.addEventListener('input', (event) => {
      minLen(event, input, min);
      maxLen(event, input, max);
    });
  };

  switch (input.id) {
    case Constants.BIO_ID:
      setMaxLenght(Constants.BIO_MAX_LENGHT, true);
      break;
    case Constants.NAME_ID:
      setMaxAndMinLenght(Constants.NAME_MAX_LENGHT, Constants.NAME_MIN_LENGHT);
      break;
    case Constants.LAST_NAME_ID:
      setMaxAndMinLenght(Constants.LAST_NAME_MAX_LENGHT, Constants.LAST_NAME_MIN_LENGHT);
      break;
    case Constants.EMAIL_ID:
      setEmailValidation(input as HTMLInputElement);
      break;
    case Constants.PASSWORD_ID:
      setMinLenght(Constants.PASSWORD_MIN_LENGHT);
      break;
    default:
      setMaxLenght(Constants.MAX_LENGHT_DEFAULT);
      break;
  }
};

const formSubmit = (event: SubmitEvent) => {
  event.preventDefault();
};

const formValidation = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input');
  const textareas = form.querySelectorAll('textarea');

  const elements = [...Array.from(inputs), ...Array.from(textareas)];

  form.addEventListener('submit', formSubmit);

  elements.forEach((element) => {
    const id = Constants.generateId();
    action(element, id);
  });
};

export default formValidation;
