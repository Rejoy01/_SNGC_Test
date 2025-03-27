import  express from 'express';
import cors from 'cors';

const app = express();

const port = 3000;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors())

app.post('/get-fee-details', (req, res) => {
    const { id, password, api_key, from_date, to_date } = req.body;

    // Demo response for the given request body
    const staticResponse = [
        { 
            "receipt_no": "0001001",
            "admission_no": "01-DEMO-BATCH-01",
            "name": "JOHN DOE",
            "date": "05/03/2025",
            "unireg_no": "DEMO2025UNIREG01",
            "batch": "BATCH DEMO 2025",
            "installment": "1st SEM",
            "transactions": [
                {
                    "feehead": "Tuition Fee",
                    "amount": "20000.00",
                    "method": "Credit Card",
                    "status": "Cash Received",
                    "processed_by": "JANE SMITH"
                }
            ]
        },
        { 
            "receipt_no": "0001002",
            "admission_no": "02-DEMO-BATCH-02",
            "name": "ALICE JOHNSON",
            "date": "07/03/2025",
            "unireg_no": "DEMO2025UNIREG02",
            "batch": "BATCH DEMO 2025",
            "installment": "2nd SEM",
            "transactions": [
                {
                    "feehead": "Hostel Fee",
                    "amount": "15000.00",
                    "method": "Net Banking",
                    "status": "Pending",
                    "processed_by": "MARK WILSON"
                }
            ]
        }
    ];
    

    // Send the static response if credentials match the demo values
    if (
        id === "demo_id" &&
        password === "demo_password" &&
        api_key === "demo_api_key" &&
        from_date && to_date
    ) {
        res.json(staticResponse);
    } else {
        res.status(401).json({ message: "Unauthorized access or invalid request" });
    }
});

app.post('/api/feedetails',(req, res) => {

    const { id, password, api_key, from_date, to_date } = req.body;
    
    const staticResponse2 = {
        "FeeDetails": [
          {
            "ReceiptInfo": [
              {
                "receipt_no": "0001001",
                "admission_no": "01-DEMO-BATCH-01",
                "name": "JOHN DOE",
                "date": "05/03/2025",
                "unireg_no": "DEMO2025UNIREG01",
                "batch": "BATCH DEMO 2025",
                "installment": "1st SEM",
                "transactions": [
                  "Feehead: Tuition Fee",
                  "Amount: 20000.00",
                  "Method: Credit Card",
                  "Status: Cash Received",
                  "Processed by: JANE SMITH"
                ]
              }
            ]
          },
          {
            "ReceiptInfo": [
              {
                "receipt_no": "0001002",
                "admission_no": "02-DEMO-BATCH-02",
                "name": "ALICE JOHNSON",
                "date": "07/03/2025",
                "unireg_no": "DEMO2025UNIREG02",
                "batch": "BATCH DEMO 2025",
                "installment": "2nd SEM",
                "transactions": [
                  "Feehead: Hostel Fee",
                  "Amount: 15000.00",
                  "Method: Net Banking",
                  "Status: Pending",
                  "Processed by: MARK WILSON"
                ]
              }
            ]
          }
        ]
      }

    if (
        id === "demo_id" &&
        password === "demo_password" &&
        api_key === "demo_api_key" &&
        from_date && to_date
    ) {
        res.json(staticResponse2);
    } else {
        res.status(401).json({ message: "Unauthorized access or invalid request" });
    }

})

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
