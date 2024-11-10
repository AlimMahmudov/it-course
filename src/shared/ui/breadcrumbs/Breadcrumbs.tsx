import React from "react";
import styles from "./Breadcrumbs.module.scss";
import clsx from "clsx";
interface IBreadcrumbsProps {
  items: Array<{ label: string; href?: string }>;
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ items }) => {
  return (
    <div className={`container ${styles.breadcrumbs_container}`}>
      <ul className={styles.breadcrumbs}>
        {items.map((item, idx) => {
          return (
            <li
              key={item.href}
              className={clsx({
                [styles.last]: items.length !== idx + 1,
              })}
            >
              <a href={item.href}>{item.label}</a>
              {items.length !== idx + 1 ? "/" : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
