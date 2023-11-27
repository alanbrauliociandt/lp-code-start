import "./styles.css";

export function Chip({ label }: { label: string }) {
  return <span className="chip">{label}</span>;
}
