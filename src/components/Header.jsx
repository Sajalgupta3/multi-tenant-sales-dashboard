import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { tenant, role, setTenant, setRole } = useAppContext();

  return (
    <div className="header">
      <h2>Multi-Tenant Sales Dashboard</h2>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <select value={tenant} onChange={(e) => setTenant(e.target.value)}>
          <option value="orgA">Organization A</option>
          <option value="orgB">Organization B</option>
        </select>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Agent">Agent</option>
        </select>

        <span className="role-badge">
          {role === "Admin" ? "Admin Access" : "Read Only"}
        </span>
      </div>
    </div>
  );
}
