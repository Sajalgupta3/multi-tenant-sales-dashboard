import { useAppContext } from "../context/AppContext";
import { useState } from "react";

export default function Leads() {
  const { data, role } = useAppContext();
  const [leads, setLeads] = useState(data.leads);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const updateStatus = (id, newStatus) => {
    setLeads(
      leads.map((lead) =>
        lead.id === id ? { ...lead, status: newStatus } : lead
      )
    );
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search);

    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="card">
      <h3>Leads</h3>

      {/* SEARCH + FILTER */}
      <div className="lead-controls">
        <input
          type="text"
          placeholder="Search by name or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
          <option value="Lost">Lost</option>
        </select>
      </div>

      {/* LEADS LIST */}
      {filteredLeads.length === 0 && (
        <p style={{ marginTop: "16px", color: "#6b7280" }}>
          No leads found
        </p>
      )}

      {filteredLeads.map((lead) => (
        <div key={lead.id} className="lead-item">
          <div className="lead-header">
            <h4>{lead.name}</h4>
            <span className="priority">
              {lead.priority || "Medium"} Priority
            </span>
          </div>

          <div className="lead-row">
            <span>📞 {lead.phone}</span>
            {lead.email && <span>📧 {lead.email}</span>}
          </div>

          <div className="lead-meta">
            <span>
              Status:{" "}
              <strong className={`status ${lead.status.toLowerCase()}`}>
                {lead.status}
              </strong>
            </span>
            {lead.lastContacted && (
              <span>Last Contacted: {lead.lastContacted}</span>
            )}
          </div>

          {role === "Admin" && (
            <select
              value={lead.status}
              onChange={(e) => updateStatus(lead.id, e.target.value)}
            >
              <option>New</option>
              <option>Contacted</option>
              <option>Converted</option>
              <option>Lost</option>
            </select>
          )}
        </div>
      ))}
    </div>
  );
}
