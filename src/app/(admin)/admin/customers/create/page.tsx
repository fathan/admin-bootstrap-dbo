'use client';

import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";
import CustomerForm, { ICustomerForm } from "@/components/Admin/Fragments/Customer/Form";
import { FormType } from "@/utils/enums";

function CustomerCreate () {
  const onHandleSubmit = (data: ICustomerForm) => {
    console.log(data);
  }

  return (
    <div className="w-full p-4 overflow-y-auto">
      <SectionTitleTop title="Create New Customer" />

      <CustomerForm
        formType={FormType.Create}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}

export default CustomerCreate;
