import "./styles.css";
import Card from "../../components/Card/";
import { useState, useEffect } from "react";

export default function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {}, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Francisco</strong>
          <img src="https://github.com/lagoanova.png" alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite um nome"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map(({ name, time }, index) => (
        <Card name={name} time={time} key={index} />
      ))}
    </div>
  );
}
