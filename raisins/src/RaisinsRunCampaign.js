import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Tag, Layout } from 'antd';
import { ethers } from 'ethers';

import ContractConfigs from "./configs";

let Address = ContractConfigs['Address'];
let CampaignsContractABI = ContractConfigs['CampaignsContractABI'];

let state = {
    name: "",
    website: "",
    details: "",
    display: "",
    target: 0,
}

async function runCampaign(state) {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(Address, CampaignsContractABI.abi, signer);

        const transaction = await contract.runCampaign(state.name, state.display, state.website, state.details, parseInt(state.target));
        await transaction.wait();
    }
  }

function change(e) {
    console.log(e.target.name, e.target.value)
    state[e.target.name] = e.target.value;
}

function submit(e) {
    e.preventDefault();
    console.log(state);
    runCampaign(state);
};

function RaisinsRunCampaign() {
    const { TextArea } = Input;
    const [form] = Form.useForm();

    return (
        <Layout style={{ height: "100vh" }}>
            <Form
            form={form}
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: "white",
                overflow: "auto"
            }}
            layout="vertical"
            size="large"
            >
            <Form.Item label="Name" required tooltip="This is a required field">
                <Input name="name" placeholder="Name of the Campaign under which you want to run..."
                    onChange={change}/>
            </Form.Item>
            <Form.Item label="Display Photo" required tooltip="This is a required field">
                <Input  name="display" placeholder="Link to the image source to use a display picture for your campaign" onChange={change}/>
            </Form.Item>
            <Form.Item label="Website" required tooltip="This is a required field">
                <Input name="website" placeholder="Link to the Website for the Campaign: https://<my-campaign.com>" onChange={change}/>
            </Form.Item>
            <Form.Item label="Target" required tooltip="This is a required field">
                <Input name="target" placeholder="Target funds to be raised" onChange={change}/>
            </Form.Item>
            <Form.Item
                label="More Details"
                required
                tooltip={{
                title: 'Mention the details on the campaign. What is the cause of the campaign? How are the raised-funds are going to be used?',
                icon: <InfoCircleOutlined />,
                }}
            >
                <TextArea rows={4} name="details" placeholder="Write atleast 500 characters" onChange={change}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={submit}>Submit</Button>
            </Form.Item>
            </Form>
        </Layout>
    );
};


export default RaisinsRunCampaign;