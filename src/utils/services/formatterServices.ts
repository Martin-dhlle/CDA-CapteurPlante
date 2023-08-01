/* Formatter Services for localStorage purposes */

export function formatSerialNumbersListToString(
  serialNumbers: string[]
): string {
  let serialNumbersFormatted = "";
  serialNumbers.forEach((serialNumber) => {
    serialNumbersFormatted = `${serialNumbersFormatted}|${serialNumber}|`;
  });
  return serialNumbersFormatted;
}

export function formatSerialNumbersListToArray(
  serialNumbers: string
): string[] {
  const serialNumbersFormatted: string[] = serialNumbers
    .split("|")
    .filter((serialNumbersFormatted) => serialNumbersFormatted.length > 0);
  return serialNumbersFormatted;
}
