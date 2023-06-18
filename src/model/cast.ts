import { type } from 'os';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cast' })
export class Cast {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ nullable: true, type: 'timestamp' })
  birthday: Date;

  @Column({ nullable: true, type: 'timestamp' })
  deadday: Date;

  @Column({ type: 'int' })
  rating: number;
}
