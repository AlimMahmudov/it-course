import { API_URL } from '../const/export-env'

export function profile_picture(path: string) {
	return String(`${API_URL}/bucket/` + path)
}
