import styles from "./compositeCalender.module.css";

function CompositeCalender() {
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function createCalender(year, month) {
        month--;
        const date = new Date(year, month);
        let days = [];
        let day = date.getDay()

        for (let i = 0; i < day; i++) {
            days.push('')
        };
        
        let count = 0;

        while (date.getMonth() === month) {
            days.push(count);
            count++;
            date.setDate(date.getDate() + 1)
        }

        let a = date.getDay()

        if (date.getDay() !== 0) {
            for (let i = a; i < 7; i++) {
              days.push('')
            }
          }

        return days
    };

    let arr = createCalender(2024, 10)

    let b = weeks.concat(arr)

    return (
        <div className={styles.container}>
            {/* {weeks.map((week) => <div key={weeks.indexOf(week)}>{week}</div>)}
            {arr.map((day) => (<div key={arr.indexOf(day)}>{day}</div>))} */}
            {b.map((day) => (<div key={b.indexOf(day)}>{day}</div>))}
        </div>
)
}

export { CompositeCalender }
