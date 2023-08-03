import ModalDetail from "@/components/Admin/Common/ModalDetail";

interface IProps {
  orderDetail: any;
}

function OrderDetail (props: IProps) {
  const { orderDetail } = props;

  return (
    <ModalDetail modalTitle="Detail Order">
      <>
        {orderDetail !== null && (
          <div>
            <table>
              <tbody>
                {Object.keys(orderDetail).map((key) => (
                  <tr key={key}>
                    <td className="text-secondary" style={{ width: '150px' }}>
                      {key.replace('_', ' ')}
                    </td>
                    <td className="text-secondary" style={{ width: '20px' }}>:</td>
                    <td className="text-secondary">{orderDetail[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    </ModalDetail>
  )
}

export default OrderDetail;
