import ModalDetail from "@/components/Admin/Common/ModalDetail";

interface IProps {
  supplierDetail: any;
}

function SupplierDetail (props: IProps) {
  const { supplierDetail } = props;

  return (
    <ModalDetail modalTitle="Detail Supplier">
      <>
        {supplierDetail !== null && (
          <div>
            <table>
              <tbody>
                {Object.keys(supplierDetail).map((key) => (
                  <tr key={key}>
                    <td className="text-secondary" style={{ width: '150px' }}>
                      {key.replace('_', ' ')}
                    </td>
                    <td className="text-secondary" style={{ width: '20px' }}>:</td>
                    <td className="text-secondary">{supplierDetail[key]}</td>
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

export default SupplierDetail;
