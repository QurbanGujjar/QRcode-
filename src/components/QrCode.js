
import { Button, Input, QRCode, Card } from 'antd';
import { useState } from 'react';


export default function QrCode() {
    const [codenumber, setCodenumber] = useState("")
    const [showQR, setShowQR] = useState(false)
    const downloadQRCode = () => {
        const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
        if (canvas) {
            const url = canvas.toDataURL();
            const a = document.createElement('a');
            a.download = 'QRCode.png';
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        setShowQR(false)
        setCodenumber("")
    };
    return (
        <div className='QRmain'>
            <div className='lable'>
                <label>Enter QR Code</label>
            </div>
            <div className='inputQR'>
                <Input placeholder="Enter code Number" value={codenumber} onChange={(e) => setCodenumber(e.target.value)} />

                {codenumber && <Button type="primary" onClick={() => setShowQR(!showQR)} style={{ marginLeft: 10 }}>
                    Generate
                </Button>}
            </div>
            <div id="myqrcode">
                {showQR && codenumber &&
                    <Card className='qrCard'>
                        <QRCode
                            value={codenumber}
                            style={{
                                marginBottom: 16,
                            }}
                        />
                        <Button type="primary" onClick={downloadQRCode}>
                            Download
                        </Button>
                    </Card>
                }
            </div>
        </div>
    )
}