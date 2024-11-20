'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { useToggle } from 'usehooks-ts'
import { Popup } from '../popup/Popup'
import styles from './UpdateProfilePic.module.scss'
import { useUploadMutation } from '@/shared/redux/api/bucket'
import { useUpdateUserMutation } from '@/shared/redux/api/user'

const UpdateProfilePic: React.FC = () => {
	const [open, toggle, set] = useToggle(false)
	const [url, setUrl] = useState<string>('')
	const [file, setFile] = useState<File | null>(null)
	const [isValidUrl, setIsValidUrl] = useState<boolean>(false)

	const changeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			setFile(file)
			setUrl('')
			setIsValidUrl(false)
		}
	}, [])

	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value)
		setFile(null)
	}
	const [upload, { isLoading: uploadLoading }] = useUploadMutation()
	const [update, { isLoading: updateLoading }] = useUpdateUserMutation()

	useEffect(() => {
		if (!url) {
			setIsValidUrl(false)
			return
		}

		const img = new Image()
		img.src = url
		img.onload = () => setIsValidUrl(true)
		img.onerror = () => setIsValidUrl(false)
	}, [url])

	const handleSave = async () => {
		if (file) {
			const { path } = await upload(file).unwrap()
			if (path) {
				await update({
					profile_pic: path
				})
			}
		} else if (url && isValidUrl) {
			await update({
				profile_pic: url
			})
		}
		setFile(null)
		setUrl('')
		setIsValidUrl(false)
		set(true)
	}

	return (
		<>
			<button data-addprofilepic onClick={toggle}>
				Добавить фото
			</button>
			<Popup
				blur_bg
				className={styles.popup}
				open={open}
				onClose={() => set(true)}
			>
				<div className={styles.content}>
					<input
						type='url'
						name='profile_pic_url'
						placeholder='Введите URL изображения'
						id='profile_pic_url'
						value={url}
						onChange={handleUrlChange}
					/>
					<span>или</span>
					<label htmlFor='profile_pic_file' className={styles.uploadLabel}>
						Загрузить файл
					</label>
					<input
						type='file'
						name='profile_pic_file'
						id='profile_pic_file'
						hidden
						accept='image/*'
						onChange={changeFile}
					/>
					{(file || (url && isValidUrl)) && (
						<div className={styles.preview}>
							{/* @ts-ignore */}
							<img
								src={file ? URL.createObjectURL(file) : url}
								alt='Предпросмотр'
								className={styles.previewImage}
							/>
						</div>
					)}
					<button
						className={styles.saveButton}
						onClick={handleSave}
						disabled={!file && !(url && isValidUrl)}
					>
						{uploadLoading || updateLoading ? (
							<span className='loader small v2'></span>
						) : (
							'Сохранить'
						)}
					</button>
				</div>
			</Popup>
		</>
	)
}

export default UpdateProfilePic
