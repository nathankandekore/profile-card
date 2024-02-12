import "./App.css";

const tools = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "Intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "SQL",
    level: "Beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <div className="data">
        <Avatar name="Nathan" pic="././profile-pic.jpg" className="img" />
        <Intro />
        <div className="skill-list">
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {tools.map((x) => (
        <Skill skill={x.skill} something={x.level} hue={x.color} />
      ))}
    </div>
  );
}

function Skill({ skill, something, hue }) {
  return (
    <div className="skill" style={{ backgroundColor: hue }}>
      <span>{skill}</span>
      <span>
        {something === "Beginner" && "🍼"}
        {something === "Intermediate" && "👌"}
        {something === "advanced" && "🎓"}
      </span>
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

export default App;
