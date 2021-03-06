import styles from "./style.module.css";
import { Button, Nav, LinkComponent } from 'components'
import Logo from "../logo";
import cn from "classnames";
import Login from '@material-ui/icons/ExitToApp';
import { Children } from "react";

const Lead = ({ children, title, subtitle, statement, primaryButtonName, secondaryButtonName }) => {
	return (
		<section className={styles.lead}>
			<Nav className={styles.nav__container}>

				<li className={styles["nav__list-item"]}>
					<Button
						href="https://guarantee-vault.com/"
						title="Login"
						size="size-m"
						textColor="text-white"
						border="border-white">
						<Login className={styles.icon} />
					</Button>
				</li>
			</Nav>

			<div className={styles.lead__container}>
				<h1 className={styles.lead__title}> {title}</h1>
				<h2 className={styles.lead__subtitle}>{subtitle}</h2>
				<p className={styles.lead__text}>{statement}</p>
				<ul className={styles.lead__buttons}>
					<li className={styles.lead['__btn-list']}>
						<Button href="/contacts" title={primaryButtonName} size='size-l' textColor='text-white' background='blue' space='spaceBetween' />
					</li>
					<li className={styles.lead['__btn-list']}>
						{children}
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Lead