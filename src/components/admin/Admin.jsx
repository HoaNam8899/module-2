import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    TeamOutlined,
    RetweetOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
export const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();
    function handleClick(e) {
        if (e.key == 1) { navigate("/admin") }
        else if (e.key == 2) { navigate("users") }
        else if (e.key == 3) { navigate("order") }
        else if (e.key == 4) { navigate("/") }
    }
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    onClick={handleClick}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            // onClick={() => navigate("/admin")}
                            label: 'Products',
                        },
                        {
                            key: '2',
                            icon: <TeamOutlined />,
                            // onClick={() => navigate("users")}
                            label: 'Users',
                        },
                        {
                            key: '3',
                            icon: <MenuFoldOutlined />,
                            // onClick={() => navigate("order")}
                            label: 'Order',
                        },
                        {
                            key: '4',
                            icon: <RetweetOutlined />,
                            label: 'Website',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {/* noi dung that doi */}
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};