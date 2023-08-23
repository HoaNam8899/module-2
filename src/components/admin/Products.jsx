import React from 'react'
import { useEffect } from 'react';
import { Button, Space, Table, Modal, Form, Input, Select } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { storage } from '../../config/firebase';
export const Products = () => {

    useEffect(() => {
        dispatch({ type: 'GET_ALL_PRODUCT' })
    }, [])
    const products = useSelector(p => p.product.allProduct)
    const [editProduct, setEditProduct] = useState({})
    const dispatch = useDispatch()
    const [imgURL, setImgURL] = useState()
    // for table
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'image',
            key: 'image',
            dataIndex: 'image',
            render: (img) => <img src={img} style={{ height: '50px', width: 'auto' }} />
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'discount',
            dataIndex: 'discount',
            key: 'discount',
        },
        {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'id',
            dataIndex: 'id',// thay đổi thành id để lấy id
            render: (id) => (
                <Space size="middle">
                    {/* edit */}
                    <a onClick={() => handleUpdate(id)}>Edit</a>
                    {/* delete */}
                    <a onClick={() => handleDelete(id)}>Delete</a>
                </Space>
            ),
        },
    ];
    // form / modal
    const [form] = Form.useForm();
    const [formEdit] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    // show/hide modal
    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const showModalEdit = () => {
        setOpenEdit(true);
    };

    const hideModalEdit = () => {
        setOpenEdit(false);
    };

    // add product
    const onFinish = (value) => {
        value.image = imgURL
        dispatch({ type: "ADD_PRODUCT", payload: value })
        form.resetFields();
    };

    // image
    const handleImage = async (e) => {
        let pathImage = e.target.value.replace(/^.*\\/, "");
        let path = `/imageProducts/${pathImage}`;
        const storageRef = ref(storage, path);
        let response = await uploadBytes(storageRef, e.target.files[0]);

        let imgUploaded = await getDownloadURL(response.ref);
        setImgURL(imgUploaded)



    }
    // update 
    const handleUpdate = (id) => {
        let result = [...products].filter(x => x.id.indexOf(id) >= 0)
        setEditProduct({ ...editProduct, image: result[0].image, category: result[0].category, status: result[0].status, id: id })
        formEdit.setFieldsValue({
            name: result[0].name,
            description: result[0].description,
            price: result[0].price,
            discount: result[0].discount,
        });
        showModalEdit();
    }
    // value select
    const initialValues = {
        category: editProduct.category,
        status: editProduct.status
    };
    const onFinishEdit = (value) => {
        value = { ...value, id: editProduct.id }
        value.image = value.image == undefined ? editProduct.image : imgURL
        dispatch({ type: 'UPDATE_PRODUCT', payload: value })
    }

    // delete
    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_PRODUCT', payload: id })
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add new
            </Button>
            <Table
                columns={columns}
                dataSource={products}
                rowKey={record => record.id}

                pagination={{
                    pageSizeOptions: ['5', '10'],
                    defaultPageSize: 5,
                    showSizeChanger: true
                }}
            />

            {/* add product modal*/}
            <Modal
                title="Modal"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                footer={null}
            >

                <Form name="form_item_path" layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item label="name" name="name" >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label="image" name="image"  >
                        <Input type='file' onChange={(e) => handleImage(e)} />
                    </Form.Item>
                    <img src={imgURL} alt="" style={{ height: '50px', width: 'auto', marginBottom: '10px' }} />
                    <Form.Item label="description" name="description" >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label="price" name="price" >
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item label="discount" name="discount" >
                        <Input type='number' />
                    </Form.Item>

                    <Form.Item label="category" name="category" >
                        <Select
                        // style={{ width: 120 }}

                        >
                            <Select.Option value="vegetable">Vegetable</Select.Option>
                            <Select.Option value="fruit">Fruit</Select.Option>
                            <Select.Option value="meat">Meat</Select.Option>
                            <Select.Option value="fish">Fish</Select.Option>
                            <Select.Option value="frozen">Frozen</Select.Option>
                            <Select.Option value="package">Package</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="status" name="status" >
                        <Select
                        // style={{ width: 120 }}
                        >
                            <Select.Option value="stocking">Stocking</Select.Option>
                            <Select.Option value="out of stock">Out of stock</Select.Option>
                        </Select>
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
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

                <Form name="form" layout="vertical" form={formEdit} initialValues={initialValues} onFinish={onFinishEdit}>
                    <Form.Item label="name" name="name" >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label="image" name="image"  >
                        <Input type='file' onChange={(e) => handleImage(e)} />
                    </Form.Item>
                    <img src={editProduct.image} alt="" style={{ height: '50px', width: 'auto', marginBottom: '10px' }} />
                    <Form.Item label="description" name="description" >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label="price" name="price" >
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item label="discount" name="discount" >
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item label="category" name="category" >
                        <Select  >
                            <Select.Option value="vegetable">Vegetable</Select.Option>
                            <Select.Option value="fruit">Fruit</Select.Option>
                            <Select.Option value="meat">Meat</Select.Option>
                            <Select.Option value="fish">Fish</Select.Option>
                            <Select.Option value="frozen">Frozen</Select.Option>
                            <Select.Option value="package">Package</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="status" name="status" >
                        <Select >
                            <Select.Option value="stocking">Stocking</Select.Option>
                            <Select.Option value="out of stock">Out of stock</Select.Option>
                        </Select>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit update
                    </Button>
                </Form>
            </Modal>
        </>
    )
}
// value={updateProduct.name}
// value={updateProduct.descript}
// value={updateProduct.price}
// value={updateProduct.discount}
