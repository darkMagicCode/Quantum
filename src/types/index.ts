export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface RandomUserResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface UIState {
  searchQuery: string;
  currentPage: number;
  pageSize: number;
  isModalOpen: boolean;
  selectedUser: User | null;
}

export interface ProfileState {
  name: string;
  phone: string;
  jobTitle: string;
  yearsOfExperience: number;
  address: string;
  workingHours: string;
  loading: boolean;
  success: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  users: UsersState;
  ui: UIState;
  profile: ProfileState;
}

