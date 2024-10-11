import { CompositeCell } from "../compositeCell/compositeCell";
import styles from "./compositeCalender.module.css";

function CompositeCalender({year, month}) {
  const weeks = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  month--;
  const date = new Date(year, month);
  let firstDayThisMonth = date.getDay() - 1;
  let days = [];

  for (let i = 0; i < firstDayThisMonth; i++) {
    days.push('')
  };

  for (let i = 1; date.getMonth() === month; i++) {
    days.push(i);
    date.setDate(date.getDate() + 1)
  }

  let firstDayNextMonth = date.getDay() - 1;

  if (firstDayNextMonth !== 0) {
    for (let i = firstDayNextMonth; i < 7; i++) {
      days.push('');
    }
  }

  return (
    <div className={styles.container}>
      {weeks.map((week, index) => <div key={index}>{week}</div>)}
      {days.map((day, index) => <CompositeCell key={index}>{day}</CompositeCell>)}
    </div>
  )
}

export { CompositeCalender }
