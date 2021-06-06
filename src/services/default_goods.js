import { nanoid } from "nanoid";

const defaultGoods = [
  {
    id: nanoid(),
    name: "Помидоры",
    amount: 4,
  },
  {
    id: nanoid(),
    name: "Огурцы",
    amount: 2,
  },
  {
    id: nanoid(),
    name: "Консервы",
    amount: 1,
  },
];

export default defaultGoods;