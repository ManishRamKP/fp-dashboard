# fp-dashboard

A React dashboard for Finance Partners (FP) providing a daily financial report across three views — Product Performance Summary, Transactions, and Receivable Tracker. Data is fetched dynamically via template-based API queries.

---

## Overview

The dashboard is split into three tab views:

| Tab | Component | Description |
|---|---|---|
| Product Performance Summary | `fpPerformanceSummary.js` | KPI cards — exposure, ticket size, disbursements, FLDG, ROI, collections |
| Transactions | `fpTransactions.js` | Weighted ROI/tenure metrics and a full transaction table |
| Receivable Tracker | `fpReceivableTracker.js` | Funded/outstanding summary and due-date tracker table |

---

## Prerequisites

- Node.js 16+
- React 18+
- `styled-components`
- Auth context (`useAuth`) providing a valid JWT token
- Backend API supporting `execute-query` with template IDs 17, 18, 19

---

## Template IDs

| Template ID | Data |
|---|---|
| 17 | Performance Summary KPIs |
| 18 | Transactions |
| 19 | Receivable Tracker |

These are passed to `dashBoardController` via `TemplateBasedFpCall(templateId)`.

---

## Usage

Drop the components into your React project and render `MainDashboard`:

```jsx
import MainDashboard from "./fpDashboardHome";

<MainDashboard setActiveIndex={setActiveIndex} />
```

The component handles its own data fetching via `dashBoardController` from `../API/FP/Actions`.

---

## Security Notes

- Auth tokens are managed via the `useAuth` context — never hardcode tokens in component files
- On a 401 response, the auth state is cleared and the user is redirected to the login page
- Sample/mock data arrays in `fpReceivableTracker.js` and `fpTransactions.js` are for local development only — remove or replace with live API data before deploying
