class Entitie {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  public getUrl(): string {
    return this.url;
  }
}

export default Entitie;
