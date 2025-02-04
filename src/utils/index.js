const parseYear = (dateStr) => {
  const parsed = parseInt(dateStr.split("-")[0], 10);
  return isNaN(parsed) ? 0 : parsed;
};

export { parseYear };
