import React from "react";
import styled from "styled-components";
import { Button, Form, Input, message } from "antd";
import {
  FaRegEnvelope,
  FaRegComment,
  FaRegUser,
  FaTextHeight,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HiLocationMarker, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    message.success("Message submitted :)");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <ContactContainer>
      <h3>Contact us</h3>
      <h1>Get your kid enrolled now</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum Stet
        clita kasd gubergren
      </p>
      <FormWrapper>
        <Form
          form={form}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          layout="vertical"
        >
          <div className="form-divider">
            <Form.Item
              className="form-item"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Invalid name!",
                },
              ]}
            >
              <Input
                className="input-field"
                placeholder="Name"
                prefix={<FaRegUser style={{ marginRight: "10px" }} />}
              />
            </Form.Item>
            <Form.Item
              className="form-item"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Invalid email!",
                },
              ]}
            >
              <Input
                className="input-field"
                placeholder="Email"
                prefix={<FaRegEnvelope style={{ marginRight: "10px" }} />}
              />
            </Form.Item>
          </div>
          <div className="form-divider">
            <Form.Item
              className="form-item"
              name="number"
              rules={[
                {
                  required: true,
                  message: "Invalid phone number!",
                },
              ]}
            >
              <Input
                className="input-field"
                placeholder="Phone number"
                prefix={<HiOutlinePhone style={{ marginRight: "10px" }} />}
              />
            </Form.Item>
            <Form.Item
              className="form-item"
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Invalid subject!",
                },
              ]}
            >
              <Input
                className="input-field"
                placeholder="Subject"
                prefix={<FaTextHeight style={{ marginRight: "10px" }} />}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "Invalid message!",
              },
            ]}
          >
            <Input
              className="message-field"
              multiple
              prefix={<FaRegComment style={{ marginRight: "10px" }} />}
              placeholder="Message"
            />
          </Form.Item>

          <Form.Item>
            <Button
              icon={<FaTelegramPlane style={{ marginRight: "15px" }} />}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  margin: 4rem 0;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.secondaryColor};
  }

  h1,
  h3,
  p,
  button {
    margin: 10px 0;
    text-align: center;
  }

  p {
    color: #9796ac;
    width: 70%;
    line-height: 1.5rem;
  }

  h1 {
    font-size: 3rem;
  }
`;

const FormWrapper = styled.div`
  width: 70%;
  margin: 2rem auto;

  .form-divider {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .form-item {
    width: 48%;
  }

  .input-field {
    border-radius: 7px;
    padding: 10px;
    border-color: rgba(0, 0, 0, 0.1);
    margin: 5px 0;
  }

  .message-field {
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    padding: 10px;
    height: 200px;
    display: flex;
    margin: 5px 0;
    align-items: flex-start;
  }

  textarea::placeholder,
  input::placeholder {
    color: #757575;
  }

  button {
    padding: 20px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      padding-right: 0px;
    }

    .form-divider {
      flex-direction: column;
    }

    .form-item {
      width: 100%;
    }

    .input-field,
    .message-field {
      margin: 0;
    }
  }
`;

export default Contact;
