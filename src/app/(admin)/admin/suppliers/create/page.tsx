'use client';

import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";
import SupplierForm, { ISupplierForm } from "@/components/Admin/Fragments/Supplier/Form";
import { FormType } from "@/utils/enums";

function SupplierCreate () {
  const onHandleSubmit = (data: ISupplierForm) => {
    console.log(data);
  }

  return (
    <div className="w-full p-4 overflow-y-auto">
      <SectionTitleTop title="Create New Supplier" />

      <SupplierForm
        formType={FormType.Create}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}

export default SupplierCreate;
