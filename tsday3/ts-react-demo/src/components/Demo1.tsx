interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

const Button2 = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

type CardProps = {
  title: string;
  description?: string; // optional
};

function Card({ title, description }: CardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description ?? "No description"}</p>
    </div>
  );
}

// const order: Order = "";

const Card1 = (props: { title: string; description?: string }) => {
  const { title, description } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description ?? "No description"}</p>
    </div>
  );
};

export { Button, Button2, Card, Card1 };
