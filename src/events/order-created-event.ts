import { OrderStatus } from './types/order-status';
import { Subjects } from './subjects';

export interface OrderCreatedEvent {
  data: {
    expiresAt: string;
    id: string;
    status: OrderStatus;
    ticket: {
      id: string;
      price: number;
    },
    userId: string
  },
  subject: Subjects.OrderCreated,
}
