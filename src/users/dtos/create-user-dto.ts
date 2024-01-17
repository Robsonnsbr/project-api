export class UserDTO {
  constructor(
    public readonly name: string,
    public readonly email: string,
  ) {}
}

export const dbUsers: UserDTO[] = [
  new UserDTO('Robson', 'robsonnsbr@gmail.com'),
  new UserDTO('John', 'john@example.com'),
  new UserDTO('Eduardo', 'eduardo@example.com'),
  new UserDTO('Vanessa', 'vanessa@example.com'),
  new UserDTO('Tatiane', 'tatiane@example.com'),
];
