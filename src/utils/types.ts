export const isLeapYear = (year: number): boolean => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

export const getHoroscope = (birthday: Date): string => {
  const month = birthday.getMonth();
  const day = birthday.getDate();
  const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
  const signs = [
    'aquarius',
    'pisces',
    'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'scorpio',
    'sagittarius',
    'capricorn',
  ];
  const index = month - (day >= days[month] ? 0 : 1);
  const horoscope = signs[index % 12];
  return horoscope;
};
