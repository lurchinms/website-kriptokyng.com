import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { NewsGridItem } from "../news/news-grid-item";

export function LatestNews({ news }) {
  return (
    <div className="container mx-auto mt-3">
      <center>
        <h1 className="display-5">Latest News</h1>
      </center>
      <Row>
        {news.map((n) => (
          <Col xs={12} md={6} lg={4} className="mb-5">
            <NewsGridItem article={n} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
