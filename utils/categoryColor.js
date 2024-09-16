export default function categoryColor(category) {
  if (category === "Dairy") {
    return "#b5a29a";
  } else if (category === "Bakery") {
    return "#d1bfa3";
  } else if (category === "Fruits") {
    return "rgba(94, 132, 104, 0.749)";
  } else if (category === "Vegetables") {
    return "#f1c6a7";
  } else if (category === "Meat") {
    return "#f4c1c0";
  } else if (category === "Beverages") {
    return "#f4d3a2";
  } else if (category === "Snacks") {
    return "#f2d27a";
  } else if (category === "Household") {
    return "#c4d5c5";
  } else if (category === "Personal Care") {
    return "#d6a6c4";
  } else {
    return "#d0d0d0";
  }
}
