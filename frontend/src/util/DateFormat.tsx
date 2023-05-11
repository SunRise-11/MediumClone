
const dateFormat = (time: Date): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = months[time.getMonth()];
  const day = time.getDate();
  return `${month} ${day}`;
};

export const formatDate = (date: string) => {
  let d = new Date(date);
  return dateFormat(d)
}
