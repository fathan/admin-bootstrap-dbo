'use client';

import SectionTitleTop from "@/components/Admin/Common/SectionTitleTop";
import OrderForm, { IOrderForm } from "@/components/Admin/Fragments/Order/Form";
import { FormType } from "@/utils/enums";

function OrderCreate () {
  const onHandleSubmit = (data: IOrderForm) => {
    console.log(data);
  }

  return (
    <div className="w-full p-4 overflow-y-auto">
      <SectionTitleTop title="Create New Order" />

      <OrderForm
        formType={FormType.Create}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}

export default OrderCreate;
