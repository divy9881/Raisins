import { Layout, theme } from 'antd';


const { Content } = Layout;
// const {token: { colorBgContainer },} = theme.useToken();

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
        Content
    </Content>);
}

export default RaisinsDashboard;