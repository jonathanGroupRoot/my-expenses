import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { IDateProvider } from '../IDateProvider';

dayjs.extend(utc);
export class DayjsDateProvider implements IDateProvider {
    addMonth(month: number): Date {
        return dayjs().add(month, 'month').toDate();
    }
    addDays(days: number): Date {
        return dayjs().add(days, 'month').toDate();
    }
}
