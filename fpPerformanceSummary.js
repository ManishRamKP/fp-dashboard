import React from "react";
import styled from "styled-components";

const PerformanceSummary = ({ PerformanceSummaryObj }) => {
  console.log(" PerformanceSummaryObj is", PerformanceSummaryObj);

  return (
    <Performance>
      <div className="main-title">Product Performance Summary</div>

      <div className="grid">
        <div className="card">
          <div className="card-header">Exposure / LoanBook</div>
          <div className="metric">Exposure/Loan</div>
          <div className="value currency">
            {PerformanceSummaryObj?.map((i) => {
              return <>{i?.kpi === "Exposure/Loan book" ? i?.value : null}</>;
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-header">Ticket Size</div>
          <div className="metric">Ticket</div>
          <div className="value currency">
            {PerformanceSummaryObj?.map((i) => {
              return <>{i?.kpi === "Ticket Size" ? i?.value : null}</>;
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-header">Transaction Disbursements</div>
          <div className="split-metric">
            <div>
              <div className="metric">Total Disbursements</div>
              <div className="value currency">
                {PerformanceSummaryObj?.map((i) => {
                  return (
                    <>{i?.kpi === "Total Disbursement" ? i?.value : null}</>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="metric">Transaction Disbursements</div>
              <div className="value">
                {PerformanceSummaryObj?.map((i) => {
                  return (
                    <>
                      {i?.kpi === "Transaction Disbursements Count"
                        ? i?.value
                        : null}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="card">
          <div className="card-header">FLDG Limit</div>
          <div className="metric">FLDG Limit (15%)</div>
          <div className="value">
            {PerformanceSummaryObj?.map((i) => {
              return <>{i?.kpi === "FLDG Limit" ? i?.value : null}</>;
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-header">Approved Transactions</div>
          <div className="split-metric">
            <div>
              <div className="metric">Transactions Approved</div>
              <div className="value">
                {PerformanceSummaryObj?.map((i) => {
                  return (
                    <>
                      {i?.kpi === "Transaction Approved Count"
                        ? i?.value
                        : null}
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="metric">Transaction Approved Value</div>
              <div className="value currency">
                {PerformanceSummaryObj?.map((i) => {
                  return (
                    <>
                      {i?.kpi === "Transaction Approved Value"
                        ? i?.value
                        : null}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Wt ROI on disbursement</div>
          <div className="metric">Weighted ROI</div>
          <div className="value">
            {PerformanceSummaryObj?.map((i) => {
              return (
                <>
                  {i?.kpi === "Weighted ROI On Disbursement" ? i?.value : null}
                </>
              );
            })}
          </div>
        </div>

        {/* Third Row */}
        <div className="card">
          <div className="card-header">Due Collections</div>
          <div className="metric">Due Collection</div>
          <div className="value currency">
            {PerformanceSummaryObj?.map((i) => {
              return <>{i?.kpi === "Due Collection" ? i?.value : null}</>;
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            Average Tenure of the product (days)
          </div>
          <div className="metric">Average Tenure</div>
          <div className="value">
            {PerformanceSummaryObj?.map((i) => {
              return (
                <>
                  {i?.kpi === "Average Tenure Of Product(in days)"
                    ? i?.value
                    : null}
                </>
              );
            })}
          </div>
        </div>

        <div className="card">
          <div className="card-header">Received Collection</div>
          <div className="metric">Received Collection</div>
          <div className="value currency">
            {PerformanceSummaryObj?.map((i) => {
              return <>{i?.kpi === "Received Collection" ? i?.value : null}</>;
            })}
          </div>
        </div>
      </div>
    </Performance>
  );
};

export default PerformanceSummary;

const Performance = styled.div`
  .main-title {
    margin-top: 50px;
    background: #a4c2f4;
    color: #000;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .card {
    border: 1px solid #e5e7eb;
  }

  .card-header {
    background: #a4c2f4;
    padding: 8px;
    text-align: center;
    font-weight: 500;
    color: #000;
  }

  .metric {
    background: #00b894;
    color: white;
    padding: 10px;
    text-align: center;
    font-weight: 500;
  }

  .value {
    background: #f8f9fa;
    padding: 10px;
    text-align: center;
  }

  .split-metric {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .currency::before {
    content: "₹ ";
  }
`;
