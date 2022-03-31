import { FC } from 'react';
import { Nav } from 'react-bootstrap';
import { categories } from '../constants/categories';

type INavFilter = {
  // eslint-disable-next-line no-unused-vars
  filterByCategory: (selectedKey: string | null) => void;
};

export const NavFilter: FC<INavFilter> = ({ filterByCategory }) => (
  <Nav
    activeKey="Todos"
    onSelect={filterByCategory}
    className="bg-light w-100 mb-4"
  >
    <Nav.Item key="Todos">
      <Nav.Link eventKey="Todos" className="text-black-50">
        Todos
      </Nav.Link>
    </Nav.Item>
    {categories.map((categorie) => (
      <Nav.Item key={categorie}>
        <Nav.Link eventKey={categorie} className="text-black-50">
          {categorie}
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);
