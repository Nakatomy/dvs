import styles from "./style.module.css";
import { Button } from 'components'
import PropTypes from 'prop-types'
import { withTranslation } from 'i18n'

const Lead = ({ title, subtitle, statement, primaryButtonName, secondaryButtonName }) => {
	return (
		<section className={styles.lead}>
			<div className={styles.lead__container}>
				<h1 className={styles.lead__title}> {title}</h1>
				<h2 className={styles.lead__subtitle}>{subtitle}</h2>
				<p className={styles.lead__text}>{statement}</p>
				<ul className={styles.lead__buttons}>
					<li className={styles.lead['__btn-list']}>
						<Button href="/contacts" title={primaryButtonName} size='size-l' textColor='text-white' background='blue' space='spaceBetween' />
					</li>
					<li className={styles.lead['__btn-list']}>
						<Button href="#solution" title={secondaryButtonName} size='size-l' textColor='text-white' background='text-only' />
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Lead
