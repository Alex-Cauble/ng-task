import { TaskStatus } from './task-status.enum';
export default interface TaskFilterDTO {
  status: TaskStatus;
  search: string;
}
