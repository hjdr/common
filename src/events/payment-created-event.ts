import { Subjects } from './subjects';

export interface PaymentCreatedEvent {
  data: {
    id: string,
    orderId: string,
    stripeId: string,
  },
  subject: Subjects.PaymentCreated,
}
