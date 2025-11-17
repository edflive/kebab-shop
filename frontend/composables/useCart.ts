export const useCart = () => {
  const items = useState<any[]>('cartItems', () => []);

  function addItem(item: any) {
    items.value.push(item);
  }

  function clearCart() {
    items.value = [];
  }

  return { items, addItem, clearCart };
};
