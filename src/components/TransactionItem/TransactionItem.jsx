import css from "./TransactionItem.module.css";
export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </>
  );
};
