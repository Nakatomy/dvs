import styles from "./style.module.css";
import { Button } from 'components'

const Lead = () => {
	return (
		<section className={styles.lead}>
			<div className={styles.lead__container}>
				<h1 className={styles.lead__title}>Guarantee Vault</h1>
				<h2 className={styles.lead__subtitle}>For the Issuance & Safekeeping of Digital Guarantees</h2>
                <p className={styles.lead__text}>All parties, at source and in real-time.</p>
                <ul className={styles.lead__buttons}>
                    <li className={styles.lead['__btn-list']}>
                       <Button href="/contacts" title='Contact us' size='size-l' textColor='text-white' background='blue'/>
					</li>
                    <li className={styles.lead['__btn-list']}>
                         <Button href="#whatWeDo" title='Find Out More' size='size-l' textColor='text-white' background='text-only'/>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Lead
