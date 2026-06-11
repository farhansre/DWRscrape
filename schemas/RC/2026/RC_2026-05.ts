interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 17070625/349257083 (4.89%)
		removal_type?: "removed"|"deleted"|"removed by reddit", // 14123826/349257083 (4.04%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 12438513/349257083 (3.56%)
		was_initially_deleted?: boolean, // 1685358/349257083 (0.48%)
	}, // 349257083/349577451 (99.91%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 996555/349577451 (0.29%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 23647448/55980262 (42.24%)
		e: "text"|"emoji",
		t?: string, // 32332814/55980262 (57.76%)
		u?: string, // 23647448/55980262 (42.24%)
	}[], // 336505480/349577451 (96.26%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 336505480/349577451 (96.26%)
	author_fullname?: string, // 334833573/349577451 (95.78%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 336505480/349577451 (96.26%)
	author_premium?: boolean, // 336505480/349577451 (96.26%)
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
	editable?: boolean, // 699403/349577451 (0.20%)
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
			e?: "Image"|"AnimatedImage", // 7478204/11199947 (66.77%)
			ext?: string, // 116551/11199947 (1.04%)
			id?: string, // 7478204/11199947 (66.77%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 7478204/11199947 (66.77%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[]|null, // 7478204/11199947 (66.77%)
			s?: {
				gif?: string, // 686624/7478204 (9.18%)
				mp4?: string, // 686624/7478204 (9.18%)
				u?: string, // 6791580/7478204 (90.82%)
				x: number,
				y: number,
			}, // 7478204/11199947 (66.77%)
			status: "valid"|"invalid"|"unprocessed",
			t?: "giphy", // 116551/11199947 (1.04%)
		},
	}, // 11199810/349577451 (3.20%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_reports: null,
	parent_id: string,
	permalink: string,
	profile_img?: string, // 336333589/349577451 (96.21%)
	profile_over_18?: boolean, // 336333589/349577451 (96.21%)
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