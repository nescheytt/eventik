enum Status {
  NOT_CHECKED_IN = 'Not Checked In',
  CHECKED_IN = 'Checked In',
  CANCELED = 'Canceled'
};

export function getTranslateAdmissionStatus(value: string): string {
  if (value === null || value === undefined) {
    return '';
  }

  switch (value) {
    case Status.NOT_CHECKED_IN:
      return 'Pendiente';
    case Status.CHECKED_IN:
      return 'Ingresó';
    case Status.CANCELED:
      return 'Cancelado';
    default:
      return value;
  }
};