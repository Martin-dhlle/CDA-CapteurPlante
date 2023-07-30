/* Formatter Services for localStorage purposes */

export function formatSerialNumbersListToString(
  serialNumbers: string[]
): string {
  const serialNumbersFormatted = "";
  serialNumbers.map(
    (serialNumber) => `${serialNumbersFormatted}|${serialNumber}|`
  );
  return serialNumbersFormatted;
}

export function formatSerialNumbersListToArray(
  serialNumbers: string
): string[] {
  const serialNumbersFormatted: string[] = serialNumbers.split("|");
  return serialNumbersFormatted;
}
