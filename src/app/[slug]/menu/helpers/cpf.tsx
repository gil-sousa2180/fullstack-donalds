export const removeCpfPunctuation = (cpf: string) => {
  // remove as potuações e traço dos CPFs
  return cpf.replace(/[\.\-]/g, "");
};

export const isValidCpf = (cpf: string): boolean => {
  //remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");

  // verificar se o CPF tem 11 digitos
  if (cpf.length !== 11) {
    return false;
  }

  //eliminar CPFs com todos os dígitos iguais ex: 000.000.000-00
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  //cálculo do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let firstVerifier = (sum * 10) % 11;
  firstVerifier = firstVerifier === 10 ? 0 : firstVerifier;

  if (firstVerifier !== parseInt(cpf.charAt(9))) {
    return false;
  }

  //cálculo do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let secondVerifier = (sum * 10) % 11;
  secondVerifier = secondVerifier === 10 ? 0 : secondVerifier;

  return secondVerifier === parseInt(cpf.charAt(10));
};
