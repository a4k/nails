import { Service } from './Service';
import { MasterCalendar } from './MasterCalendar';

export interface Master {
  id: number;
  name: string;
  phone: string;
  image: string;
  description: string;
  calendar: MasterCalendar[];
  services: Service[];
}
