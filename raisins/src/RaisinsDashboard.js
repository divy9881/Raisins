import { Layout, theme, Card, Row, Col } from 'antd';
import React from 'react';

const { Content } = Layout;

function RaisinsDashboard() {
    return (
    <Content
        style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: "white",
    }}
    >
        <Row gutter={16}>
            <Col span={12}>
            <Card title="Total Donations" bordered={false} style={{fontSize: "50px", fontWeight: "bold", height: "400px", textAlign: "Center"}}>
                {Math.ceil(Math.random() * 500)} ETH
            </Card>
            </Col>
            <Col span={12}>
            <Card title="# of Organizations Supported" bordered={false} style={{fontSize: "50px", fontWeight: "bold", height: "400px", textAlign: "Center"}}>
                {Math.ceil(Math.random() * 10)} Organizations
            </Card>
            </Col>
            {/* <Col span={8}>
            <Card title="Card title" bordered={false}>
                Card content
            </Card>
            </Col> */}
        </Row>
    </Content>);
}

export default RaisinsDashboard;