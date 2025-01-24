import ServiceForm from "../../common/ServiceForm";

export default function HeroBanner({ styles }) {
  return (
    <section className={styles.hero_banner}>

      {/* service form contents */}
      <ServiceForm />
    </section>
  );
}
