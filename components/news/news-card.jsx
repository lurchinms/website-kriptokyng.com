export function NewsCard(props) {
  return (
    <div className="cards__item mx-auto" style={{ height: "100%", flex: 1 }}>
      <a
        className="cards__item__link"
        href={props.path}
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            className="cards__item__img"
            alt="News Photograph"
            src={props.src}
          />
        </figure>
        <div className="cards__item__info">
          <div className="cards__item__text">{props.text}</div>
        </div>
      </a>
    </div>
  );
}
