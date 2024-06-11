import Image from 'next/image'
import Link from 'next/link'
import { MENU } from '../menu.data'
import styles from './Footer.module.scss'
import { SOCIAL_ICONS } from './social.icons'
import { FOOTER_LINKS } from './links'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='__container'>
				<div className={styles.row}>
					<div className={styles.about}>
						<Link href='/' className={styles.logo}>
							<Image src='/logo-footer.svg' alt='logo' priority fill />
						</Link>
						<div className={styles.list}>
							<p>ИП Насибуллина Язиля Равилевна</p>
							<p>ИНН 165609670065</p>
							<p>ОГРН 321169000022174</p>
						</div>
						<a href='mailto:info@tech-recruiter.org' className={styles.mail}>
							info@tech-recruiter.org
						</a>
					</div>
					<div className={styles.right}>
						<div className={styles.listWrapper}>
							<h2 className={styles.title}>Страницы</h2>
							<ul>
								{MENU.map((item, index) => (
									<li key={index}>
										<Link href={item.link}>{item.name}</Link>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.listWrapper}>
							<h2 className={styles.title}>Страницы</h2>
							<ul>
								{FOOTER_LINKS.map((item, index) => (
									<li key={index}>
										<Link href={item.link}>{item.title}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.social}>
					<h2 className={styles.title}>Мы в социальных сетях</h2>
					<div className={styles.rowSocial}>
						{SOCIAL_ICONS.map((item, index) => (
							<a key={index} href={item.href}>
								<Image src={item.src} width={40} height={40} alt={item.alt} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
