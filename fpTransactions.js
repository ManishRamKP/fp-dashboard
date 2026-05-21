import React from "react";
import styled from "styled-components";

const Transactions = ({ PerformanceSummaryObj2 }) => {
  console.log("Transaction is :", PerformanceSummaryObj2);
  const transactionsData = [
    {
      dealDate: "2024-07-22",
      borrower: "Sample Borrower A",
      period: "30",
      billValue: "3,109,589",
      discount: "20",
      loan: "2,487,671",
      interestRate: "18",
      interestAmount: "36,804",
      netPayment: "2,450,868",
      offerNo: "OFAD-SAMPLE-0001",
    },
    {
      dealDate: "2024-06-04",
      borrower: "Sample Borrower B",
      period: "30",
      billValue: "2,116,114",
      discount: "20",
      loan: "1,692,891",
      interestRate: "16",
      interestAmount: "22,263",
      netPayment: "1,670,628",
      offerNo: "OFAD-SAMPLE-0002",
    },
    {
      dealDate: "2024-09-12",
      borrower: "Sample Borrower C",
      period: "60",
      billValue: "1,227,205",
      discount: "20",
      loan: "981,764",
      interestRate: "19",
      interestAmount: "30,663",
      netPayment: "950,800",
      offerNo: "OFAD-SAMPLE-0003",
    },
    {
      dealDate: "2024-08-16",
      borrower: "Sample Borrower D",
      period: "30",
      billValue: "172,892",
      discount: "20",
      loan: "138,314",
      interestRate: "18",
      interestAmount: "2,046",
      netPayment: "136,267",
      offerNo: "OFAD-SAMPLE-0004",
    },
    {
      dealDate: "2024-09-24",
      borrower: "Sample Borrower E",
      period: "15",
      billValue: "710,859",
      discount: "20",
      loan: "568,687",
      interestRate: "18",
      interestAmount: "4,207",
      netPayment: "564,480",
      offerNo: "OFAD-SAMPLE-0005",
    },
    {
      dealDate: "2024-09-25",
      borrower: "Sample Borrower C",
      period: "60",
      billValue: "785,600",
      discount: "34.3",
      loan: "516,139",
      interestRate: "19",
      interestAmount: "16,121",
      netPayment: "500,018",
      offerNo: "OFAD-SAMPLE-0006",
    },
  ];

  return (
    <TransactionContainer>
      {/* Weighted Metrics Section */}
      <div className="weighted-metrics">
        <div className="main-title">Weighted Metrics</div>
        <div className="metrics-grid">
          <div>
            <div className="metric-header">Weighted ROI</div>
            <div className="metric-value">XX.XX</div>
          </div>
          <div>
            <div className="metric-header">Weighted Tenure (days)</div>
            <div className="metric-value">XX.XX</div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="main-title">Transactions</div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="sort-icon">Deal Date</th>
              <th className="sort-icon">Borrower</th>
              <th className="sort-icon">Period</th>
              <th className="sort-icon">Bill Value</th>
              <th className="sort-icon">Discount</th>
              <th className="sort-icon">Loan</th>
              <th className="sort-icon">Interest rate</th>
              <th className="sort-icon">Interest Amount</th>
              <th className="sort-icon">Net Payment</th>
              <th className="sort-icon">Payment detail</th>
              <th>Offer No</th>
            </tr>
          </thead>
          <tbody>
            {PerformanceSummaryObj2.map((row, index) => (
              <tr key={index}>
                <td>{row.disbursement_date}</td>
                <td>{row.anchor_trader_name}</td>
                <td>{row.term}</td>
                <td className="currency">{row.bill_value}</td>
                <td>{row.discount}</td>
                <td className="currency">{row.loan}</td>
                <td>{row.interest_rate}</td>
                <td className="currency">{row.interest_amount}</td>
                <td className="currency">{row.pby_net_amount}</td>
                <td>{row.payment_details || "-"}</td>
                <td>{row.accepted_offer_ref_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TransactionContainer>
  );
};

export default Transactions;

const TransactionContainer = styled.div`
  .main-title {
    background: #a4c2f4;
    color: #000;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .weighted-metrics {
    margin-bottom: 20px;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .metric-header {
    background: #00b894;
    color: white;
    padding: 10px;
    text-align: center;
    font-weight: 500;
  }

  .metric-value {
    background: #f8f9fa;
    padding: 10px;
    text-align: center;
  }

  .table-container {
    overflow-x: auto;
    margin-top: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    white-space: nowrap;
  }

  th {
    background: #00b894;
    color: white;
    padding: 8px 12px;
    text-align: left;
    font-weight: 500;
    white-space: nowrap;
  }

  td {
    padding: 8px 12px;
    background: #f8f9fa;
    border-bottom: 1px solid #e5e7eb;
  }

  tr:nth-child(even) td {
    background: #f0f0f0;
  }

  .currency::before {
    content: "₹ ";
  }

  .sort-icon::after {
    content: "↕";
    margin-left: 4px;
  }
`;
