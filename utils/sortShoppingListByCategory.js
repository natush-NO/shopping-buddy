export default function sortShoppingListByCategory(array) {
  return array.slice().sort((a, b) => b.id - a.id);
}
