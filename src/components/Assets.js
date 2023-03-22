import { Button, Card, Input, QRCode, Table } from "antd";
import QrCodeReader from "react-qrcode-reader";
import { useState } from "react";
const Assets = () => {
  let data = [
    {
      key: 1,
      QRCode: "QRCode",
      id: 1,
      itemDesc: "Item Description",
      QRCode: "Item Description1",
    },
    {
      key: 2,
      QRCode: "QRCode1",
      id: 2,
      itemDesc: "Item Description",
      QRCode: "Item Description2",
    },
    {
      key: 3,
      QRCode: "QRCode2",
      id: 3,
      itemDesc: "Item Description",
      QRCode: "Item Description3",
    },
    {
      key: 4,
      QRCode: "QRCode3",
      id: 4,
      itemDesc: "Item Description",
      QRCode: "Item Description4",
    },
    {
      key: 5,
      QRCode: "QRCode4",
      id: 5,
      itemDesc: "Item Description",
      QRCode: "Item Description5",
    },
  ];
  // handleTableChange = (pagination) => {
  //     this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
  //   };
  // eslint-disable-next-line
  const [maxResultCount, setMaxResultCount] = useState(10);
  // eslint-disable-next-line
  const [totalCount, setTotalCount] = useState(10);
  // eslint-disable-next-line
  const [tableLoading, setTableLoading] = useState(false);
  // eslint-disable-next-line
  const [items, setItems] = useState(data);
  const [codenumber, setCodenumber] = useState("");
  // eslint-disable-next-line
  const [showQR, setShowQR] = useState(false);
  // eslint-disable-next-line
  const [showScanner, setShowScanner] = useState(false);
  const [val, setVal] = useState("");
  // eslint-disable-next-line
  const columns = [
    {
      title: "Item ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      //...this.getColumnSearchProps('QRCode'),
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Item Desc",
      dataIndex: "QRCode",
      key: "QRCode",
      width: 100,
      render: (text) => <div>{text}</div>,
    },
    {
      title: "QR Code",
      dataIndex: "itemDesc",
      key: "itemDesc",
      width: 100,

      render: (text) => (
        <QRCode
          value={text}
          style={{
            marginBottom: 5,
          }}
        />
      ),
    },
  ];
  const handleRead = (code) => {
    setVal(code.data);
  };
  const getAssertDetails = () => {
    let newDate = data.filter((item) => item.QRCode === codenumber.trim());
    newDate ? setItems(newDate) : setItems([]);
  };
  const getAssertDetailsByScan = () => {
    console.log(val);
    let newDate = data.filter((item) => item.QRCode === val.trim());
    debugger;
    newDate ? setItems(newDate) : setItems([]);
    setVal("");
    setShowScanner(false);
  };
  return (
    <>
      <div className="Main">
        <div className="leftChild">
          <div className="lable">
            <label>Enter Description</label>
          </div>

          <div className="inputQR">
            <Input
              placeholder="Enter item Description"
              value={codenumber}
              onChange={(e) => setCodenumber(e.target.value)}
            />

            {codenumber && (
              <Button
                type="primary"
                onClick={() => getAssertDetails()}
                style={{ marginLeft: 10 }}
              >
                {" "}
                Get Item Details{" "}
              </Button>
            )}
          </div>
        </div>
        <div className="rightChild">
          <div className="ScanQR">
            <Button className="buttonQR" type="primary" onClick={() => setShowScanner(!showScanner)}>
              {" "}
              {!showScanner ? "Get Scanner" : "Close Scanner"}{" "}
            </Button>

            <div className="">
              {showScanner && (
                <>
                <QrCodeReader
                    width={200}
                    height={200}
                    onRead={handleRead}
                  />
                </>
              )}
            </div>
            
            
          </div>
        </div>
      </div>

      
      {items.length && (
        <Table
          rowKey={(record) => record?.id.toString()}
          size={"middle"}
          style={{ marginTop: 10 }}
          scroll={{ x: 900, y: window.innerHeight > 780 ? 800 : 400 }}
          bordered={true}
          columns={columns}
          pagination={{
            pageSize: maxResultCount,
            total: totalCount,
            defaultCurrent: 1,
          }}
          loading={tableLoading}
          dataSource={items === undefined ? [] : items}
          // onChange={handleTableChange}
          // rowSelection={rowSelection}
          className="Table"
        />
      )}
    </>
  );
};

export default Assets;
