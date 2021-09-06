import React, { useState, useEffect } from 'react';

const DateData = () => {
    const [date, setDate] = useState(new Date())
    const [currentDay, setCurrentDay] = useState(null)
    const [time, setTime] = useState(date.toLocaleTimeString(('it-IT')));

    useEffect(() => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let dayIndex = date.getDay()
        setCurrentDay(days[dayIndex])

        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('it-IT'))
        }, 1000)

        return () => { clearInterval(interval) }
    }, [])

    return (
        <div className="date-container">
            <span> {currentDay} </span>
            <span> {time}</span>
        </div>
    )
}

export default DateData;