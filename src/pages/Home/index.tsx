import "./styles.css";
import { Card, CardProps } from "../../components/Card";
import { useState, useEffect } from "react";

type ProfileResponse = {
  name: string;
  avatar_url: string;
};

type User = {
  name: string;
  avatar_url: string;
};

export default function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/ghostnetrn");
      const { name, avatar_url } = (await response.json()) as ProfileResponse;
      setUser({ name, avatar_url });
    }

    fetchData();
  }, []);

  const { name, avatar_url } = user;

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{name}</strong>
          <img src={avatar_url} alt="Foto de perfil" />
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
