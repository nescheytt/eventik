export default function formatVariationName(value: string): string {
  if (typeof value === "string" && value.startsWith("Entradas:")) {
    return value.substring(10);
  };

  return value;
};