import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  data: {
    id: string;
    price: number;
    title: string;
    userId: string;
  }
  subject: Subjects.TicketUpdated;
}
