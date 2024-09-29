import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ unique: true, length: 100 })
    email: string;

    @Column('text')
    password_hash: string;

    @Column({
        type: 'varchar',
        length: 50,
        enum: ['student', 'teacher'],
    })
    role: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date
}