export default class User {
  id?: number;
  username: string;

  constructor(params: { username: string }) {
    this.username = params.username;
  }
}
