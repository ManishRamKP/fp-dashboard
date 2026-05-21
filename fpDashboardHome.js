import React, { useEffect, useState } from "react";
import PerformanceSummary from "./fpPerformanceSummary";
import Transactions from "./fpTransactions";
import ReceivableTracker from "./fpReceivableTracker";
import { TemplateBasedFpCall } from "../Common/Constants";
import { controllerAPI, dashBoardController } from "../API/FP/Actions";
import { useAuth } from "../../context/auth";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const MainDashboard = ({ setActiveIndex }) => {
  setActiveIndex(2);
  const [currentPage, setCurrentPage] = React.useState("performance");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [templateId, setTemplateId] = useState(17);
  const [templateIdTransaction, setTemplateIdTransaction] = useState(18);
  const [templateIdTracker, setTemplateIdTracker] = useState(19);
  const [auth, setAuth] = useAuth();
  const [PerformanceSummaryObj, setPerformanceSummaryObj] = useState([]);
  const [PerformanceSummaryObj1, setPerformanceSummaryObj1] = useState([]);
  const [PerformanceSummaryObj2, setPerformanceSummaryObj2] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchUserDataTransaction();
    fetchUserDataTracker();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const constructObj = TemplateBasedFpCall(templateId);
      const response = await dashBoardController(
        "post",
        auth?.token,
        constructObj,
        "execute-query"
      );
      if (response?.response?.status === 401) {
        setAuth({
          ...auth,
          user: null,
          token: "",
          userDisplayName: "",
          userDetails: null,
        });
        localStorage.removeItem("auth");
        Navigate("/dashboard/");
      }

      if (response.res.status === 200) {
        setPerformanceSummaryObj(response?.res?.data);
      } else {
        throw new Error("Failed to fetch performance data");
      }
    } catch (err) {
      console.log("Error occurred!", err);
      setError("Failed to load performance data");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserDataTransaction = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const constructObj = TemplateBasedFpCall(templateIdTransaction);
      const response = await dashBoardController(
        "post",
        auth?.token,
        constructObj,
        "execute-query"
      );

      if (response.res.status === 200) {
        setPerformanceSummaryObj1(response?.res?.data);
      } else {
        throw new Error("Failed to fetch transaction data");
      }
    } catch (err) {
      console.log("Error occurred!", err);
      setError("Failed to load transaction data");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserDataTracker = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const constructObj = TemplateBasedFpCall(templateIdTracker);
      const response = await dashBoardController(
        "post",
        auth?.token,
        constructObj,
        "execute-query"
      );

      if (response.res.status === 200) {
        setPerformanceSummaryObj2(response?.res?.data);
      } else {
        throw new Error("Failed to fetch tracker data");
      }
    } catch (err) {
      console.log("Error occurred!", err);
      setError("Failed to load tracker data");
    } finally {
      setIsLoading(false);
    }
  };

  console.log("PerformanceSummary", PerformanceSummary);
  console.log("Transactions", PerformanceSummaryObj1);
  console.log("ReceivableTracker", PerformanceSummaryObj2);

  return (
    <Dashboard>
      <div className="dashboard-header">
        FP Dashboard - Daily Financial Report
      </div>

      <div className="nav-buttons">
        <button
          onClick={() => setCurrentPage("performance")}
          className={`tab-button ${
            currentPage === "performance" ? "active" : ""
          }`}
        >
          Product performance Summary
        </button>
        <button
          onClick={() => setCurrentPage("transactions")}
          className={`tab-button ${
            currentPage === "transactions" ? "active" : ""
          }`}
        >
          Transactions
        </button>
        <button
          onClick={() => setCurrentPage("receivables")}
          className={`tab-button ${
            currentPage === "receivables" ? "active" : ""
          }`}
        >
          Receivable Tracker
        </button>
      </div>

      <div className="content">
        {error && <div className="error">{error}</div>}
        {isLoading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            Loading...
          </div>
        ) : (
          <>
            {currentPage === "performance" && (
              <PerformanceSummary
                PerformanceSummaryObj={PerformanceSummaryObj}
              />
            )}
            {currentPage === "transactions" && (
              <Transactions PerformanceSummaryObj2={PerformanceSummaryObj2} />
            )}
            {currentPage === "receivables" && (
              <ReceivableTracker
                PerformanceSummaryObj1={PerformanceSummaryObj1}
              />
            )}
          </>
        )}
      </div>
    </Dashboard>
  );
};

export default MainDashboard;

const Dashboard = styled.div`
  margin-top: 70px;
  min-height: 100vh;
  background: #f8f9fa;
  padding: 20px;

  .dashboard-header {
    font-size: 24px;
    font-weight: bold;
    color: rgba(1, 41, 112, 0.8);
    margin-bottom: 20px;
  }

  .nav-buttons {
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 20px;
  }

  .tab-button {
    padding: 10px 20px;
    background: none;
    border: none;
    color: #666;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    margin-right: 20px;

    &.active {
      color: #0ea5e9;
      &:after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 2px;
        background: #0ea5e9;
      }
    }

    &:hover {
      color: #0ea5e9;
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    color: rgba(1, 41, 112, 0.6);
    font-size: 18px;
  }

  .error {
    color: #dc2626;
    text-align: center;
    padding: 20px;
    background: #fee2e2;
    border-radius: 8px;
    margin: 20px 0;
  }

  .content {
    min-height: 400px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;
