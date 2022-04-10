const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    create: () => mockAxios,
    defaults: {
      adapter: {},
    },
  };
  
  export default mockAxios;