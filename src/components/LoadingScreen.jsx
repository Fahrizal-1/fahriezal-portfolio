import { ClipLoader } from "react-spinners";
import "../styles/LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <ClipLoader color="#2563eb" size={70} speedMultiplier={1} />

      <h2>Fahriezal</h2>

      <p>Loading Portfolio...</p>
    </div>
  );
}

export default LoadingScreen;
