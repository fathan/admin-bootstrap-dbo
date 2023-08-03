import { fireEvent, render, screen } from "@testing-library/react";
import MenuListItem from "..";
import { menus } from "../../data";

describe('Test MenuListItem component', () => {
  it('should render a label when data.childrens.length === 0', () => {
    render(<MenuListItem menus={menus} />);
    
    const actual = screen.getByText('Dashboard');
    expect(actual).toBeInTheDocument();

    const actualSecondary = screen.getByText('Supplier');
    expect(actualSecondary).toBeInTheDocument();
  });

  it('should render a list with the correct number of menu items', () => {
    render(<MenuListItem menus={menus} />);
    const listItemElements = screen.getAllByRole('listitem');

    expect(listItemElements.length).toBe(menus.length);
  });

  it('should be render the correct menu item label', () => {
    render(<MenuListItem menus={menus} />);
    const listItemElements = screen.getAllByRole('listitem');

    menus.forEach((menuItem, index) => {
      const listItemElement = listItemElements[index];
      expect(listItemElement).toHaveTextContent(menuItem.label);
    });
  });
});