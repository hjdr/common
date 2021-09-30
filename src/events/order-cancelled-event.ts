import { Subjects } from './subjects';

export interface OrderCancelledEvent {
  data: {
    id: string;
    ticket: {
      id: string;
    },
  },
  subject: Subjects.OrderCancelled,
}
