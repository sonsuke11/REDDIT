import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity() //dbtable
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number; // unique id

  @Column({ unique: true })
  username!: string; //not none

  @Column({ unique: true })
  email!: string; //

  @Column()
  password!: string; //

  @CreateDateColumn()
  createdAt: Date; //

  @UpdateDateColumn()
  updatedAt: Date; //
}
