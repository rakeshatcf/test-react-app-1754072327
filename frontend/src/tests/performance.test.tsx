import { getCLS, getFID, getFCP } from 'web-vitals';
import reportWebVitals from '../reportWebVitals';

describe('Web Vitals Reporting', () => {
  test('reportWebVitals calls performance callbacks', () => {
    const mockPerfCallback = jest.fn();
    reportWebVitals(mockPerfCallback);
    expect(mockPerfCallback).toHaveBeenCalled();
  });
});