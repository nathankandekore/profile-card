import "./App.css";

const skills = [
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
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "SQL",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar name="Nathan" pic="././profile-pic.jpg" className="img" />
      <Intro />
      <div className="data">
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
      {skills.map((skill) => (
        <Skill />
      ))}
    </div>
  );
}

function Skill(skills) {
  return (
    <div className="skill" style={{ backgroundColor: skills.Skill }}>
      <span>{skills.Skill}</span>
    </div>
  );
}

export default App;
