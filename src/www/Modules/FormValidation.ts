import Constants from '../Constants/Constants';
import Entitie from './Entities/Entitie';
import SignIn from './Entities/SignIn';

type TAction = 'MAX_LEGHT' | 'VALID_INPUT';

class FormValidation {
  private readonly form: HTMLFormElement;

  private input: HTMLInputElement | HTMLTextAreaElement | null = null;

  private inputs: Array<HTMLInputElement | HTMLTextAreaElement> = [];

  private formValid: boolean;

  private errors: boolean[];

  private entitie: Entitie;

  constructor(form: HTMLFormElement) {
    this.form = form;
    this.formValid = false;
    this.entitie = new SignIn({} as SignIn, '');
    this.errors = [];
  }

  private maxLenght(max: number): void {
    if (this.input === null) return;
    const elm = this.input;
    elm.addEventListener('keydown', (event) => {
      const { value } = event.target as HTMLInputElement | HTMLTextAreaElement;
      if (value.length >= max) {
        const arry = value.split('');
        arry.pop();
        elm.value = arry.join('');
      }
    });
  }

  private searchForMaxLenght(): void {
    const texts = this.form.querySelectorAll('textarea');
    const inputs = this.form.querySelectorAll('input');

    this.inputs = [...texts, ...inputs];

    this.inputs.forEach((elm) => {
      this.input = elm;
      this.action(elm, 'MAX_LEGHT');
    });
  }

  private action(elm: HTMLInputElement | HTMLTextAreaElement, action: TAction) {
    switch (elm.id) {
      case Constants.BIO_ID:
        if (action === 'MAX_LEGHT') this.maxLenght(Constants.BIO_MAX_LENGHT);
        break;
      case Constants.NAME_ID:
        if (action === 'MAX_LEGHT') this.maxLenght(Constants.NAME_MAX_LENGHT);
        break;
      case Constants.LAST_NAME_ID:
        if (action === 'MAX_LEGHT') this.maxLenght(Constants.LAST_NAME_MAX_LENGHT);
        break;
      default:
        if (action === 'MAX_LEGHT') this.maxLenght(Constants.MAX_LENGHT_DEFAULT);
        break;
    }
  }

  private allValid(): boolean {
    this.errors = [];

    this.inputs.forEach((elm) => {
      this.action(elm, 'VALID_INPUT');
    });

    return !!this.errors.length;
  }

  private throwErrors() {
    this.form.querySelectorAll('small').forEach((elm) => {
      elm.classList.remove('d-none');
    });
  }

  private submit() {
    this.form.setAttribute('action', this.entitie.getUrl());
    this.form.submit();
  }

  private validForm(): void {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.allValid()) this.submit();
      else this.throwErrors();
    });
  }

  public init(): void {
    this.searchForMaxLenght();
    this.validForm();
  }
}

export default FormValidation;
