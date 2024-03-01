const usePasswordValidator = (password: string) => {
  const MIN_LENGTH = 8;

  const length: boolean = password.length > MIN_LENGTH;
  const caps: boolean = /[A-Z]/.test(password);
  const lower: boolean = /[a-z]/.test(password);
  const numeral: boolean = /[0-9]/.test(password);
  const special: boolean = /[@#$%!^&*]/.test(password);
  const valid: boolean = length && caps && lower && special && numeral;

  return { length, caps, lower, numeral, special, valid };
};

export default usePasswordValidator;
