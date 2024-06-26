import HeaderPersonalArea from './header/HeaderPersonalArea'
import styles from './PersonalAreaLayout.module.scss'
import SidebarPersonalArea from './sidebar/SidebarPersonalArea'

const PersonalAreaLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.PersonalArea}>
			<SidebarPersonalArea />
			<div className={styles.wrapper}>
				<div className={styles.bodyWrap}>
					<HeaderPersonalArea />
					<div className={styles.body}>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default PersonalAreaLayout
