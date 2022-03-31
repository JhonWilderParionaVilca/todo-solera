import { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FormService } from './components/FormService';
import { Header } from './components/Header';
import { NavFilter } from './components/NavFilter';
import { useLocalStorage } from './hooks/useLocalStorage';
import { servicesMock } from './mock/todo-mock';
import { IService } from './models/service';
import { ServiceListWrapper } from './wrappers/ServiceListWrapper';
import { ServiceWrapper } from './wrappers/ServiceWrapper';

function App() {
  const [servicesLocalStorage, setServicesLocalStorage] =
    useLocalStorage<IService>('todos', servicesMock);
  const [servicesFiltered, setServicesFiltered] = useState<IService[] | []>(
    servicesLocalStorage
  );
  const [serviceToEdit, setServiceToEdit] = useState<IService | null>(null);

  const filterByCategory = (categorySelected: string | null) => {
    if (categorySelected === 'Todos' || categorySelected === null) {
      return setServicesFiltered(servicesLocalStorage);
    }
    const servicesFiltered = servicesLocalStorage.filter(
      (service) => service.category === categorySelected
    );
    return setServicesFiltered(servicesFiltered);
  };

  const handleCreate = (service: IService) => {
    try {
      setServicesLocalStorage([...servicesLocalStorage, service]);
      toast.success('Servicio agregado');
    } catch (error) {
      toast.error('Ocurrio un error al Intentar Crear');
    }
  };

  const handleUpdate = (serviceEdited: IService) => {
    try {
      const servicesWithEdited = servicesLocalStorage.map((service) =>
        service.id === serviceEdited.id ? serviceEdited : service
      );
      setServicesLocalStorage(servicesWithEdited);
      toast.success('Servicio Modificado');
    } catch (e) {
      toast.error('Ocurrio un error al Actualizar');
    }
  };

  const handleDelete = (idToDelete: string) => {
    try {
      const servicesNotDeleted = servicesLocalStorage.filter(
        (services) => services.id !== idToDelete
      );
      setServicesLocalStorage(servicesNotDeleted);
      toast.success('Servicio Eliminado');
    } catch (e) {
      toast.error('Ocurrio un error al eliminar');
    }
  };

  useEffect(() => {
    setServicesFiltered(servicesLocalStorage);
  }, [servicesLocalStorage]);

  return (
    <Container>
      <Header />
      <NavFilter filterByCategory={filterByCategory} />

      <ServiceWrapper>
        <Col className="order-1" sm={4}>
          <FormService
            setServiceToEdit={setServiceToEdit}
            serviceToEdit={serviceToEdit}
            handleCreate={handleCreate}
            handleUpdate={handleUpdate}
          />
        </Col>
        <ServiceListWrapper
          handleDelete={handleDelete}
          servicesFiltered={servicesFiltered}
          setServiceToEdit={setServiceToEdit}
        />
      </ServiceWrapper>
    </Container>
  );
}

export default App;
