export default function formatDate(value: string) {
  const date: Date = new Date(value);

  const formatOptions: Intl.DateTimeFormatOptions = { 
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };

  const newDate: string = date.toLocaleDateString('us-US', formatOptions);
  return newDate;
};
