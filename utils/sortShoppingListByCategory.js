export default function sortShoppingListByCategory(array) {
  return array.slice().sort((a, b) => a.id - b.id);
}
