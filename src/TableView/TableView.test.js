import { render, screen } from '@testing-library/react';
import { AgGridReact } from 'ag-grid-react';
import {
  waitForGridToBeInTheDOM,
  waitForDataToHaveLoaded,
} from './AgGridTestUtils';
import { TableView } from './TableView';
import { posts } from './data';

describe.only('TableView', () => {
  beforeEach((done) => {
    component = mount(<TableView />);
    agGridReact = component.find(AgGridReact).instance();
    // don't start our tests until the grid is ready
    ensureGridApiHasBeenSet(component).then(
      () => done(),
      () => fail('Grid API not set within expected time limits')
    );
  });
  it('should call onBodyScrollEnd', async () => {
    const mockOnBodyScrollEnd = jest.fn();

    render(myComponent);

    render(
      <TableView
        rowData={posts}
        setPage={mockOnBodyScrollEnd}
        handleBodyScrollEnd={mockOnBodyScrollEnd}
      />
    );

    await waitForGridToBeInTheDOM();
    await waitForDataToHaveLoaded();

    expect(mockOnBodyScrollEnd).toHaveBeenCalled();
  });
});
