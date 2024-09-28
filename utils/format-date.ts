/**
 * Formats a date based on the provided format string.
 * @param date - The date to format.
 * @param format - The format string.
 * @returns The formatted date string.
 */
export function formatDate(date: Date | string, format: string): string {
  const d = typeof date === "string" ? new Date(date) : date;

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");

  return format
    .replace("DD", day)
    .replace("MM", month)
    .replace("YYYY", String(year))
    .replace("HH", hours)
    .replace("mm", minutes);
}
