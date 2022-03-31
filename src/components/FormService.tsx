/* eslint-disable no-unused-vars */
import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { categories } from '../constants/categories';
import { IService } from '../models/service';

const initialValue = {
  id: '',
  name: '',
  description: '',
  category: '',
};

interface IFormService {
  serviceToEdit: IService | null;
  setServiceToEdit: Dispatch<SetStateAction<IService | null>>;
  handleCreate: (data: IService) => void;
  handleUpdate: (data: IService) => void;
}
export const FormService: FC<IFormService> = ({
  setServiceToEdit,
  handleCreate,
  serviceToEdit,
  handleUpdate,
}) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      category: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.id === '') {
      if (form.category === '') {
        toast.error('seleccione una categoria');
        return;
      }
      handleCreate({
        ...form,
        id: String(Date.now()),
      });
    } else {
      handleUpdate(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(initialValue);
    setServiceToEdit(null);
  };

  useEffect(() => {
    if (serviceToEdit) {
      setForm(serviceToEdit);
    }
  }, [serviceToEdit]);

  return (
    <Form className="border border-1 rounded p-4" onSubmit={handleSubmit}>
      <legend>Servicio</legend>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Nombre</Form.Label>
        <Form.Control
          type="text"
          id="name"
          name="name"
          required
          onChange={handleChange}
          value={form.name}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Descripción</Form.Label>
        <Form.Control
          type="text"
          id="description"
          name="description"
          required
          onChange={handleChange}
          value={form.description}
        />
      </Form.Group>

      {form.id === '' && (
        <Form.Group className="mb-3">
          <Form.Label htmlFor="category">Categoria</Form.Label>
          <Form.Select
            id="category"
            name="category"
            required
            onChange={handleSelect}
            value={form.category}
          >
            <option>Seleccione una categoria</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      <Stack direction="horizontal" gap={3}>
        <Button type="submit" variant="outline-success">
          Grabar
        </Button>
        <Button variant="outline-danger" onClick={handleReset}>
          Cancelar
        </Button>
      </Stack>
    </Form>
  );
};
