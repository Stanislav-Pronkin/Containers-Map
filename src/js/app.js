// TODO: write your code here
export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    const text = this.errors.get(code);
    const errorText = (text) || 'Unknown error';

    return errorText;
  }
}
