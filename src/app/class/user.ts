export default class User {
  id: number;
  username: string;

  constructor(params: { id: number; username: string }) {
    this.id = params.id;
    this.username = params.username;
  }
}
