import {describe, expect, test} from 'vitest';

// @ts-ignore
// @testing-library/preact loads cjs preact hooks instead of esm 
// see https://github.com/vitest-dev/vitest/issues/747#issuecomment-1140225294
import tlp = require('@testing-library/preact');
const {render, fireEvent, waitFor, screen} = tlp;

import Counter from '../components/counter';

describe('Counter', () => {
  test('should display initial count', () => {
    const { container } = render(<Counter initialCount={5}/>);
    expect(container.textContent).toMatch('Current value: 5');
  });

  test('should increment after "Increment" button is clicked', async () => {
    render(<Counter initialCount={5}/>);

    fireEvent.click(screen.getByText('Increment'));
    await waitFor(() => {
      expect(screen.getByText("Current value: 6")).toBeDefined();
    });
  });
});
