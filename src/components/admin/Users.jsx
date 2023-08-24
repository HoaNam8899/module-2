import React from 'react'
import { useEffect } from 'react';
import { Button, Space, Table, Modal, Form, Input, Pagination, Select } from 'antd';
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
    // search
    const [selected, setSelected] = useState()
    const handleSelect = (value) => {
        setSelected(value)
    }
    const handleSearch = (e) => {
        if (e.target.value == '') {
            dispatch({ type: 'GET_ALL_USER' })
        } else {
            if (selected == 'fullName') {
                var resultSearch = [...allUser].filter(x => toSlug(x.fullName).indexOf(toSlug(e.target.value)) >= 0)
            } else if (selected == 'username') {
                var resultSearch = [...allUser].filter(x => toSlug(x.username).indexOf(toSlug(e.target.value)) >= 0)
            } else if (selected == 'phone') {
                var resultSearch = [...allUser].filter(x => toSlug(x.phone).indexOf(toSlug(e.target.value)) >= 0)
            } else if (selected == 'email') {
                var resultSearch = [...allUser].filter(x => toSlug(x.email).indexOf(toSlug(e.target.value)) >= 0)
            } else if (selected == 'address') {
                var resultSearch = [...allUser].filter(x => toSlug(x.address).indexOf(toSlug(e.target.value)) >= 0)
            } else {
                dispatch({ type: 'GET_ALL_USER' })
            }
            dispatch({ type: 'SEARCH_USER', payload: resultSearch })
        }
    }

    // compare vn string
    function toSlug(str) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();
        // xóa dấu
        str = str
            .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
            .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp
        // Thay ký tự đĐ
        str = str.replace(/[đĐ]/g, 'd');
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
        // Xóa ký tự - liên tiếp
        str = str.replace(/-+/g, '-');
        // xóa phần dư - ở đầu & cuối
        str = str.replace(/^-+|-+$/g, '');
        // return
        return str;
    }
    return (

        <>
            <div className='d-flex mb-3 align-items-center'>
                <Button type="primary" htmlType="submit" onClick={() => showModalAdd()}>
                    Add new
                </Button>

                <span style={{ margin: '0 10px 0 20px' }}>Search by: </span>
                <Select
                    style={{ width: 120 }}
                    onChange={(value) => handleSelect(value)}
                >
                    <Select.Option value="non">Non</Select.Option>
                    <Select.Option value="fullName">fullname</Select.Option>
                    <Select.Option value="username">username</Select.Option>
                    <Select.Option value="phone">phone</Select.Option>
                    <Select.Option value="email">email</Select.Option>
                    <Select.Option value="address">address</Select.Option>
                </Select>
                {
                    selected == 'non' ? <input type="text" onChange={e => handleSearch(e)} style={{ margin: '0 0 0 10px' }} placeholder='non...' readOnly />
                        :
                        <input type="text" onChange={e => handleSearch(e)} style={{ margin: '0 0 0 10px' }} placeholder='type here...' />
                }
                {/* <Button type="primary" style={{ margin: '0 30px 0 10px' }} onClick={() => handleSearch()}>
                    Search
                </Button> */}
            </div>
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

