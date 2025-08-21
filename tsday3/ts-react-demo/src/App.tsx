// import { useState } from "react";
import { Button, Button2, Card } from "./components/Demo1";
import { Layout } from "./components/Layout1";
import { List } from "./components/Demo2";
// import { Button3 } from "./components/Demo";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>Home</div>
      <Button label="click1" onClick={() => alert("click")} />
      <Button2 label="click2" onClick={() => alert("click")} />
      <Layout>
        <Card title="content" description="description" />
      </Layout>
      <List
        items={["apple", "banana", "orange"]}
        render={(item) => <span>{item.toUpperCase()}</span>}
      />
      ;
    </>
  );
}

export default App;
