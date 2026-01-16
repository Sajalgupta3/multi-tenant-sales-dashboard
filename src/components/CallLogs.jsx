import { useAppContext } from "../context/AppContext";

export default function CallLogs() {
  const { data } = useAppContext();

  if (!data.calls.length) {
    return (
      <div className="card">
        <h3>Call Logs</h3>
        <p>No calls available</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3>Call Logs</h3>

      {data.calls.map((call) => (
        <div key={call.id} className="card-item">
          {call.lead} | {call.time} | {call.duration} | {call.outcome}
        </div>
      ))}
    </div>
  );
}
