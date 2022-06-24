import { axiosGet, logger, notFoundHandler, errorHandler } from '.';

describe('shared', () => {
  it('axiosGet should be truthy', () => {
    expect(axiosGet).toBeTruthy();
  });

  it('axiosGet should be truthy', () => {
    expect(logger).toBeTruthy();
  });

  it('errorHandler should be truthy', () => {
    expect(errorHandler).toBeTruthy();
  });

  it('notFoundHandler should be truthy', () => {
    expect(notFoundHandler).toBeTruthy();
  });
});
