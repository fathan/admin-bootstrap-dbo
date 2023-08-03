import ModalDetail from "@/components/Admin/Common/ModalDetail";

interface IProps {
  customerDetail: any;
}

function CustomerDetail (props: IProps) {
  const { customerDetail } = props;

  return (
    <ModalDetail modalTitle="Detail Customer">
      <>
        {customerDetail !== null && (
          <div>
            <table>
              <tbody>
                {Object.keys(customerDetail).map((key) => (
                  <tr key={key}>
                    <td className="text-secondary" style={{ width: '150px' }}>
                      {key.replace('_', ' ')}
                    </td>
                    <td className="text-secondary" style={{ width: '20px' }}>:</td>
                    <td className="text-secondary">{customerDetail[key]}</td>
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

export default CustomerDetail;
