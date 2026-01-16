import { useAppContext } from "../context/AppContext";

export default function Stats() {
  const { data } = useAppContext();

  const converted = data.leads.filter(l => l.status === "Converted").length;

  return (
    <div className="stats">
      <div className="stat-box">
        <h4>Total Leads</h4>
        <p>{data.leads.length}</p>
      </div>

      <div className="stat-box">
        <h4>Total Calls</h4>
        <p>{data.calls.length}</p>
      </div>

      <div className="stat-box">
        <h4>Converted</h4>
        <p>{converted}</p>
      </div>
    </div>
  );
}
