import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const weeklyData = [
    {
        Day: 'Sun',
        Expected: 35,
        Actual: 30,
    },
    {
        Day: 'Mon',
        Expected: 40,
        Actual: 39
    },
    {
        Day: 'Tue',
        Expected: 41,
        Actual: 43
    },
    {
        Day: 'Wed',
        Expected: 37,
        Actual: 39
    },
    {
        Day: 'Thur',
        Expected: 33,
        Actual: 28
    },
    {
        Day: 'Fri',
        Expected: 36,
        Actual: 35
    },
    {
        Day: 'Sat',
        Expected: 37,
        Actual: 37
    },
]

const BarChartComp = () => {
    return (
        <ResponsiveContainer width = "100%" height = {350} className= 'barChartAES'>
            <BarChart data = {weeklyData} barGap= {0}>
                <CartesianGrid strokeDasharray = "3 3"/>
                <XAxis dataKey = "Day"/>
                <YAxis/>
                <Legend wrapperStyle={{ marginLeft: 45}} />
                <Tooltip/>
                <Bar dataKey = "Expected" fill = 'grey'/>
                <Bar dataKey = "Actual" fill = '#012169'/>
            </BarChart>
        </ResponsiveContainer>
    );
    
};
export default BarChartComp;