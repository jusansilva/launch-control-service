import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Launch {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public type: string;

  @Column()
  public description: string;

  @Column({ type: 'real' })
  public value: number;

  @Column({ type: 'timestamptz', nullable: true })
  public date: Date;
}
