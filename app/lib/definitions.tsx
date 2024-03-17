export type InputPropsType = {
  placeholder: string;
  label: string;
  type: string | "password" | "email" | "number";
};

export type PaginationPropsType = {
  totalRecords: number | undefined;
  recordsPerPage: number | undefined;
  currentPage: number | 1;
  totalPages: number | 1;
};

export type InterestListTypes = {
  id: number;
  name: string;
  checked: false | true;
};

export type InterestPropsTypes = {
  interest: string;
  value: string | number;
  checked: false | true;
};
