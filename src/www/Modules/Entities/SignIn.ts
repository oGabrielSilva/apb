class SignIn {
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

  constructor({
    name,
    lastName,
    email,
    password,
    instagram,
    twitter,
    linkedin,
    gender,
    state,
    bio,
  }: SignIn) {
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.lastName = lastName;
    this.password = password;
    this.instagram = instagram;
    this.twitter = twitter;
    this.linkedin = linkedin;
    this.gender = gender;
    this.state = state;
  }
}

export default SignIn;
