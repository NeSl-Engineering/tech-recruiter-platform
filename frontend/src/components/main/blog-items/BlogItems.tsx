import Image from 'next/image'
import styles from './BlogItems.module.scss'

const BlogItems = () => {
	return (
		<div className={styles.blogItems}>
			<div className='__container'>
				<div className={styles.row}>
					<div className={styles.item}>
						<div className={styles.image}>
							<Image src='/blog.svg' alt='blog' fill sizes='auto' />
						</div>
						<h2 className={styles.title}>
							12 архетипов бренда: как выбрать тот самый
						</h2>
						<p className={styles.description}>
							Иногда хватает одного взгляда, чтобы влюбиться в продукт. Одного
							твита, чтобы ощутить, будто бренд читает мысли. {' '}
						</p>
						<div className={styles.buttons}>
							<button title='dowran' className={styles.button}>
								Маркетинг
							</button>
							<button className={styles.button}>Сорсинг</button>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.image}>
							<Image src='/blog.svg' alt='blog' fill sizes='auto' />
						</div>
						<h2 className={styles.title}>
							12 архетипов бренда: как выбрать тот самый
						</h2>
						<p className={styles.description}>
							Иногда хватает одного взгляда, чтобы влюбиться в продукт. Одного
							твита, чтобы ощутить, будто бренд читает мысли. {' '}
						</p>
						<div className={styles.buttons}>
							<button className={styles.button}>Маркетинг</button>
							<button className={styles.button}>Сорсинг</button>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.image}>
							<Image src='/blog.svg' alt='blog' fill sizes='auto' />
						</div>
						<h2 className={styles.title}>
							12 архетипов бренда: как выбрать тот самый
						</h2>
						<p className={styles.description}>
							Иногда хватает одного взгляда, чтобы влюбиться в продукт. Одного
							твита, чтобы ощутить, будто бренд читает мысли. {' '}
						</p>
						<div className={styles.buttons}>
							<button className={styles.button}>Маркетинг</button>
							<button className={styles.button}>Сорсинг</button>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.image}>
							<Image src='/blog.svg' alt='blog' fill sizes='auto' />
						</div>
						<h2 className={styles.title}>
							12 архетипов бренда: как выбрать тот самый
						</h2>
						<p className={styles.description}>
							Иногда хватает одного взгляда, чтобы влюбиться в продукт. Одного
							твита, чтобы ощутить, будто бренд читает мысли. {' '}
						</p>
						<div className={styles.buttons}>
							<button className={styles.button}>Маркетинг</button>
							<button className={styles.button}>Сорсинг</button>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.image}>
							<Image src='/blog.svg' alt='blog' fill sizes='auto' />
						</div>
						<h2 className={styles.title}>
							12 архетипов бренда: как выбрать тот самый
						</h2>
						<p className={styles.description}>
							Иногда хватает одного взгляда, чтобы влюбиться в продукт. Одного
							твита, чтобы ощутить, будто бренд читает мысли. {' '}
						</p>
						<div className={styles.buttons}>
							<button className={styles.button}>Маркетинг</button>
							<button className={styles.button}>Сорсинг</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogItems
