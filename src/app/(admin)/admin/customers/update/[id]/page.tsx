'use client';

import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";
import CustomerForm, { ICustomerForm } from "@/components/Admin/Fragments/Customer/Form";
import { FormType } from "@/utils/enums";

function CustomerUpdate () {
  const onHandleSubmit = (data: ICustomerForm) => {
    console.log(data);
  }

  return (
    <div className="w-full p-4 overflow-y-auto">
      <SectionTitleTop title="Update Customer" />

      <CustomerForm
        formType={FormType.Update}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}

export default CustomerUpdate;
