export interface MasterCalendar {
  id: number;
  date: string;
  timeFrom: string;
  timeTo: string;
  master: number;
}

export interface Master {
  id: number;
  name: string;
  phone: string;
  image: string;
  description: string;
  calendar: MasterCalendar[];
}
