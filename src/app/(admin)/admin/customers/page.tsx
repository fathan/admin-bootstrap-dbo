'use client';

import DataTable, { ITableRow } from "@/components/Admin/Common/DataTable";
import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";
import { columnTableCustomer } from "@/components/Admin/Fragments/Customer/ColumnTable";
import CustomerDetail from "@/components/Admin/Fragments/Customer/CustomerDetail";
import { setIsVisibleModalDetail } from "@/redux/features/modalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getAll, getDetail } from "@/services/httpRequest/customer";
import { FetchMode } from "@/utils/enums";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminCustomers () {
  const [customer, setCustomer] = useState(null);
  const [customerDetail, setCustomerDetail] = useState(null);

  const dispatch = useAppDispatch();

  const router = useRouter();

  // /////////////////////////////////////

  const fetchCustomers = async (): Promise<void> => {
    try {
      const queryParam = `?page=1&mode=${FetchMode.Local}`;
      const response = await getAll(queryParam);

      setCustomer(response.data);
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

      setCustomerDetail(response.data);
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

  const onHandleUpdate = (rowData: ITableRow) => {
    router.push(`/admin/customers/update/${rowData.id}`)
  };

  const onHandleDelete = (rowData: ITableRow) => {
    console.log('Delete clicked for row:', rowData);
  };

  const onHandleDetail = async (rowData: ITableRow) => {
    await fetchOrderDetail(rowData);
    dispatch(setIsVisibleModalDetail(true));
  };

  // /////////////////////////////////////

  useEffect(() => {
    fetchCustomers();
  }, []);

  // /////////////////////////////////////

  return (
    <div className="w-full p-4 overflow-y-auto">
      <SectionTitleTop title="Customers" />

      <Link href="/admin/customers/create">
        <Button variant="primary" className="mb-4">
          Create New
        </Button>
      </Link>

      {customer !== null && (
        <DataTable
          columns={columnTableCustomer}
          apiResponse={customer}
          onDelete={onHandleDelete}
          onUpdate={onHandleUpdate}
          onDetail={onHandleDetail}
        />
      )}

      <ToastContainer />
      <CustomerDetail customerDetail={customerDetail} />
    </div>
  )
}

export default AdminCustomers;