import camelcaseKeys from 'camelcase-keys';

const CamelCase = (data: any) => {
  return camelcaseKeys(data, { deep: true });
};

export default CamelCase;
