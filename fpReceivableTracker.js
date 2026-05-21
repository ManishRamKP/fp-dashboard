import React from "react";
import styled from "styled-components";

const ReceivableTracker = ({ PerformanceSummaryObj1 }) => {
  console.log("tracker is : ", PerformanceSummaryObj1);
  const receivablesData = [
    {
      dueDate: "2024-10-11",
      party: "Sample Party A",
      amount: 100000,
      actualReceipt: "2024-09-11",
    },
    {
      dueDate: "2024-10-11",
      party: "Sample Party A",
      amount: 200000,
      actualReceipt: "2024-09-11",
    },
    {
      dueDate: "2024-10-23",
      party: "Sample Party A",
      amount: 50000,
      actualReceipt: "2024-09-23",
    },
    {
      dueDate: "2024-10-23",
      party: "Sample Party A",
      amount: 150000,
      actualReceipt: "2024-09-23",
    },
    {
      dueDate: "2024-10-24",
      party: "Sample Party B",
      amount: 120000,
      actualReceipt: "2024-09-24",
    },
    {
      dueDate: "2024-10-25",
      party: "Sample Party C",
      amount: 175000,
      actualReceipt: "2024-09-25",
    },
    {
      dueDate: "2024-10-25",
      party: "Sample Party D",
      amount: 80000,
      actualReceipt: "2024-09-10",
    },
    {
      dueDate: "2024-10-25",
      party: "Sample Party D",
      amount: 160000,
      actualReceipt: "2024-09-10",
    },
    {
      dueDate: "2024-10-25",
      party: "Sample Party D",
      amount: 165000,
      actualReceipt: "2024-09-10",
    },
    {
      dueDate: "2024-10-27",
      party: "Sample Party A",
      amount: 300000,
      actualReceipt: "2024-09-27",
    },
  ];

  return (
    <ReceiverContainer>
      {/* Receivables Summary */}
      <div className="main-title">Receivables</div>
      <div className="summary-grid">
        <div>
          <div className="summary-header">Funded</div>
          <div className="summary-value currency">XX,XXX,XXX</div>
        </div>
        <div>
          <div className="summary-header">Outstanding</div>
          <div className="summary-value currency">XX,XXX,XXX</div>
        </div>
      </div>

      {/* Receivables Table */}
      <div className="main-title">Receivable Tracker</div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="sort-icon">Due Date</th>
              <th className="sort-icon">Party</th>
              <th className="sort-icon amount">Amount</th>
              <th className="sort-icon">Actual receipt date</th>
            </tr>
          </thead>
          <tbody>
            {PerformanceSummaryObj1.map((row, index) => (
              <tr key={index}>
                <td>{row.due_date}</td>
                <td>{row.party}</td>
                <td className="amount currency">
                  {row.amount.toLocaleString()}
                </td>
                <td>{row.actual_receipt_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ReceiverContainer>
  );
};

export default ReceivableTracker;
const ReceiverContainer = styled.div`
  .main-title {
    background: #a4c2f4;
    color: #000;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
  }

  .summary-header {
    background: #00b894;
    color: white;
    padding: 10px;
    text-align: center;
    font-weight: 500;
  }

  .summary-value {
    background: #f8f9fa;
    padding: 10px;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    background: #00b894;
    color: white;
    padding: 8px 12px;
    text-align: left;
    font-weight: 500;
  }

  td {
    padding: 8px 12px;
    background: #f8f9fa;
    border-bottom: 1px solid #e5e7eb;
  }

  tr:nth-child(even) td {
    background: #f0f0f0;
  }

  .amount {
    text-align: right;
  }

  .currency::before {
    content: "₹ ";
  }

  .sort-icon::after {
    content: "↕";
    margin-left: 4px;
  }
`;
