import { create } from 'zustand';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  swatchHex: string;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isCartOpen: boolean;
  toastMessage: string | null;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  toggleCart: (open: boolean) => void;
  showToast: (message: string) => void;
  hideToast: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isCartOpen: false,
  toastMessage: null,
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      return {
        items: state.items.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      };
    }
    return { items: [...state.items, item] };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(i => i.id !== id)
  })),
  toggleCart: (open) => set({ isCartOpen: open }),
  showToast: (message) => {
    set({ toastMessage: message });
    // Auto-hide after 3 seconds
    setTimeout(() => {
      set((state) => state.toastMessage === message ? { toastMessage: null } : state);
    }, 3000);
  },
  hideToast: () => set({ toastMessage: null }),
}));
