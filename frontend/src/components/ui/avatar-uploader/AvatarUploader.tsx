// import { ADD_FILE } from '@/api/queries/Posts'
// import { baseImageUrl } from '@/api/interceptors'
// import { fileService } from '@/services/file-upload.service'
import classNames from 'classnames/bind'
import React, { useRef, useState } from 'react'
import IconComponent from '../icon/Icon'
import styles from './AvatarUploader.module.scss'

const cx = classNames.bind(styles)

interface AvatarProps {
	imgPath?: string
	label?: string
	insideIcon?: boolean
	// onUploadFile?: (data: any) => void
	buttonStyle?: Boolean
	heightFull?: Boolean
}

const Avatar: React.FC<AvatarProps> = ({
	imgPath = '',
	label,
	// onUploadFile,
	buttonStyle,
	heightFull
}) => {
	const imgRef = useRef<any>('')
	const [img, setImg] = useState<string | null>(null)
	const changeFile = async (e: any) => {
		if (!e.target.files || !e.target.files[0]) return
		imgRef.current.src = URL.createObjectURL(e.target.files[0])
	}

	return (
		<div
			className={`${cx({
				avatarWrapper: true,
				buttonStyle: buttonStyle,
				heightFull: heightFull
			})}`}
		>
			{label && <label className={styles.label}>{label}</label>}
			<div className={styles.avatar}>
				<div className={styles.insideIcon}>
					<IconComponent icon='imgUpload' />
				</div>
				<div className={styles.avatar__image}>
					<img src={imgPath} alt='' ref={imgRef} />
				</div>
				<div className={styles.avatar__input}>
					<div className={styles.avatar__inputBody}>
						<input
							onChange={changeFile}
							accept='.jpg, .png, .jpeg'
							type='file'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Avatar
