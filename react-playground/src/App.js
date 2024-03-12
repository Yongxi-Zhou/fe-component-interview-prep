import DataModal from "./components/DataModal";
import Todolist from "./components/Todolist"
import Message from "./components/Message"
import Login from "./components/Login"
function App() {
  return (
    <section className="fakeso">
      <DataModal />
      <Todolist />
      <Message />
      <Login />
    </section>
  );
}

export default App;
