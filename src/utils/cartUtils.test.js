import { describe, it, expect } from 'vitest';
import { calculateCartTotal } from './cartUtils';

describe('calculateCartTotal', () => {
  it('should calculate the correct total for a cart with multiple items', () => {
    const cart = [
      { id: 1, title: 'Sneaker A', price: 100, amount: 2 },
      { id: 2, title: 'Sneaker B', price: 150, amount: 1 },
      { id: 3, title: 'Sneaker C', price: 75.50, amount: 3 },
    ];

    const total = calculateCartTotal(cart);

    expect(total).toBe(576.50);
  });
});
