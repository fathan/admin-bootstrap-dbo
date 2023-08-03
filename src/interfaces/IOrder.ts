import { ICustomer } from "./ICustomer";
import { ISupplier } from "./ISupplier";

export interface IOrder {
  id: number;
  customer_id: number;
  supplier_id: number;
  customer: ICustomer;
  supplier: ISupplier;
  code: string;
  order_date: string;
  total_amount: number;
  status: number;
  created_at: string;
  updated_at: string;
}