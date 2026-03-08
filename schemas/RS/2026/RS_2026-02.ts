interface RedditPost {
	_meta?: {
		edited_title?: string, // 2244895/41045389 (5.47%)
		is_edited?: boolean, // 1438418/41045389 (3.50%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"community_ops"|"copyright_takedown"|"anti_evil_ops", // 8538130/41045389 (20.80%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 7841149/41045389 (19.10%)
		was_initially_deleted?: boolean, // 696983/41045389 (1.70%)
	}, // 41045389/41434105 (99.06%)
	ad_business?: null, // 487787/41434105 (1.18%)
	ad_promoted_user_posts?: null, // 487787/41434105 (1.18%)
	ad_supplementary_text_md?: null|string, // 487787/41434105 (1.18%)
	ad_user_targeting?: null, // 487787/41434105 (1.18%)
	adserver_click_url?: null, // 487787/41434105 (1.18%)
	adserver_imp_pixel?: null, // 487787/41434105 (1.18%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 487787/41434105 (1.18%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 111532/41434105 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1016562/2922112 (34.79%)
		e: "text"|"emoji",
		t?: string, // 1905550/2922112 (65.21%)
		u?: string, // 1016562/2922112 (34.79%)
	}[], // 40938983/41434105 (98.81%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 40938983/41434105 (98.81%)
	author_fullname?: string, // 40938982/41434105 (98.81%)
	author_id?: string, // 487787/41434105 (1.18%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 40938983/41434105 (98.81%)
	author_premium?: boolean, // 40938983/41434105 (98.81%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 416645/41434105 (1.01%)
	campaign_id?: null, // 487787/41434105 (1.18%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"writing"|"comics"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3043825/41434105 (7.35%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 8385/3042636 (0.28%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 68852/183670 (37.49%)
			e: "text"|"emoji",
			t?: string, // 114818/183670 (62.51%)
			u?: string, // 68852/183670 (37.49%)
		}[], // 3030103/3042636 (99.59%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light"|"",
		author_flair_type?: "text"|"richtext", // 3030103/3042636 (99.59%)
		author_fullname?: string, // 3030103/3042636 (99.59%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3030103/3042636 (99.59%)
		author_premium?: boolean, // 3030103/3042636 (99.59%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"entertainment"|"photography"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("photography"|"drawing_and_painting"|"gaming"|"comics"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				caption?: string, // 1153955/3721186 (31.01%)
				id: number,
				media_id: string,
				outbound_url?: string, // 10008/3721186 (0.27%)
			}[],
		}|null, // 652961/3042636 (21.46%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 652961/3042636 (21.46%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 65540/529446 (12.38%)
			e: "text"|"emoji",
			t?: string, // 463906/529446 (87.62%)
			u?: string, // 65540/529446 (12.38%)
		}[],
		link_flair_template_id?: string, // 1260818/3042636 (41.44%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat?: null, // 41/3042636 (0.00%)
		location_long?: null, // 41/3042636 (0.00%)
		location_name?: null, // 41/3042636 (0.00%)
		locked: boolean,
		media: null|{
			event_id?: "18hnzysb1elcs", // 2/637919 (0.00%)
			oembed?: {
				author_name?: string, // 38904/411566 (9.45%)
				author_url?: string, // 38894/411566 (9.45%)
				cache_age?: number, // 8/411566 (0.00%)
				description?: string, // 1902/411566 (0.46%)
				height?: number|null, // 411536/411566 (99.99%)
				html: string,
				mean_alpha?: number, // 1/411566 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 400755/411566 (97.37%)
				thumbnail_url?: string, // 411479/411566 (99.98%)
				thumbnail_width?: number, // 400755/411566 (97.37%)
				title?: string, // 411522/411566 (99.99%)
				type: "video"|"rich"|"photo",
				url?: string, // 60/411566 (0.01%)
				version: "1.0",
				width?: number, // 411536/411566 (99.99%)
			}, // 411566/637919 (64.52%)
			reddit_video?: {
				bitrate_kbps?: number, // 226093/226351 (99.89%)
				dash_url?: string, // 226336/226351 (99.99%)
				duration?: number, // 226336/226351 (99.99%)
				fallback_url?: string, // 226336/226351 (99.99%)
				has_audio?: boolean, // 225036/226351 (99.42%)
				height: number|null,
				hls_url?: string, // 226336/226351 (99.99%)
				is_gif?: boolean, // 226336/226351 (99.99%)
				scrubber_media_url?: string, // 226336/226351 (99.99%)
				transcoding_message?: string, // 15/226351 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 226351/637919 (35.48%)
			type?: string, // 411568/637919 (64.52%)
		},
		media_embed: {
			content?: string, // 411538/3042636 (13.53%)
			height?: number, // 411538/3042636 (13.53%)
			scrolling?: boolean, // 411538/3042636 (13.53%)
			width?: number, // 411538/3042636 (13.53%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3308/3791574 (0.09%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 3787669/3791574 (99.90%)
				hlsUrl?: string, // 3308/3791574 (0.09%)
				id?: string, // 3787669/3791574 (99.90%)
				isGif?: boolean, // 3308/3791574 (0.09%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 3784361/3791574 (99.81%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2544477/3791574 (67.11%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 3784361/3791574 (99.81%)
				s?: {
					gif?: string, // 146497/3784361 (3.87%)
					mp4?: string, // 146497/3784361 (3.87%)
					u?: string, // 3637864/3784361 (96.13%)
					x: number,
					y: number,
				}, // 3784361/3791574 (99.81%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 3308/3791574 (0.09%)
				y?: number, // 3308/3791574 (0.09%)
			},
		}|null, // 687292/3042636 (22.59%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		outbound_link?: {
			created: null|number,
			expiration: null|number,
			url: string,
		}, // 38/3042636 (0.00%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 199/8143 (2.44%)
			}[],
			prediction_status: null,
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|boolean|null, // 3002/3042636 (0.10%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1637940/3042636 (53.83%)
		preview?: {
			enabled: boolean,
			images: {
				id: string,
				resolutions: {
					height: number,
					url: string,
					width: number,
				}[],
				source: {
					height: number,
					url: string,
					width: number,
				},
				variants: {
					gif?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 14393/1637940 (0.88%)
					mp4?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 14393/1637940 (0.88%)
					nsfw?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 886717/1637940 (54.14%)
					obfuscated?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 891895/1637940 (54.45%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 371011/371062 (99.99%)
				dash_url?: string, // 371034/371062 (99.99%)
				duration?: number, // 371034/371062 (99.99%)
				fallback_url?: string, // 371034/371062 (99.99%)
				has_audio?: boolean, // 333214/371062 (89.80%)
				height: number|null,
				hls_url?: string, // 371034/371062 (99.99%)
				is_gif?: boolean, // 371034/371062 (99.99%)
				scrubber_media_url?: string, // 371034/371062 (99.99%)
				transcoding_message?: string, // 28/371062 (0.01%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 371062/1637940 (22.65%)
		}, // 1637940/3042636 (53.83%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"reddit"|"deleted"|"moderator"|"content_takedown"|"author"|"automod_filtered"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "18hnzysb1elcs", // 2/637919 (0.00%)
			oembed?: {
				author_name?: string, // 38904/411566 (9.45%)
				author_url?: string, // 38894/411566 (9.45%)
				cache_age?: number, // 8/411566 (0.00%)
				description?: string, // 1902/411566 (0.46%)
				height?: number|null, // 411536/411566 (99.99%)
				html: string,
				mean_alpha?: number, // 1/411566 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 400755/411566 (97.37%)
				thumbnail_url?: string, // 411479/411566 (99.98%)
				thumbnail_width?: number, // 400755/411566 (97.37%)
				title?: string, // 411522/411566 (99.99%)
				type: "video"|"rich"|"photo",
				url?: string, // 60/411566 (0.01%)
				version: "1.0",
				width?: number, // 411536/411566 (99.99%)
			}, // 411566/637919 (64.52%)
			reddit_video?: {
				bitrate_kbps?: number, // 226093/226351 (99.89%)
				dash_url?: string, // 226336/226351 (99.99%)
				duration?: number, // 226336/226351 (99.99%)
				fallback_url?: string, // 226336/226351 (99.99%)
				has_audio?: boolean, // 225036/226351 (99.42%)
				height: number|null,
				hls_url?: string, // 226336/226351 (99.99%)
				is_gif?: boolean, // 226336/226351 (99.99%)
				scrubber_media_url?: string, // 226336/226351 (99.99%)
				transcoding_message?: string, // 15/226351 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 226351/637919 (35.48%)
			type?: string, // 411568/637919 (64.52%)
		},
		secure_media_embed: {
			content?: string, // 411538/3042636 (13.53%)
			height?: number, // 411538/3042636 (13.53%)
			media_domain_url?: string, // 411538/3042636 (13.53%)
			scrolling?: boolean, // 411538/3042636 (13.53%)
			width?: number, // 411538/3042636 (13.53%)
		},
		selftext: string,
		selftext_html: null|string,
		send_replies: boolean,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 3041865/3042636 (99.97%)
		thumbnail_width?: number|null, // 3041865/3042636 (99.97%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2278261/3042636 (74.88%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url?: string, // 41/3042636 (0.00%)
		wls: null|number,
	}[], // 3043825/41434105 (7.35%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 487787/41434105 (1.18%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 487787/41434105 (1.18%)
	embed_url?: null|string, // 487787/41434105 (1.18%)
	events?: [], // 487787/41434105 (1.18%)
	eventsOnRender?: [], // 487787/41434105 (1.18%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 103632/19351027 (0.54%)
			caption?: string, // 6241381/19351027 (32.25%)
			display_url?: string, // 112150/19351027 (0.58%)
			id: number,
			media_id: string,
			outbound_url?: string, // 129015/19351027 (0.67%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 23584/19351027 (0.12%)
		}[],
	}|null, // 5200712/41434105 (12.55%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 487787/41434105 (1.18%)
	id: string,
	impression_id?: null, // 487787/41434105 (1.18%)
	impression_id_str?: null, // 487787/41434105 (1.18%)
	is_blank?: boolean, // 487787/41434105 (1.18%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5200712/41434105 (12.55%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 487787/41434105 (1.18%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1145134/9715932 (11.79%)
		e: "text"|"emoji",
		t?: string, // 8570798/9715932 (88.21%)
		u?: string, // 1145134/9715932 (11.79%)
	}[],
	link_flair_template_id?: string, // 18971664/41434105 (45.79%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat?: null, // 1918909/41434105 (4.63%)
	location_long?: null, // 1918909/41434105 (4.63%)
	location_name?: null, // 1918909/41434105 (4.63%)
	locked: boolean,
	media: null|{
		event_id?: "18hnzysb1elcs"|"1ggv8n7ailtky"|"1gi176rhuiqdz"|"1giav25t7saw7", // 14/4650772 (0.00%)
		oembed?: {
			author_name?: string, // 590621/3324499 (17.77%)
			author_url?: string, // 610426/3324499 (18.36%)
			cache_age?: number, // 57/3324499 (0.00%)
			description?: string, // 30776/3324499 (0.93%)
			height?: number, // 3324078/3324499 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3284842/3324499 (98.81%)
			thumbnail_url?: string, // 3324481/3324499 (100.00%)
			thumbnail_width?: number, // 3284842/3324499 (98.81%)
			title?: string, // 3324018/3324499 (99.99%)
			type: "video"|"rich"|"photo",
			url?: string, // 1433/3324499 (0.04%)
			version: "1.0",
			width?: number, // 3324078/3324499 (99.99%)
		}, // 3324499/4650772 (71.48%)
		reddit_video?: {
			bitrate_kbps?: number, // 1320377/1326259 (99.56%)
			dash_url?: string, // 1320377/1326259 (99.56%)
			duration?: number, // 1320377/1326259 (99.56%)
			fallback_url?: string, // 1320377/1326259 (99.56%)
			has_audio?: boolean, // 1320373/1326259 (99.56%)
			height: number|null,
			hls_url?: string, // 1320377/1326259 (99.56%)
			is_gif?: boolean, // 1320377/1326259 (99.56%)
			scrubber_media_url?: string, // 1320377/1326259 (99.56%)
			transcoding_message?: string, // 5882/1326259 (0.44%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1326259/4650772 (28.52%)
		type?: string, // 3324513/4650772 (71.48%)
	},
	media_embed: {
		content?: string, // 2464493/41434105 (5.95%)
		height?: number, // 2464493/41434105 (5.95%)
		scrolling?: boolean, // 2464493/41434105 (5.95%)
		width?: number, // 2464493/41434105 (5.95%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 21830/19896992 (0.11%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 19688366/19896992 (98.95%)
			hlsUrl?: string, // 21830/19896992 (0.11%)
			id?: string, // 19688366/19896992 (98.95%)
			isGif?: boolean, // 21830/19896992 (0.11%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 19666536/19896992 (98.84%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 10243591/19896992 (51.48%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 19666536/19896992 (98.84%)
			s?: {
				gif?: string, // 417319/19666536 (2.12%)
				mp4?: string, // 417319/19666536 (2.12%)
				u?: string, // 19249217/19666536 (97.88%)
				x: number,
				y: number,
			}, // 19666536/19896992 (98.84%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 21830/19896992 (0.11%)
			y?: number, // 21830/19896992 (0.11%)
		},
	}|null, // 5612282/41434105 (13.55%)
	media_only: boolean,
	mobile_ad_url?: string, // 487787/41434105 (1.18%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 487787/41434105 (1.18%)
	outbound_link?: {
		created?: null|number, // 1212235/1700022 (71.31%)
		expiration?: null|number, // 1212235/1700022 (71.31%)
		url?: string, // 1212235/1700022 (71.31%)
	}, // 1700022/41434105 (4.10%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 11842/103202 (11.47%)
		}[],
		prediction_status: null,
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 2544454/41434105 (6.14%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video"|"gallery", // 18008763/41434105 (43.46%)
	preview?: {
		enabled: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
				gif?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 424579/19005741 (2.23%)
				mp4?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 424579/19005741 (2.23%)
				nsfw?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 9745115/19005741 (51.27%)
				obfuscated?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 9831382/19005741 (51.73%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2538151/2540240 (99.92%)
			dash_url?: string, // 2538174/2540240 (99.92%)
			duration?: number, // 2538174/2540240 (99.92%)
			fallback_url?: string, // 2538174/2540240 (99.92%)
			has_audio?: boolean, // 2500103/2540240 (98.42%)
			height: number|null,
			hls_url?: string, // 2538174/2540240 (99.92%)
			is_gif?: boolean, // 2538174/2540240 (99.92%)
			scrubber_media_url?: string, // 2538174/2540240 (99.92%)
			transcoding_message?: string, // 2066/2540240 (0.08%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 2540240/19005741 (13.37%)
	}, // 19005741/41434105 (45.87%)
	priority_id?: null, // 487787/41434105 (1.18%)
	product_ids?: [], // 487787/41434105 (1.18%)
	promo_layout?: null|"SPOTLIGHT_VIDEO", // 487787/41434105 (1.18%)
	promoted?: boolean, // 487787/41434105 (1.18%)
	promoted_by?: null, // 487787/41434105 (1.18%)
	promoted_display_name?: null, // 487787/41434105 (1.18%)
	promoted_url?: null, // 487787/41434105 (1.18%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		event_id?: "18hnzysb1elcs"|"1ggv8n7ailtky"|"1gi176rhuiqdz"|"1giav25t7saw7", // 14/4650772 (0.00%)
		oembed?: {
			author_name?: string, // 590621/3324499 (17.77%)
			author_url?: string, // 610426/3324499 (18.36%)
			cache_age?: number, // 57/3324499 (0.00%)
			description?: string, // 30776/3324499 (0.93%)
			height?: number, // 3324078/3324499 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3284842/3324499 (98.81%)
			thumbnail_url?: string, // 3324481/3324499 (100.00%)
			thumbnail_width?: number, // 3284842/3324499 (98.81%)
			title?: string, // 3324018/3324499 (99.99%)
			type: "video"|"rich"|"photo",
			url?: string, // 1433/3324499 (0.04%)
			version: "1.0",
			width?: number, // 3324078/3324499 (99.99%)
		}, // 3324499/4650772 (71.48%)
		reddit_video?: {
			bitrate_kbps?: number, // 1320377/1326259 (99.56%)
			dash_url?: string, // 1320377/1326259 (99.56%)
			duration?: number, // 1320377/1326259 (99.56%)
			fallback_url?: string, // 1320377/1326259 (99.56%)
			has_audio?: boolean, // 1320373/1326259 (99.56%)
			height: number|null,
			hls_url?: string, // 1320377/1326259 (99.56%)
			is_gif?: boolean, // 1320377/1326259 (99.56%)
			scrubber_media_url?: string, // 1320377/1326259 (99.56%)
			transcoding_message?: string, // 5882/1326259 (0.44%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1326259/4650772 (28.52%)
		type?: string, // 3324513/4650772 (71.48%)
	},
	secure_media_embed: {
		content?: string, // 2464493/41434105 (5.95%)
		height?: number, // 2464493/41434105 (5.95%)
		media_domain_url?: string, // 2464493/41434105 (5.95%)
		scrolling?: boolean, // 2464493/41434105 (5.95%)
		width?: number, // 2464493/41434105 (5.95%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 487787/41434105 (1.18%)
	sk_ad_network_data?: null, // 487787/41434105 (1.18%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 12956/41434105 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 487787/41434105 (1.18%)
	third_party_tracking?: null, // 487787/41434105 (1.18%)
	third_party_tracking_2?: null, // 487787/41434105 (1.18%)
	thumbnail: string|null,
	thumbnail_height?: null|number, // 41115356/41434105 (99.23%)
	thumbnail_width?: null|number, // 41115356/41434105 (99.23%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 26308855/41434105 (63.50%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url?: string, // 1918909/41434105 (4.63%)
	wls: null|number,
}