export default class User {
  username: string;

  constructor(params: { username: string }) {
    this.username = params.username;
  }
}
