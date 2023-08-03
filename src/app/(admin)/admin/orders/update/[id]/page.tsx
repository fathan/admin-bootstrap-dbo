'use client';

import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";
import OrderForm, { IOrderForm } from "@/components/Admin/Fragments/Order/Form";
import { FormType } from "@/utils/enums";

function OrderUpdate () {
  const onHandleSubmit = (data: IOrderForm) => {
    console.log(data);
  }

  return (
    <div className="w-full p-4 overflow-y-auto">
      <SectionTitleTop title="Update Order" />

      <OrderForm
        formType={FormType.Update}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}

export default OrderUpdate;
