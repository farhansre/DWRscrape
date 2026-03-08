interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 16942594/305940987 (5.54%)
		removal_type?: "deleted"|"removed"|"removed by reddit", // 12430323/305940987 (4.06%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 10930003/305940987 (3.57%)
		was_initially_deleted?: boolean, // 1500374/305940987 (0.49%)
	}, // 305940987/306367062 (99.86%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 976974/306367062 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 21470271/50981074 (42.11%)
		e: "text"|"emoji",
		t?: string, // 29510803/50981074 (57.89%)
		u?: string, // 21470271/50981074 (42.11%)
	}[], // 295604679/306367062 (96.49%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 295604679/306367062 (96.49%)
	author_fullname?: string, // 294104199/306367062 (96.00%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 295604679/306367062 (96.49%)
	author_premium?: boolean, // 295604679/306367062 (96.49%)
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
	editable?: boolean, // 269649/306367062 (0.09%)
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
			e?: "Image"|"AnimatedImage", // 7460906/8987543 (83.01%)
			ext?: string, // 916272/8987543 (10.19%)
			id?: string, // 7460906/8987543 (83.01%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 7460906/8987543 (83.01%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[]|null, // 7460906/8987543 (83.01%)
			s?: {
				gif?: string, // 1302778/7460906 (17.46%)
				mp4?: string, // 1302778/7460906 (17.46%)
				u?: string, // 6158128/7460906 (82.54%)
				x: number,
				y: number,
			}, // 7460906/8987543 (83.01%)
			status: "valid"|"invalid"|"unprocessed",
			t?: "giphy", // 916272/8987543 (10.19%)
		},
	}, // 8987468/306367062 (2.93%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports: null,
	parent_id: string,
	permalink: string,
	profile_img?: string, // 295110515/306367062 (96.33%)
	profile_over_18?: boolean, // 295110515/306367062 (96.33%)
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