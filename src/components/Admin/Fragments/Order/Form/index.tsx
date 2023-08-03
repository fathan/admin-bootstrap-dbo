'use client';

import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormType } from "@/utils/enums";
import 'react-toastify/dist/ReactToastify.css';

export interface IOrderForm {
  id?: number;
  customer_id: number;
  supplier_id: number;
  code?: string;
  order_date: string;
  total_amount: number;
  status: number;
};

export interface IProps {
  formType: FormType.Create | FormType.Update;
  onHandleSubmit: (data: IOrderForm) => void;
}

const orderFormSchema = yup.object().shape({
  customer_id: yup.number().required('Customer is required'),
  supplier_id: yup.number().required('Supplier is required'),
  order_date: yup.string().required('Order Date is required'),
  total_amount: yup.number().required('Total Amount is required'),
  status: yup.number().required('Status is required')
});

function OrderForm (props: IProps) {
  const { formType, onHandleSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderForm>({
    resolver: yupResolver(orderFormSchema),
  });

  const onSubmit: SubmitHandler<IOrderForm> = (data) => {
    onHandleSubmit(data);
  };

  // ///////////////////////////////////

  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('customer_id')}
                    name="customer_id"
                    placeholder=""
                  />
                  {errors.customer_id && <span className="text-danger small">{errors.customer_id.message}</span>}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('supplier_id')}
                    name="supplier_id"
                    placeholder=""
                  />
                  {errors.supplier_id && <span className="text-danger small">{errors.supplier_id.message}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>code</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('code')}
                    name="code"
                    placeholder=""
                  />
                  {errors.code && <span className="text-danger small">{errors.code.message}</span>}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Order Date</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('order_date')}
                    name="order_date"
                    placeholder=""
                  />
                  {errors.order_date && <span className="text-danger small">{errors.order_date.message}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Total Amount</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('total_amount')}
                    name="total_amount"
                    placeholder=""
                  />
                  {errors.total_amount && <span className="text-danger small">{errors.total_amount.message}</span>}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>status</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('status')}
                    name="status"
                    placeholder=""
                  />
                  {errors.status && <span className="text-danger small">{errors.status.message}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="submit" variant="primary">
                  {formType === FormType.Create ? 'Submit' : 'Update'}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default OrderForm;
