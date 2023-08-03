'use client';

import DataTable, { ITableRow } from "@/components/Admin/Common/DataTable";
import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";
import { columnTableSupplier } from "@/components/Admin/Fragments/Supplier/ColumnTable";
import SupplierDetail from "@/components/Admin/Fragments/Supplier/SupplierDetail";
import { setIsVisibleModalDetail } from "@/redux/features/modalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getAll, getDetail } from "@/services/httpRequest/supplier";
import { FetchMode } from "@/utils/enums";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminSuppliers () {
  const [supplier, setSupplier] = useState(null);
  const [supplierDetail, setSupplierDetail] = useState(null);

  const dispatch = useAppDispatch();

  const router = useRouter();

  // /////////////////////////////////////

  const fetchSuppliers = async (): Promise<void> => {
    try {
      const queryParam = `?page=1&mode=${FetchMode.Local}`;
      const response = await getAll(queryParam);

      setSupplier(response.data);
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

  const fetchSupplierDetail = async (rowData: ITableRow): Promise<boolean> => {
    let status = false;

    try {
      const queryParam = `?mode=${FetchMode.Local}`;
      const response = await getDetail(rowData.id, queryParam);

      setSupplierDetail(response.data);
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
    router.push(`/admin/suppliers/update/${rowData.id}`)
  };

  const onHandleDelete = (rowData: ITableRow) => {
    console.log('Delete clicked for row:', rowData);
  };

  const onHandleDetail = async (rowData: ITableRow) => {
    await fetchSupplierDetail(rowData);
    dispatch(setIsVisibleModalDetail(true));
  };

  // /////////////////////////////////////

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <div className="w-full p-4 overflow-y-auto">
      <SectionTitleTop title="Suppliers" />

      <Link href="/admin/suppliers/create">
        <Button variant="primary" className="mb-4">
          Create New
        </Button>
      </Link>

      {supplier !== null && (
        <DataTable
          columns={columnTableSupplier}
          apiResponse={supplier}
          onDelete={onHandleDelete}
          onUpdate={onHandleUpdate}
          onDetail={onHandleDetail}
        />
      )}

      <ToastContainer />
      <SupplierDetail supplierDetail={supplierDetail}/>
    </div>
  )
}

export default AdminSuppliers;