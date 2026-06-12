interface Props {
  label: string;
}

export default function LangSwitch({ label }: Props) {
  return (
    <button
      type="button"
      className="lang-btn"
      data-lang-toggle
      aria-label="Switch language"
    >
      {label}
    </button>
  );
}
