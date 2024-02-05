import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar name="Nathan" pic="././profile-pic.jpg" className="img" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  console.log(props);
  return (
    <>
      <img src={props.pic} alt={props.name} />
    </>
  );
}

function Intro(props) {
  return (
    <>
      <h1>Nathan Kandekore</h1>
      <p>Full Stack Software Engineer</p>
    </>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill text="HTML" color="orange" />
      <Skill text="CSS" color="blue" />
      <Skill text="Javascript" color="yellow" />
      <Skill text="React" color="lightblue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.text}</span>
    </div>
  );
}

export default App;
