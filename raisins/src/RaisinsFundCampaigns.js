import React, { useEffect, useState } from 'react';
import { Col, Divider, Row, Layout, Button, Modal, Progress } from 'antd';
import { ethers } from 'ethers';

import ContractConfigs from "./configs";

let Address = ContractConfigs['Address'];
let CampaignsContractABI = ContractConfigs['CampaignsContractABI'];

const style = {
  padding: '8px 10px',
  marginLeft: "10px",
  margin: '5px',
  borderRadius: "25px",
  borderStyle: 'solid',
  textAlign: 'center'

};

const RaisinsFundCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(0);

    const showModal = (e) => {
        setIsModalOpen(true);
    };

    const handleOk = (e) => {
        setIsModalOpen(false);
    };

    const handleCancel = (e) => {
        setIsModalOpen(false);
    };

    async function fetchCampaign(){
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(Address, CampaignsContractABI.abi, provider);
            try {
                const data = await contract.getCampaigns()
                console.log('data: ');
                console.log('data: ', data);
                return data;
            } catch (err) {
                console.log("Error: ", err);
            }
        }
    }

    useEffect(() => {
        fetchCampaign()
          .then((data) => {
            let campaigns = [];
            console.log("hellojvjhvwhjv");
            console.log(data);
            for (let campaign of data) {
                let object = {};
                object.name = campaign.name;
                object.display = campaign.display;
                object.website = campaign.website;
                object.details = campaign.details;
                object.target = campaign.target.toNumber();
                object.done = Math.ceil(Math.random() * object.target);
                object.percent = Math.ceil(object.done / object.target * 100);
                console.log(object.target);
                campaigns.push(object);
            }
            console.log(campaigns);
            setCampaigns(campaigns);
          });
    }, []);

    return (
    <Layout>
    <Row gutter={[16, 24]}>
        {
            campaigns.map((campaign) =>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img src={campaign.display} alt={campaign.name} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                        <a href={campaign.website}><span style={{fontWeight: 'bold', fontSize: '20px'}}>{campaign.name}</span></a>
                        <br/>
                        <Progress percent={campaign.percent} status="active" />
                        <span style={{fontWeight: 'bold', fontSize: '20px'}}>{campaign.done} Ethers already raised out of {campaign.target} Ethers</span>
                        <br/>
                        <Button type="primary" style={{marginTop: "10px"}} onClick={showModal}>Know More</Button>
                    </div>
                </Col>
            )
        }
        <Modal title="Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {campaigns.length != 0
        ? <p>{campaigns[0].details}</p>
        : <></>
        }
        </Modal>
    </Row>
  </Layout>)
};
export default RaisinsFundCampaigns;