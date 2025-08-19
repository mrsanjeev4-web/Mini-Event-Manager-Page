export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const isUpcoming = (dateString: string): boolean => {
  return new Date(dateString) >= new Date(new Date().setHours(0, 0, 0, 0));
};

export const getTodayDateString = (): string => {
  return new Date().toISOString().split('T')[0];
};