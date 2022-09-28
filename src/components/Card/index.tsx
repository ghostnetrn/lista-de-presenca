import "./styles.css";

export type CardProps = {
  name: string;
  time: string;
};

export function Card(props: CardProps) {
  const { name, time } = props;
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
