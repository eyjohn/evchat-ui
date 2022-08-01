class User {
  constructor(
    public username: string,
    public name: string,
    public avatarUrl: string | null = null
  ) {}
}

export default User;
