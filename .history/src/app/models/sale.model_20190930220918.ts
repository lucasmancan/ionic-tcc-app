export interface Sale {
  code: number;
  status: string;
  otherExpenses: number;
  discount: number;
  grossAmount: number;
  amount: number;
  items: Item[];
  updatedAt: string;
}

interface Item {
  product: Product;
  otherExpenses: number;
  unitary: number;
  quantity?: any;
  discount: number;
  grossAmount: number;
  status: string;
  amount: number;
  updatedAt?: any;
}

interface Product {
  code: number;
  name: string;
  description: string;
  updatedAt: string;
  category: Category;
}

interface Category {
  code: number;
  name: string;
  description: string;
  updatedAt?: any;
}
