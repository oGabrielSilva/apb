import axios from 'axios';
import Constants from '../Constants/Constants';
import Entitie from './Entities/Entitie';
import SignIn from './Entities/SignIn';

class FormValidation {
  private readonly form: HTMLFormElement;

  private input: HTMLInputElement | HTMLTextAreaElement | null = null;

  private inputs: Array<HTMLInputElement | HTMLTextAreaElement> = [];

  private formValid: boolean;

  private entitie: Entitie;

  constructor(form: HTMLFormElement) {
    this.form = form;
    this.formValid = false;
    this.entitie = new SignIn({} as SignIn, '');
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

      switch (elm.id) {
        case Constants.BIO_ID:
          this.maxLenght(Constants.BIO_MAX_LENGHT);
          break;
        case Constants.NAME_ID:
          this.maxLenght(Constants.NAME_MAX_LENGHT);
          break;
        case Constants.LAST_NAME_ID:
          this.maxLenght(Constants.LAST_NAME_MAX_LENGHT);
          break;
        default:
          this.maxLenght(Constants.MAX_LENGHT_DEFAULT);
          break;
      }
    });
  }

  private allValid(): boolean {
    return this.formValid;
  }

  private throwErrors() {
    this.form.querySelectorAll('small').forEach((elm) => {
      elm.classList.remove('d-none');
    });
  }

  private submit() {
    axios.post(this.entitie.getUrl(), this.entitie);
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
