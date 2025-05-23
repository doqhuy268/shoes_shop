import { Button, Col, Form, Input, Layout, Row, Typography } from "antd";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import signinbg from "../assets/images/img-signin.jpg";
import { toast } from "react-toastify";
import { KEY_STORAGE } from "../constants/constants";
import AuthService from "../services/AuthApi";
import { useAppDispatch } from "../app/hooks";
import { fetchGetUserInfo } from "../app/thunks/UserThunk";
import { socket } from "../App";

const { Title } = Typography;
const { Header, Content } = Layout;

export default function SignIn() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const onLogin = async (params) => {
    try {
      const response = await AuthService.login(params);
      if (response.code === 200) {
        // Kiểm tra mã phản hồi từ BE
        localStorage.setItem(KEY_STORAGE.TOKEN, response.data.accessToken);
        localStorage.setItem(KEY_STORAGE.RF_TOKEN, response.data.refreshToken);
        dispatch(fetchGetUserInfo());
        socket.auth = {
          token: localStorage.getItem(KEY_STORAGE.TOKEN),
        };
        socket.connect();
        navigation("/dashboard", { replace: true });
      } else {
        toast.error(response.message); // Hiển thị thông báo lỗi
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error); // Hiển thị lỗi nếu có
      toast.error("Đã xảy ra lỗi khi đăng nhập.");
    }
  };

  return (
    <>
      <Layout className="layout-default layout-signin">
        <Header>
          <div className="header-brand header-col">
            <h5>Shoes</h5>
          </div>
        </Header>
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Đăng Nhập</Title>
              <Form onFinish={onLogin} layout="vertical" className="row-col">
                <Form.Item
                  className="userName"
                  label="Tài khoản"
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "Tài khoản không được để trống!",
                    },
                  ]}
                >
                  <Input placeholder="Nhập tại đây" />
                </Form.Item>
                <Form.Item
                  className="password"
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không được để trống!",
                    },
                  ]}
                >
                  <Input type="password" placeholder="Nhập tại đây" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    ĐĂNG NHẬP
                  </Button>
                </Form.Item>
                <p className="text-muted font-semibold">
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-dark font-bold">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
