import snakecaseKeys from 'snakecase-keys';

const SnakeCase = (data: string) => {
  return data
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
};

export const SnakeCaseObj = (
  object: Record<any, any>,
  bySnakeCaseKeys = true,
) => {
  // todo: 재귀로 처리해서 깊게도 처리될 수 있도록
  if (bySnakeCaseKeys) {
    return snakecaseKeys(object, { deep: true });
  } else {
    const Obj: Record<any, any> = {};
    Object.entries(object).forEach(data => {
      Obj[SnakeCase(data[0])] = data[1];
    });
    return Obj;
  }
};

export default SnakeCase;
