import { BellOff, BellRing, CheckCheck, Info, Send } from "lucide-react";
import Alert from "./components/Alert/Alert";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Alert
        type={"alert-danger"}
        icon={<Send size={20} />}
        title={"Alert Danger"}
        descraiption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint
        consequatur delectus magnam est quam error repellendus molestiae eos ea
        consequuntur"
      />
      <Alert
        type={"alert-warning"}
        icon={<BellOff size={20} />}
        title={"Alert Warning"}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ad sint <a href="">consequatur delectus</a> magnam est quam error repellendus
          molestiae eos ea consequuntur
        </p>
      </Alert>
      <Alert
        type={"alert-default"}
        icon={<BellRing size={20} />}
        title={"Alert Default"}
        descraiption="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ad sint consequatur delectus magnam est quam error repellendus
          molestiae eos ea consequuntur"
      />
      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"Alert Info"}
        descraiption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint
        consequatur delectus magnam est quam error repellendus molestiae eos ea
        consequuntur"
      />
      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"Alert Success"}
        descraiption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint
        consequatur delectus magnam est quam error repellendus molestiae eos ea
        consequuntur"
      />
    </div>
  );
};
export default App;
