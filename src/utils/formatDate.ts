const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-Br').format(new Date(date));

export default formatDate;
