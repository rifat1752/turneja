import { DateRange } from 'react-date-range';

const Calender = () => {
    return (
        <DateRange
        rangeColors={['rgb(168 ,85 ,247)']}
        direction='vertical'
        showDateDisplay={false}
        /> 
    );
};

export default Calender;