import { OrderStatus } from './types/order-status';

export interface OrderCancelledEvent {
  data: {
    id: string;
    ticket: {
      id: string;
    },
  },
  subject: OrderStatus.Cancelled,
}
