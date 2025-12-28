export const debounceString = (
  func: (value: string) => void,
  wait: number
): ((value: string) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (value: string) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(value);
    }, wait);
  };
};

export const formatFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`.trim();
};

export const formatAddress = (location: {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postcode: string | number;
}): string => {
  return `${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}, ${location.country}`;
};

