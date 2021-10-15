import { Subjects } from './subjects';

export interface expirationCompleteEvent {
  data: {
    orderId: string,
  },
  subject: Subjects.ExpirationComplete,
}
