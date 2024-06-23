import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function SchoolCalednarBlock() {
    return (
        <aside className="calendar-finance-block-item">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
            </LocalizationProvider>
        </aside>
    );
}

export default SchoolCalednarBlock;