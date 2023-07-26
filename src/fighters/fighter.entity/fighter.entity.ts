import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FighterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  strenght: number;

  @Column()
  dexterity: number;

  @Column()
  weapon: string | null;

  @Column()
  shield: string | null;
}
