'use client';

import DataTable, { ITableRow } from "@/components/Admin/Common/DataTable";
import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";
import { columnTableOrder } from "@/components/Admin/Fragments/Order/ColumnTable";
import OrderDetail from "@/components/Admin/Fragments/Order/OrderDetail";
import { setIsVisibleModalDetail } from "@/redux/features/modalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getAll, getDetail } from "@/services/httpRequest/order";
import { FetchMode } from "@/utils/enums";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminOrders () {
  const [order, setOrder] = useState(null);
  const [orderDetail, setOrderDetail] = useState(null);

  const dispatch = useAppDispatch();

  // /////////////////////////////////////

  const fetchOrders = async (): Promise<void> => {
    try {
      const queryParam = `?page=1&mode=${FetchMode.Local}`;
      const response = await getAll(queryParam);

      setOrder(response.data);
    }
    catch (error: any) {
      toast.dismiss();
      toast
        .error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    }
  };

  const fetchOrderDetail = async (rowData: ITableRow): Promise<boolean> => {
    let status = false;

    try {
      const queryParam = `?page=1&mode=${FetchMode.Local}`;
      const response = await getDetail(rowData.id, queryParam);

      setOrderDetail(response.data);
    }
    catch (error: any) {
      toast.dismiss();
      toast
        .error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    }

    return status;
  };

  // /////////////////////////////////////

  const onHandleDelete = (rowData: ITableRow) => {
    console.log('Delete clicked for row:', rowData);
  };

  const onHandleDetail = async (rowData: ITableRow) => {
    await fetchOrderDetail(rowData);
    dispatch(setIsVisibleModalDetail(true));
  };

  // /////////////////////////////////////

  useEffect(() => {
    fetchOrders();
  }, []);

  // /////////////////////////////////////

  return (
    <div className="w-full p-4 overflow-y-auto">
      <SectionTitleTop title="Orders" />

      <Link href="/admin/orders/create">
        <Button variant="primary" className="mb-4">
          Create New
        </Button>
      </Link>

      {order !== null && (
        <DataTable
          columns={columnTableOrder}
          apiResponse={order}
          onDelete={onHandleDelete}
          onDetail={onHandleDetail}
        />
      )}

      <ToastContainer />
      <OrderDetail orderDetail={orderDetail} />
    </div>
  )
}

export default AdminOrders;