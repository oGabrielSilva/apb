import Constants from '../Constants/Constants';
import Entitie from '../Shared/Entitie';

class SignIn extends Entitie {
  private readonly nameId: string;

  private readonly nameIsValid: boolean = false;

  private readonly lastNameId: string;

  private readonly lastNameIsValid: boolean = false;

  private readonly emailId: string;

  private readonly emailIsValid: boolean = false;

  private readonly bioId: string;

  private readonly bioIsValid: boolean = false;

  private readonly passwordId: string;

  private readonly passwordIsValid: boolean = false;

  private constructor(
    nameId: string,
    lastNameId: string,
    emailId: string,
    bioId: string,
    passwordId: string // eslint-disable-line comma-dangle
  ) {
    super(Constants.SIGN_IN_URL);
    this.nameId = nameId;
    this.bioId = bioId;
    this.emailId = emailId;
    this.lastNameId = lastNameId;
    this.passwordId = passwordId;
  }

  public static init(
    nameId: string,
    lastNameId: string,
    emailId: string,
    bioId: string,
    passwordId: string // eslint-disable-line comma-dangle
  ) {
    const signIn = new SignIn(nameId, lastNameId, emailId, bioId, passwordId);

    Object.keys(signIn).forEach((element) => {});
  }
}

export default SignIn;
