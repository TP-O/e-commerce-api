export class JoinTypes {
  static inner(): string {
    return 'INNER JOIN';
  }

  static left(): string {
    return 'LEFT JOIN';
  }

  static right(): string {
    return 'RIGHT JOIN';
  }

  static full(): string {
    return 'FULL JOIN';
  }
}
