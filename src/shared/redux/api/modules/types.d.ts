namespace ModuleTypes {
	interface MaterialComment {
		id: string
		created_at: string
		updated_at: string
		content: string
		sender_id: string
		sender_info: { profile_pic: string; fullname: string }
		reply_info?: { id: string }
		material_id: string
		reply_to?: string
		replies: MaterialComment[]
	}
	interface SendCommentArg {
		content: string
		reply_to?: string
	}
}
