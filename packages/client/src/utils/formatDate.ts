export function FormatDate(date: Date ): string {
  const options: any = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  return date.toLocaleString('en-GB', options);
}


