'use client';

import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FetchMode, FormType } from "@/utils/enums";
import { useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDetail } from "@/services/httpRequest/customer";

import { useParams } from "next/navigation";

export interface ICustomerForm {
  id?: number;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  province: string;
  postal_code: string;
  email: string;
  phone: string;
};

export interface IProps {
  formType: FormType.Create | FormType.Update;
  onHandleSubmit: (data: ICustomerForm) => void;
}

const customerFormSchema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  province: yup.string().required('Province is required'),
  postal_code: yup.string().required('Postal Code is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().required('Email is required').email('Invalid email format')
});
function CustomerForm (props: IProps) {
  const { formType, onHandleSubmit } = props;
  const params = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICustomerForm>({
    resolver: yupResolver(customerFormSchema),
  });

  const onSubmit: SubmitHandler<ICustomerForm> = (data) => {
    onHandleSubmit(data);
  };

  // ////////////////////////////////////

  const fetchDetailData = async () => {
    try {
      const queryParam = `?mode=${FetchMode.Local}`;
      const response = await getDetail(Number(params?.id), queryParam);

      setValue('first_name', response.data.first_name);
      setValue('last_name', response.data.last_name);
      setValue('address', response.data.address);
      setValue('city', response.data.city);
      setValue('province', response.data.province);
      setValue('postal_code', response.data.postal_code);
      setValue('email', response.data.email);
      setValue('phone', response.data.phone);
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

  // ///////////////////////////////////

  useEffect(() => {
    if (formType === FormType.Update) {
      fetchDetailData();
    }
  }, []);

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
                    {...register('first_name')}
                    name="first_name"
                    placeholder="Please insert your company name"
                  />
                  {errors.first_name && <span className="text-danger small">{errors.first_name.message}</span>}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('last_name')}
                    name="last_name"
                    placeholder="Please insert your contact name"
                  />
                  {errors.last_name && <span className="text-danger small">{errors.last_name.message}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    {...register('email')}
                    name="email"
                    placeholder="e.g: fathan@dbo.id"
                  />
                  {errors.email && <span className="text-danger small">{errors.email.message}</span>}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('phone')}
                    name="phone"
                    placeholder="e.g: 081282951768"
                  />
                  {errors.phone && <span className="text-danger small">{errors.phone.message}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('province')}
                    name="province"
                    placeholder=""
                  />
                  {errors.province && <span className="text-danger small">{errors.province.message}</span>}
                </Form.Group>
              </Col>
              <Col sm={12} md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('city')}
                    name="city"
                    placeholder=""
                  />
                  {errors.city && <span className="text-danger small">{errors.city.message}</span>}
                </Form.Group>
              </Col>
              <Col sm={12} md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('postal_code')}
                    name="postal_code"
                    placeholder=""
                  />
                  {errors.postal_code && <span className="text-danger small">{errors.postal_code.message}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    {...register('address')}
                    name="address"
                    style={{ height: '100px' }}
                  />
                  {errors.address && <span className="text-danger small">{errors.address.message}</span>}
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

      <ToastContainer />
    </>
  )
}

export default CustomerForm;
