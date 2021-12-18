export class Deffered {
  readonly promise: Promise<boolean>;
  private reject: (error: any) => void;
  private resolve: (value: boolean) => void;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  public success() {
    return this.resolve(true);
  }

  public fail(e: any) {
    return this.reject(e)
  }

}