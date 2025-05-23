export const formatNumber = (value) => {
  if (value == null || value === '-' || value === '') return value;

  const [int, decimal] = value.toString().replace(',', '.').split('.');
  const formattedInt = parseInt(int, 10).toLocaleString('ru-RU').replace(/,/g, ' ');
  return decimal ? `${formattedInt}.${decimal}` : formattedInt;
};
