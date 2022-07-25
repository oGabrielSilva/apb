import Entitie from './Entitie';

class SignIn extends Entitie {
  private readonly name: string;

  private readonly lastName: string;

  private readonly email: string;

  private readonly password: string;

  private readonly instagram: string;

  private readonly twitter: string;

  private readonly linkedin: string;

  private readonly gender: 'M' | 'F' | 'O';

  private readonly state: string;

  private readonly bio: string;

  constructor(data: SignIn, url: string) {
    super(url);
    this.name = data.name;
    this.bio = data.bio;
    this.email = data.email;
    this.lastName = data.lastName;
    this.password = data.password;
    this.instagram = data.instagram;
    this.twitter = data.twitter;
    this.linkedin = data.linkedin;
    this.gender = data.gender;
    this.state = data.state;
  }
}

export default SignIn;
