import styles from './WatchVideo.module.scss'

const WatchVideo = () => {
	return (
		<div className={styles.WatchVideo}>
			<div className='__container'>
				<div className={styles.row}>
					<h2 className={styles.title}>
						Посмотрите видеоролик что бы познакомиться с нами лучше
					</h2>
					<div className={styles.video}>
						<iframe
							src='https://www.youtube.com/watch?v=ZvNeJdnQo28'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WatchVideo
