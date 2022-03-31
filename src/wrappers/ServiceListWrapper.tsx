/* eslint-disable no-unused-vars */
import { Dispatch, FC, SetStateAction } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ServiceCard } from '../components/ServiceCard';
import { IService } from '../models/service';

interface IServiceListWrapper {
  servicesFiltered: IService[];
  handleDelete: (id: string) => void;
  setServiceToEdit: Dispatch<SetStateAction<IService | null>>;
}

export const ServiceListWrapper: FC<IServiceListWrapper> = ({
  servicesFiltered,
  handleDelete,
  setServiceToEdit,
}) => (
  <Col sm={8}>
    <Row className="align-items-start justify-content-between">
      {servicesFiltered.map((service) => (
        <ServiceCard
          handleDelete={handleDelete}
          setServiceToEdit={setServiceToEdit}
          key={service.id}
          service={service}
          id={service.id}
        />
      ))}
    </Row>
  </Col>
);
