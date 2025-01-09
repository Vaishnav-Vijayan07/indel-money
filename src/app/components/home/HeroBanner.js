import ServiceForm from "../../../components/ServiceForm";

export default function HeroBanner({ styles }) {
  return (
    <section className={styles.hero_banner}>

      {/* service form contents */}
      <ServiceForm />
    </section>
  );
}
