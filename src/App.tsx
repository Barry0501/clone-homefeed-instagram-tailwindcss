import "./App.css";
import { CircleAvatar } from "./components/circle_avatar";

function App() {
  return (
    <div className="App">
      <CircleAvatar
        url={"https://randomuser.me/api/portraits/men/78.jpg"}
        size={56}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <CircleAvatar
        url={"https://randomuser.me/api/portraits/men/79.jpg"}
        size={24}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default App;
