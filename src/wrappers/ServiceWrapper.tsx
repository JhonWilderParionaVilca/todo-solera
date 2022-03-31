import { FC } from 'react';
import { Row } from 'react-bootstrap';

export const ServiceWrapper: FC = ({ children }) => (
  <main>
    <Row className="align-items-start justify-content-between">{children}</Row>
  </main>
);
