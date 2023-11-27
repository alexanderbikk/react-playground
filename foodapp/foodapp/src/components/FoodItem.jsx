import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId}) {
  return (
    <div className={styles.item_container}>
      <img className={styles.item_image} src={food.image} alt="" />
      <div className={styles.item_content}>
        <p className={styles.item_name}>{food.title}</p>
      </div>
      <div className={styles.button_container}>
        <button className={styles.item_button} onClick={() => setFoodId(food.id)}>Receipe</button>
      </div>
    </div>
  );
}
