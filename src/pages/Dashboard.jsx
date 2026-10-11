import { useEffect } from "react";
import { getDashboardData } from "../services/dashboardService";

function Dashboard() {

  const token = localStorage.getItem("token");

  useEffect(() => {

    const fetchDashboard = async () => {

      const response = await getDashboardData();

      console.log(response.data);
    };

    fetchDashboard();

  }, []);

  return (
    <div>
      <h1>📊 FinPilot AI Dashboard</h1>

      {token ? (
        <h3>✅ User Authenticated</h3>
      ) : (
        <h3>❌ User Not Authenticated</h3>
      )}
    </div>
  );
}

export default Dashboard;