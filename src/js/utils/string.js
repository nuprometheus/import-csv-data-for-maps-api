export const addressAsString = ({
  dirección,
  city,
  province,
  postalCode,
  country,
}) => {
  return `${dirección}, ${city}, ${province} ${postalCode}, ${country}`;
};

export const jsonAsText = (json) => {
  let text = JSON.stringify(json, null, 1);
  text = text.replace("\n", "");
  text = text.replace("\r", "");
  return text;
};
