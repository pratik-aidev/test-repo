export function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/['’]/g, "")

    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeSlug(value: string): string {
  return slugify(value);
}

export function isSlug(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
