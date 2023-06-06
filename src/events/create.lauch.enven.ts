export class CreateLaunchEvent {
  constructor(
    public type: string,
    public description: string,
    public value: number,
    public date: Date,
  ) {}
}
