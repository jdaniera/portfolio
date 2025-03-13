"use client";
import styles from "./Chips.module.css";

export default function Chips({ items, selectedItems = [], onSelect, isFilter = false }) {
	return (
		<div className={styles.chipContainer}>
			{items.map((item, index) => (
				<button
					key={index}
					className={`${styles.chip} ${styles[item.category]} ${
						selectedItems.includes(item.label) ? styles.selected : ""
					}`}
					onClick={() => onSelect && onSelect(item.label)}
					disabled={!isFilter}
				>
					{item.label}
				</button>
			))}
		</div>
	);
}
