import { IOrder } from "@/interfaces/IOrder";

export enum OrderStatus {
  PENDING = 1,
  SHIPPED = 2,
  DELIVERED = 3,
  CANCELLED = 4
}

export interface OrderMeta {
  current_page: number;
  total_pages: number;
  total_count: number;
  page_size: number;
}

export interface Order {
  meta: OrderMeta;
  data: IOrder[]
}

const data = {
  meta: {
    current_page: 1,
    total_pages: 1,
    total_count: 10,
    page_size: 10
  },
  data: [
    {
      customer_id: 1,
      supplier_id: 2,
      code: "3c972f86-2b3d-4083-9e7a-5b2187bbf0a0",
      order_date: "2023-07-31T15:53:09.413Z",
      total_amount: 200000,
      status: 3,
      created_at: "2023-08-01T08:48:37.636Z",
      updated_at: "2023-08-01T11:25:55.343Z",
      id: 1
    },
    {
      customer_id: 2,
      supplier_id: 3,
      code: "15bb4089-227e-4504-9fe7-8ed0a5dd9c0d",
      order_date: "2023-07-31T16:38:45.373Z",
      total_amount: 150000,
      status: 3,
      created_at: "2023-08-01T07:24:22.103Z",
      updated_at: "2023-08-01T05:24:49.433Z",
      id: 2
    },
    {
      customer_id: 10,
      supplier_id: 4,
      code: "28f3f342-6d76-41a1-85ff-d5431611d760",
      order_date: "2023-07-31T17:27:45.826Z",
      total_amount: 75000,
      status: 3,
      created_at: "2023-08-01T09:46:24.285Z",
      updated_at: "2023-08-01T03:49:37.391Z",
      id: 3
    },
    {
      customer_id: 2,
      supplier_id: 5,
      code: "d97a28f4-b21a-4bba-b3a9-c33617b857f3",
      order_date: "2023-08-01T06:07:30.803Z",
      total_amount: 85000,
      status: 4,
      created_at: "2023-08-01T11:46:27.950Z",
      updated_at: "2023-08-01T13:18:01.925Z",
      id: 4
    },
    {
      customer_id: 8,
      supplier_id: 1,
      code: "9aada832-98b0-4a43-a4d2-fb4bff64471e",
      order_date: "2023-07-31T15:51:12.984Z",
      total_amount: 550000,
      status: 1,
      created_at: "2023-08-01T00:35:10.076Z",
      updated_at: "2023-07-31T18:47:04.707Z",
      id: 5
    },
    {
      customer_id: 10,
      supplier_id: 10,
      code: "ab1d94fd-c778-46f9-aca8-a98cbcb3271a",
      order_date: "2023-08-01T11:35:45.354Z",
      total_amount: 430000,
      status: 2,
      created_at: "2023-08-01T05:12:56.309Z",
      updated_at: "2023-07-31T14:04:59.065Z",
      id: 6
    },
    {
      customer_id: 7,
      supplier_id: 6,
      code: "09f1708d-f678-4774-9d10-781c72f955e7",
      order_date: "2023-07-31T17:22:31.123Z",
      total_amount: 125000,
      status: 3,
      created_at: "2023-07-31T20:26:16.800Z",
      updated_at: "2023-08-01T01:42:41.651Z",
      id: 7
    },
    {
      customer_id: 8,
      supplier_id: 3,
      code: "6bf885a1-a18e-4c9f-86f6-818f1196bf22",
      order_date: "2023-08-01T12:35:03.765Z",
      total_amount: 350000,
      status: 4,
      created_at: "2023-07-31T21:53:41.297Z",
      updated_at: "2023-08-01T00:43:00.485Z",
      id: 8
    },
    {
      customer_id: 9,
      supplier_id: 5,
      code: "cf8aeec1-60d1-417d-8e13-dc82a2a7c031",
      order_date: "2023-07-31T14:58:17.401Z",
      total_amount: 140000,
      status: 3,
      created_at: "2023-08-01T06:45:26.468Z",
      updated_at: "2023-08-01T09:14:09.569Z",
      id: 9
    },
    {
      customer_id: 7,
      supplier_id: 8,
      code: "6ee68d8f-256c-490c-b42a-025a219e7465",
      order_date: "2023-08-01T01:32:21.594Z",
      total_amount: 1000000,
      status: 1,
      created_at: "2023-07-31T20:56:58.668Z",
      updated_at: "2023-08-01T13:13:21.928Z",
      id: 10
    }
  ]
}

export default data;