export const getUnitsFromJson = async () => {
  return fetch("age-of-empires-units.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
