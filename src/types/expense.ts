export type TExpense = {
  type: string;
  title: string;
  amount: number;

  // при получении с сервера
  _id?: string;
  createdAt?: string;
};

export type TServerExpense = {
  _id: string;
  createdAt: string;
} & TExpense;
