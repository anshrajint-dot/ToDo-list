export default function SubjectDropdown({ subjects, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select a subject</option>

      {subjects.map((s, i) => (
        <option key={i} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
