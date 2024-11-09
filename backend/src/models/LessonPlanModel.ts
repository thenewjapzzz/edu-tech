import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./UserModel";

@Entity("lesson_plans")
export class LessonPlan {
  @PrimaryGeneratedColumn()
  lesson_plan_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "teacher_id" })
  teacher: User;

  @Column({ length: 150 })
  title: string;

  @Column("text")
  description: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column({ type: "timestamp", nullable: true })
  updated_at: Date;
}
