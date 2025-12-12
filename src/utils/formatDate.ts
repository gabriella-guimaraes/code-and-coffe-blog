export function formatDate(date: string | Date) {
  return new Date(date)
    .toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .replace(".", "")
    .replace(/de /g, "");
}
