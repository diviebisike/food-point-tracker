import Calendar from 'react-calendar';
import {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import '../App.css';

const ReactCalendar = () => {
    const [range, setRange] = useState(null);
    const [savedRanges, setSavedRanges] = useState([]);

    //basically everything for when you select a full or half range
    const onChange = (value) => {
        //is it a full range
        if(Array.isArray(value))
        {
            //see if it exists --> some is like a .contains
            const exists = savedRanges.some(
                ([start,end]) =>
                start.getTime() === value[0].getTime()&&
                end.getTime() === value[1].getTime()
            );
            // const overTakes = savedRanges.some(
            //     ([start,end]) =>
            //     start.getTime() <= value[0].getTime &&
            //     end.getTime() >= value[1].getTime
            // )
            /////////////////////////////////////////
            //double counts if it is not exact days so fix that
            /////////////////////////////////////////
            if(exists)
            {
                //gotta delete
                //filter for everything that has a start and end time that isn't that
                setSavedRanges(savedRanges.filter(
                    ([start,end]) =>
                !(start.getTime() === value[0].getTime()&&
                end.getTime() === value[1].getTime())
                ));
            }
            //aka doesn't exist then add
            else
            {
                // if(overTakes)
                // {
                //     setSavedRanges(savedRanges.filter(
                //         ([start,end]) =>
                //         !(start.getTime() === value[0].getTime()&&
                //         end.getTime() === value[1].getTime())
                //     ))
                // }
                setSavedRanges([...savedRanges, value]);
            }

            //reset temp selection
            setCurrentRange(null);
        }
        else{
            //aka only one date selected
            setCurrentRange([value, null]);
        }
    };

    //var for any date in any of the ranges
    //make the date the whole date
    const stripTime = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

    const isInAnyRange = (date) => {
        const target = stripTime(date);
        //return did you find it in any range
        return savedRanges.some(([start, end]) => {
            const from = stripTime(start);
            const to = stripTime(end);
            return target >= from && target <= to;
    });
    };


    return (
        <div>
            <Calendar calendarType = "gregory" onChange = {onChange} value = {range} 
            selectRange = {true} tileClassName={({ date, view, activeStartDate }) => {
                if (view !== 'month') return null;

                let className = '';

                //need to do a space and then the name because there needs to be a space 
                //between the names
                  if (date.getMonth() !== activeStartDate.getMonth()){
                    className += ' outside-month';
                  }
                  if (isInAnyRange(date)) {
                    className += ' react-calendar__tile--active';
                  }
                  //trim takes away leading or trailing spaces
                  return className.trim() || null
                
              }}
              />
          
            <div className = "start-to-end-info">
            <h4>Saved Ranges:</h4>
            <ul>
                {savedRanges.map(([start, end], i) => (
                <li key={i}>
                {start.toDateString()} — {end.toDateString()}
                </li>
          ))}
            </ul>
            </div>
     
        </div>
    );
};

export default ReactCalendar
