/**
 * Parse year range from date string and check if it falls within the specified range
 * @param dateString - Date string in format "YYYY - YYYY" or "YYYY"
 * @param startYear - Start year of the range
 * @param endYear - End year of the range
 * @returns Boolean indicating if the date falls within the range
 */
export const parseYearRange = (
  dateString: string,
  startYear: number,
  endYear: number
): boolean => {
  // Extract years from date string (handles both "YYYY - YYYY" and "YYYY" formats)
  const years = dateString.match(/\b\d{4}\b/g);
  
  if (!years || years.length === 0) {
    return false;
  }
  
  // If only one year, check if it's within range
  if (years.length === 1) {
    const year = parseInt(years[0], 10);
    return year >= startYear && year <= endYear;
  }
  
  // If two years, check if the range overlaps with our filter range
  const startDate = parseInt(years[0], 10);
  const endDate = parseInt(years[1], 10);
  
  return startDate <= endYear && endDate >= startYear;
};

/**
 * Extract the first year from a date string
 * @param dateString - Date string containing year(s)
 * @returns First year found in the string, or 0 if none found
 */
export const extractFirstYear = (dateString: string): number => {
  const years = dateString.match(/\b\d{4}\b/g);
  return years ? parseInt(years[0], 10) : 0;
};

/**
 * Format date string for display
 * @param dateString - Raw date string
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  // If it's already formatted, return as is
  if (dateString.includes(' - ')) {
    return dateString;
  }
  
  // If it's a single year, return as is
  if (/^\d{4}$/.test(dateString.trim())) {
    return dateString;
  }
  
  // For other formats, return as is for now
  return dateString;
};
