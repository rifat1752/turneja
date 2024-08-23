/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range';

const Calender = ({ value }) => {
    
    return (
        <DateRange
            rangeColors={['rgb(168 ,85 ,247)']}
            direction='vertical'
            showDateDisplay={false}
            ranges={[value]} 
        />
    );
};

export default Calender;
