import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { NewsGridItem } from "./news-grid-item.jsx";

export function NewsGrid({ news }) {
  return (
    <div className="container">
      <div className="row">
        <div className="cards__wrapper">
          <Row>
            {news.slice(0, 2)?.map((n, i) => (
              <Col xs={12} md={6} className="card-col mb-5" key={i}>
                <NewsGridItem article={n} />
              </Col>
            ))}
          </Row>
          <Row>
            {news.slice(2)?.map((n, i) => (
              <Col xs={12} md={6} xl={4} className="card-col mb-5" key={i}>
                <NewsGridItem article={n} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
