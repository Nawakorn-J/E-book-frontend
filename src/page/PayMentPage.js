function PayMentPage() {
  return (
    <>
      <nav className="d-flex container-fluid  py-5 bg bg-danger">
        <div className="w-50 d-flex flex-column justify-content-center py-1 bg bg-white">
          <h1>hi</h1>
          <div>
            <ol className="flex boder boder-dark">บัตรเครดิต/เดบิต</ol>
            <ol>สแกนจ่าย/Thai QR/ PromptPay</ol>
            <ol>โมบายแบงก์กิ้ง/ทรูมันนี่/QR code</ol>
          </div>
        </div>
        <div className="w-50  d-flex justify-content-center py-5 bg bg-primary">
          <h1>total</h1>
          <h1>total price</h1>
        </div>
      </nav>
    </>
  );
}

export default PayMentPage;
