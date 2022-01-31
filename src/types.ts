export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface FormElementProps<T> {
  value: T;
  onChange: (value: T) => void;
}
