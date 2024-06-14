export const getNameInitials = (name: string, count = 2): string => {
  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("");
  const filtered = initials.replace(/[^a-zA-Z]/g, "");
  return filtered.slice(0, count).toUpperCase();
};

export default getNameInitials;
