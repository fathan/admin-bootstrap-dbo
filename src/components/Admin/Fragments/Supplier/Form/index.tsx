'use client';

import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FetchMode, FormType } from "@/utils/enums";
import { useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDetail } from "@/services/httpRequest/supplier";

import { useParams } from "next/navigation";

export interface ISupplierForm {
  id?: number;
  company_name: string;
  contact_name: string;
  address: string;
  city: string;
  province: string;
  postal_code: string;
  phone: string;
  email: string;
};

export interface IProps {
  formType: FormType.Create | FormType.Update;
  onHandleSubmit: (data: ISupplierForm) => void;
}

const supplierFormSchema = yup.object().shape({
  company_name: yup.string().required('Company Name is required'),
  contact_name: yup.string().required('Contact Name is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  province: yup.string().required('Province is required'),
  postal_code: yup.string().required('Postal Code is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().required('Email is required').email('Invalid email format')
});
function SupplierForm (props: IProps) {
  const { formType, onHandleSubmit } = props;
  const params = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISupplierForm>({
    resolver: yupResolver(supplierFormSchema),
  });

  const onSubmit: SubmitHandler<ISupplierForm> = (data) => {
    onHandleSubmit(data);
  };

  // ////////////////////////////////////

  const fetchDetailData = async () => {
    try {
      const queryParam = `?mode=${FetchMode.Local}`;
      const response = await getDetail(Number(params?.id), queryParam);

      setValue('address', response.data.address);
      setValue('city', response.data.city);
      setValue('company_name', response.data.company_name);
      setValue('contact_name', response.data.contact_name);
      setValue('email', response.data.email);
      setValue('phone', response.data.phone);
      setValue('postal_code', response.data.postal_code);
      setValue('province', response.data.province);
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
                    {...register('company_name')}
                    name="company_name"
                    placeholder="Please insert your company name"
                  />
                  {errors.company_name && <span className="text-danger small">{errors.company_name.message}</span>}
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('contact_name')}
                    name="contact_name"
                    placeholder="Please insert your contact name"
                  />
                  {errors.contact_name && <span className="text-danger small">{errors.contact_name.message}</span>}
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

export default SupplierForm;
