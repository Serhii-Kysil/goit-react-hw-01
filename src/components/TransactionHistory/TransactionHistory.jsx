import { TransactionItem } from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tHead}>
          <th className={css.caption}>Type</th>
          <th className={css.caption}>Amount</th>
          <th className={css.caption}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
