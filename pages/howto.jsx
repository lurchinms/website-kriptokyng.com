import { useTranslation } from "../src/context/TranslationContext";

export default function HowTo() {
  const { HowToMine, FirstHow, SecondHow } = useTranslation();
  return (
    <div className="container">
      <h1 className="p-3">{HowToMine}</h1>
      <div className="glassfilter mx-auto p-3 mb-5">
        <p>
          <b>1.</b>
          {FirstHow}
        </p>
        <div className="mt-3 px-3 px-sm-0">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/SSo_EIwHSd4`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <br />
        <p>
          <b>2.</b> {SecondHow}
        </p>
        <div className="mt-3 px-3 px-sm-0">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/2VtH-XAOjXw`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
}
