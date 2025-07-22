import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [usage, setUsage] = useState([]);

  useEffect(() => {
    // Fetch users
    const fetchUsers = async () => {
      const { data } = await supabase.from("users").select("*");
      setUsers(data || []);
    };

    // Fetch usage logs
    const fetchLogs = async () => {
      const { data } = await supabase.from("usage_logs").select("*");
      setUsage(data || []);
    };

    fetchUsers();
    fetchLogs();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>🔐 Admin Panel</h1>

      <h2>👤 Users</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Credits</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.credits}</td>
              <td>{u.plan}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>📊 Usage Logs</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Action</th>
            <th>Credits Used</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {usage.map((log, i) => (
            <tr key={i}>
              <td>{log.user_id}</td>
              <td>{log.action}</td>
              <td>{log.credits_used}</td>
              <td>{new Date(log.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
