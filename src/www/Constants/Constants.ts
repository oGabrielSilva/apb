import { v4 } from 'uuid';

class Constants {
  private constructor() {}

  public static readonly BIO_ID = 'bio';

  public static readonly PASSWORD_ID = 'password';

  public static readonly PASSWORD_MIN_LENGHT = 8;

  public static readonly EMAIL_ID = 'email';

  public static readonly EMAIL_MAX_LENGHT = 80;

  public static readonly LAST_NAME_ID = 'lastName';

  public static readonly LAST_NAME_MAX_LENGHT = 50;

  public static readonly LAST_NAME_MIN_LENGHT = 2;

  public static readonly BIO_MAX_LENGHT = 150;

  public static readonly NAME_ID = 'name';

  public static readonly NAME_MAX_LENGHT = 30;

  public static readonly NAME_MIN_LENGHT = 2;

  public static readonly MAX_LENGHT_DEFAULT = 80;

  public static readonly SIGN_IN_URL = '/account/signin';

  public static generateId() {
    return `${v4()}${v4()}`;
  }
}

export default Constants;
