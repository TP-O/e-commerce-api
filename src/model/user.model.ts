export class User {
  public constructor(
    public id: number,
    public name: string,
    public password: string,
  ) {}
}

export const users: User[] = [
  new User(1, 'User 01', '001'),
  new User(2, 'User 02', '002'),
  new User(3, 'User 03', '003'),
  new User(4, 'User 04', '004'),
];
