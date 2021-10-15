import { Subjects } from './subjects';

export interface ExpirationCompleteEvent {
  data: {
    orderId: string,
  },
  subject: Subjects.ExpirationComplete,
}
