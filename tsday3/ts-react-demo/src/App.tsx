// import Lab5 from "./components/Lab5";
// import Lab6 from "./components/Lab6";
// import Lab7 from "./components/Lab7";
// import Lab8 from "./components/Lab8";
// import Lab9 from "./components/Lab9";
// import Lab10 from "./components/Lab10";
// import Lab11 from "./components/Lab11";
// import Lab12 from "./components/Lab12/Lab12";
// import Lab13 from "./components/Lab13";
// import Lab14 from "./components/Lab14";
import Lab15 from "./components/Lab15";

// import { useState } from "react";
// import { Button, Button2, Card } from "./components/Demo1";
// import { Layout } from "./components/Layout1";
// import { List } from "./components/Demo2";
// import { Badge } from "./components/Lab1";
// import { Modal } from "./components/Lab2";
// import { ToggleSwitch } from "./components/Lab3";
// import { Button3 } from "./components/Demo";

// import { NumericStepper } from "./components/Lab4";

import "./App.css";

function App() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {<Lab15 />}
      {/* {<Lab14 />} */}
      {/* {<Lab13 />} */}
      {/* {<Lab12 />} */}
      {/* {<Lab11 />} */}
      {/* {<Lab10 />} */}

      {/* {<Lab9 />} */}

      {/* {<Lab8 />} */}

      {/* <Lab7 /> */}

      {/* <Lab6 /> */}
      {/* <Lab5 /> */}

      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>Modal นะ</div>
      </Modal> */}

      {/* <button onClick={() => setIsOpen(true)}>เปิดนะ</button> */}

      {/* <NumericStepper min={-20} max={30} step={3} />
      <br />
      <ToggleSwitch />
      <br />
      <ToggleSwitch initialOn /> */}

      {/* <div>Home</div> */}
      {/* <Button label="click1" onClick={() => alert("click")} />
      <Button2 label="click2" onClick={() => alert("click")} />
      <Layout>
        <Card title="content" description="description" />
      </Layout>
      <List
        items={["apple", "banana", "orange"]}
        render={(item) => <span>{item.toUpperCase()}</span>}
      />
      <List
        items={[1, "two", 3] as (number | string)[]} // T = number | string
        render={(v) => (
          <span>{typeof v === "number" ? v.toFixed(0) : v.toUpperCase()}</span>
        )}
      />

      <List<string> items={[] as string[]} render={(n) => <span>{n}</span>} />

      <Badge label="New" />
      <Badge label="OK" variant="success" rounded /> */}
    </>
  );
}

export default App;
