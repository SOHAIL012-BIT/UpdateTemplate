import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'dist/css/bootstrap.min.css'
import "./App.css";
import { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Form,Row,Col } from "react-bootstrap";
// import Header from "./components/header"; 



function App() {
  const [initData, setInitData] = useState({
    brand: "Skin Naturals",
    channel_Region: "Modern Trade",
    distributor: "AGC",
    mrp: 402.33334,
    tP_Tax: 307.03094,
    avg_On_Invoice: 22.41326,
    avg_On_Invoice_PerCent: 7.2999997,
    tpr: 6,
    tp: 1.12,
    tpR_in_PKR: 18.421856,
    value_for_GST: 266.19583,
    taxValue: 58.45868,
    tax: 1.17,
    net_Purchase: 324.6545,
    tpR_Unit_Allocation: 2000,
    tpR_BSR_Value: 36843.71,
    bsR_Number: 10899,
    comments: "AGC - North JBP  - LOHC TPR 4% for May '22",
  });
  // const [initData, setInitData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const result = await fetch(
  //         ``,

  //         {
  //           method: "POST",
  //         }
  //       );
  //       const userreq = await result.json();
  //       debugger
  //       setInitData(userreq.data);
  //       console.log(userreq);

  //     } catch (error) {
  //       setError(error);
  //     }
  //     setIsLoading(false);
  //   };
    
  //   fetchData();
  // }, []);



  const handleBrandChange = (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, brand: e.target.value });
  };
  const handleDistributorChange = (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, distributor: e.target.value });
  };
  const handleMrpChange = (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, mrp: e.target.value });
  };
  const handleInvoicePercentChange = (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, avg_On_Invoice_PerCent: e.target.value });
  };
  const handletprChange = (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, tpr: e.target.value });
  };
  const handleTpChange = (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, tp: e.target.value });
  };
  const handletaxChange = (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, tax: e.target.value });
  };
  const handletpR_Unit_AllocationChange= (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, tpR_Unit_Allocation: e.target.value });
  };
  const handlebsR_NumberChange= (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, bsR_Number: e.target.value });
  };
  const handlecommentsChange= (e) => {
    console.log(e.target.value, " brand change");
    setInitData({ ...initData, comments: e.target.value });
  };

  const submitForm = (e) => {
    e.prevantdefault();
    console.log(initData, " ---- payload send to");
  };

  return (
    
    <div className="App">
      {/* <Header /> */}
      <h1>Update Table</h1>
      <div className="container">
      <Form onSubmit={submitForm}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Brand Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Brand Name"  name="brand"
                      defaultValue={initData.brand}
                      onChange={handleBrandChange}
                      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Distributor Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Distributor Name"  name="distributor"
                      defaultValue={initData.distributor}
                      onChange={handleDistributorChange}/>
    </Form.Group>
  </Row>
  {/* Row 2 */}
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>MRP Price</Form.Label>
      <Form.Control type="number" placeholder="Enter MRP Price"  name="mrp"
                      defaultValue={initData.mrp}
                      onChange={handleMrpChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Average Invoice Percentage</Form.Label>
      <Form.Control type="number" placeholder="Enter Average invoice Percentage"  name="avg_On_Invoice_PerCent"
                      defaultValue={initData.avg_On_Invoice_PerCent}
                      onChange={handleInvoicePercentChange} />
    </Form.Group>
  </Row>
  {/* ROw 3 */}
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>TPR</Form.Label>
      <Form.Control type="number" placeholder="Enter TPR"  name="tpr"
                      defaultValue={initData.tpr}
                      onChange={handletprChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>TP</Form.Label>
      <Form.Control type="number" placeholder="Enter TP" name="tp"
                      defaultValue={initData.tp}
                      onChange={handleTpChange} />
    </Form.Group>
  </Row>
  {/* ROw 4 */}
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Tax</Form.Label>
      <Form.Control type="number" placeholder="Enter Tax" name="tax"
                      defaultValue={initData.tax}
                      onChange={handletaxChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>TPR Unit Allocation</Form.Label>
      <Form.Control type="number" placeholder="Enter Unit Allocation" name="tpR_Unit_Allocation"
                      defaultValue={initData.tpR_Unit_Allocation}
                      onChange={handletpR_Unit_AllocationChange} />
    </Form.Group>
  </Row>
  {/* Row 5 */}
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>BSR Number</Form.Label>
      <Form.Control type="number" placeholder="Enter BSR Number"  name="bsR_Number"
                      defaultValue={initData.bsR_Number}
                      onChange={handlebsR_NumberChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Comments</Form.Label>
      <Form.Control type="text"rows="2" placeholder="Enter Comment"  name="comments"
                      defaultValue={initData.comments}
                      onChange={handlecommentsChange} />
    </Form.Group>
  </Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
    </div>
    </div>
  );
}
export default App;
