import { Card } from 'antd';
import { useState } from 'react';
import './App.css';
import Assets from './components/Assets';
import QrCode from './components/QrCode';

function App() {
  const [cardKey, setCardKey] = useState("Generate")



  const tabList = [
    {
      key: 'Generate',
      tab: 'Generate QR Code',
    },
    {
      key: 'Assets',
      tab: 'Assets',
    },

  ];
  const contentList = {
    Generate: (<QrCode />),
    Assets: (<Assets/>)

  }
  const onTabChange = (key, type) => {
    if (type) {
      setCardKey(key);
      // localStorage.setItem('DashboardCurrentKey', key);
    }
  };
  return (

    <div className="App">
      <header className="App-header">
        <Card
          className='navBarCard'
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={cardKey}
          loading={false}
          onTabChange={(key) => {
            onTabChange(key, 'key');
          }}
        >
          {contentList[cardKey]}
        </Card>



      </header>

    </div>
  );
}

export default App;
