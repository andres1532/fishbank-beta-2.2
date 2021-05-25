import { useEffect } from "react";
import io from "socket.io-client";
export default function App() {
  const dd = localStorage.getItem("userdata");
  const ff = JSON.parse(dd);

  useEffect(() => {
    const logs = () => {
      const socket = io("ws://localhost:3030");
      socket.on("connection", () => {});
    };
    logs();
  }, []);
  console.log(ff);
  return <div>MAnager</div>;
}
