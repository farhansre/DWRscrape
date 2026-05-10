interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 16183953/335788094 (4.82%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 13571118/335788094 (4.04%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 11945950/335788094 (3.56%)
		was_initially_deleted?: boolean, // 1625262/335788094 (0.48%)
	}, // 335788094/338589164 (99.17%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1015818/338589164 (0.30%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 22693595/53716202 (42.25%)
		e: "text"|"emoji",
		t?: string, // 31022607/53716202 (57.75%)
		u?: string, // 22693595/53716202 (42.25%)
	}[], // 325824517/338589164 (96.23%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 325824517/338589164 (96.23%)
	author_fullname?: string, // 324200995/338589164 (95.75%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 325824517/338589164 (96.23%)
	author_premium?: boolean, // 325824517/338589164 (96.23%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 505479/338589164 (0.15%)
	edited: boolean|number,
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_id: string,
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 7085605/10265039 (69.03%)
			ext?: string, // 98620/10265039 (0.96%)
			id?: string, // 7085605/10265039 (69.03%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 7085605/10265039 (69.03%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[]|null, // 7085605/10265039 (69.03%)
			s?: {
				gif?: string, // 605004/7085605 (8.54%)
				mp4?: string, // 605004/7085605 (8.54%)
				u?: string, // 6480601/7085605 (91.46%)
				x: number,
				y: number,
			}, // 7085605/10265039 (69.03%)
			status: "valid"|"invalid"|"unprocessed",
			t?: "giphy", // 98620/10265039 (0.96%)
		},
	}, // 10264928/338589164 (3.03%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports: null,
	parent_id: string,
	permalink: string,
	profile_img?: string, // 325656986/338589164 (96.18%)
	profile_over_18?: boolean, // 325656986/338589164 (96.18%)
	removal_reason: null|"legal",
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null,
	ups: number,
	user_reports: [],
}