import { useTranslation } from "../../src/context/TranslationContext";

export default function ContactBanner() {
  const { projectmind, helpyou } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div>
        <p> {projectmind}</p>
        <h3>{helpyou}</h3>
      </div>
    </div>
  );
}
