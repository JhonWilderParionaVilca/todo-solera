/* eslint-disable no-unused-vars */
import { Dispatch, FC, SetStateAction } from 'react';
import { Card, Col } from 'react-bootstrap';
import { IService } from '../models/service';

interface IServiceCard {
  service: IService;
  handleDelete: (id: string) => void;
  id: string;
  setServiceToEdit: Dispatch<SetStateAction<IService | null>>;
}
export const ServiceCard: FC<IServiceCard> = ({
  service,
  handleDelete,
  id,
  setServiceToEdit,
}) => (
  <Col sm={4} className="mb-3">
    <Card>
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link onClick={() => setServiceToEdit(service)}>Editar</Card.Link>
        <Card.Link onClick={() => handleDelete(id)}>Eliminar</Card.Link>
      </Card.Footer>
    </Card>
  </Col>
);
