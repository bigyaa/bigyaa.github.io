const parseYearRange = (dateStr, startYear, endYear) => {
  if (!dateStr) return false;

  // Extract both start and end years
  const matches = dateStr.match(/\b\d{4}\b/g); // Finds all 4-digit years

  if (!matches || matches.length === 0) return false;

  const experienceStartYear = parseInt(matches[0], 10); // First year (Start)
  const experienceEndYear = matches.length > 1 ? parseInt(matches[1], 10) : experienceStartYear; // Second year (End)

  // ✅ Check if the experience overlaps with the selected filter range
  return (
      experienceStartYear <= endYear && experienceEndYear >= startYear
  );
};

export { parseYearRange };
