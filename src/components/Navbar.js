import Image from "next/image";
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/icons/logo_sm.svg"
        alt="Logo"
        width={50}
        height={30}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <button className={styles.contact__btn}>Contact</button>
    </nav>
  );
}
