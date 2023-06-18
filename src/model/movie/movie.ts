import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Cast } from '../cast/cast';

@Entity({ name: 'movie' })
export class Movie {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 30 })
  language: string;

  @Column({ type: 'varchar', length: 10 })
  status: string;

  @Column({ type: 'float' })
  rating: number;

  @ManyToMany(() => Cast, { cascade: true })
  @JoinTable({ name: 'moviecast' })
  cast: Cast[];
}
