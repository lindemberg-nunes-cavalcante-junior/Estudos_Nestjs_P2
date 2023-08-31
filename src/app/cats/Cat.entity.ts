import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class CatEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({nullable:false, type: 'varchar'})
    Name: string;

    @Column({nullable:false, type: 'varchar'})
    Race: string;

    @Column({type: 'text'})
    body: string;

    @Column()
    status: string

    @CreateDateColumn()
    createdAt: string
    @UpdateDateColumn()
    updatedAt: string
    @DeleteDateColumn()
    deletedAt: string
}