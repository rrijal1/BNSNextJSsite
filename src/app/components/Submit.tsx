export default function Submit({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <button type="submit" className={`submit-button px-6 py-2 ${className}`}>
      {text}
    </button>
  );
}
