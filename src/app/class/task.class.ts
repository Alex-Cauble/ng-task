import { TaskStatus } from '../types/task-status.enum';
import User from './user.class';

export default class Task {
  id!: number;
  title!: string;
  description!: string;
  status!: TaskStatus;
  user?: User;
}
