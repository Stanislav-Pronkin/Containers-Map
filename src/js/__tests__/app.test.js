import ErrorRepository from '../app';

test('Translate error', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository).toEqual({ errors: new Map() });
});

test('Translate error', () => {
  const errorRepository = new ErrorRepository();

  errorRepository.errors.set(404, 'Страница не найдена');
  const received = errorRepository.translate(404);

  expect(received).toBe('Страница не найдена');
});

test('Translate error', () => {
  const errorRepository = new ErrorRepository();

  errorRepository.errors.set(404, 'Страница не найдена');
  const received = errorRepository.translate(500);

  expect(received).toBe('Unknown error');
});
