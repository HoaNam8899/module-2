import React from 'react'
import { useEffect } from 'react';
import { Button, Space, Table, Modal, Form, Input, Pagination } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Users = () => {

    const dispatch = useDispatch()
    // dữ liệu ban đầu
    useEffect(() => {
        dispatch({ type: "GET_ALL_USER" });

    }, [])
    const allUser = useSelector(u => u.user.allUser)


    // for table
    const columns = [
        {
            title: 'fullName',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'id',
            dataIndex: 'id',// thay đổi thành id để lấy id
            render: (id) => (
                <Space size="middle">
                    {/* edit */}
                    <a onClick={() => handleEdit(id)}>Edit</a>
                    {/* delete */}
                    <a onClick={() => handleDelete(id)}>Delete</a>
                </Space>
            ),
        },
    ];
    // form / modal
    const [formEdit] = Form.useForm();
    const [formAdd] = Form.useForm();
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    // show/hide modal

    const showModalEdit = () => {
        setOpenEdit(true);
    };

    const hideModalEdit = () => {
        setOpenEdit(false);
    };

    const showModalAdd = () => {
        setOpenAdd(true);
    };

    const hideModalAdd = () => {
        setOpenAdd(false);
    };

    // edit
    const [currentPassword, setCurrentPassword] = useState()
    const handleEdit = (id) => {
        let result = [...allUser].filter(x => x.id.indexOf(id) >= 0)
        setCurrentPassword(result[0].password)
        formEdit.setFieldsValue({
            id: result[0].id,
            fullName: result[0].fullName,
            username: result[0].username,
            phone: result[0].phone,
            email: result[0].email,
            address: result[0].address == undefined ? '' : result[0].address
        });
        showModalEdit();
    }

    // update 
    const onFinish = (data) => {
        data = { ...data, password: currentPassword }
        dispatch({ type: 'UPDATE_USER', payload: data })
    }

    // delete
    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_USER', payload: id })
    }
    // add user
    // dispatch({ type: 'ADD_USER', payload: register })
    const onFinishAdd = (data) => {
        data['fullName'] = 'user'
        dispatch({ type: 'ADD_USER', payload: data })
        hideModalAdd();
        formAdd.resetFields();
    }
    return (

        <>
            <Button type="primary" htmlType="submit" onClick={() => showModalAdd()}>
                Add new
            </Button>
            <Table
                columns={columns}
                dataSource={allUser}
                rowKey={record => record.id}

                pagination={{
                    pageSizeOptions: ['5', '10'],
                    defaultPageSize: 5,
                    showSizeChanger: true
                }}

            />
            {/* add modal */}
            <Modal
                title="Modal Add"
                open={openAdd}
                onOk={hideModalAdd}
                onCancel={hideModalAdd}
                footer={null}
            >

                <Form name="form" layout="vertical" form={formAdd} onFinish={onFinishAdd}>
                    <Form.Item label="username" name="username" >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label="password" name="password" >
                        <Input type='text' />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    {/* <button >Submit update</button> */}
                </Form>
            </Modal>


            {/* edit modal */}
            <Modal
                title="Modal Edit"
                open={openEdit}
                onOk={hideModalEdit}
                onCancel={hideModalEdit}
                footer={null}
            >

                <Form name="form" layout="vertical" form={formEdit} onFinish={onFinish}>
                    <Form.Item label="id" name="id" >
                        <Input readOnly />
                    </Form.Item>
                    <Form.Item label="username" name="username" >
                        <Input readOnly />
                    </Form.Item>
                    <Form.Item label="full name" name="fullName" >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label="email" name="email" >
                        <Input type='mail' />
                    </Form.Item>
                    <Form.Item label="phone" name="phone" >
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item label="address" name="address" >
                        <Input type='text' />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit update
                    </Button>
                    {/* <button >Submit update</button> */}
                </Form>
            </Modal>
        </>
    )
}

