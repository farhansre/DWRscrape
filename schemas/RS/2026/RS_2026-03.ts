interface RedditPost {
	_meta?: {
		edited_title?: string, // 2477673/45278778 (5.47%)
		is_edited?: boolean, // 1605042/45278778 (3.54%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 9288971/45278778 (20.52%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 8541425/45278778 (18.86%)
		was_initially_deleted?: boolean, // 747553/45278778 (1.65%)
	}, // 45278778/45737584 (99.00%)
	ad_business?: null, // 556887/45737584 (1.22%)
	ad_promoted_user_posts?: null, // 556887/45737584 (1.22%)
	ad_supplementary_text_md?: null|string, // 556887/45737584 (1.22%)
	ad_user_targeting?: null, // 556887/45737584 (1.22%)
	adserver_click_url?: null, // 556887/45737584 (1.22%)
	adserver_imp_pixel?: null, // 556887/45737584 (1.22%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 556887/45737584 (1.22%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 114443/45737584 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1074635/2971747 (36.16%)
		e: "text"|"emoji",
		t?: string, // 1897112/2971747 (63.84%)
		u?: string, // 1074635/2971747 (36.16%)
	}[], // 44724259/45737584 (97.78%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 44724259/45737584 (97.78%)
	author_fullname?: string, // 44724259/45737584 (97.78%)
	author_id?: string, // 556887/45737584 (1.22%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 44724259/45737584 (97.78%)
	author_premium?: boolean, // 44724259/45737584 (97.78%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 466536/45737584 (1.02%)
	campaign_id?: null, // 556887/45737584 (1.22%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"writing"|"comics"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3460897/45737584 (7.57%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 9252/3458786 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 75111/206194 (36.43%)
			e: "text"|"emoji",
			t?: string, // 131083/206194 (63.57%)
			u?: string, // 75111/206194 (36.43%)
		}[], // 3438785/3458786 (99.42%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 3438785/3458786 (99.42%)
		author_fullname?: string, // 3438785/3458786 (99.42%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3438785/3458786 (99.42%)
		author_premium?: boolean, // 3438785/3458786 (99.42%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"entertainment"|"photography"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("drawing_and_painting"|"photography"|"gaming"|"comics"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 1228196/4214028 (29.15%)
				id: number,
				is_deleted?: boolean, // 769376/4214028 (18.26%)
				media_id: string,
				outbound_url?: string, // 12937/4214028 (0.31%)
			}[],
		}|null, // 748859/3458786 (21.65%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 748859/3458786 (21.65%)
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
			a?: string, // 75142/597575 (12.57%)
			e: "text"|"emoji",
			t?: string, // 522433/597575 (87.43%)
			u?: string, // 75142/597575 (12.57%)
		}[],
		link_flair_template_id?: string, // 1416435/3458786 (40.95%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat?: null, // 261/3458786 (0.01%)
		location_long?: null, // 261/3458786 (0.01%)
		location_name?: null, // 261/3458786 (0.01%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 45081/515893 (8.74%)
				author_url?: string, // 45071/515893 (8.74%)
				cache_age?: number, // 5/515893 (0.00%)
				description?: string, // 2034/515893 (0.39%)
				height?: number|null, // 515868/515893 (100.00%)
				html: string,
				mean_alpha?: number, // 2/515893 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 499598/515893 (96.84%)
				thumbnail_url?: string, // 515786/515893 (99.98%)
				thumbnail_width?: number, // 499598/515893 (96.84%)
				title?: string, // 515860/515893 (99.99%)
				type: "video"|"rich"|"photo",
				url?: string, // 31/515893 (0.01%)
				version: "1.0",
				width?: number, // 515868/515893 (100.00%)
			}, // 515893/751533 (68.65%)
			reddit_video?: {
				bitrate_kbps?: number, // 235371/235640 (99.89%)
				dash_url?: string, // 235615/235640 (99.99%)
				duration?: number, // 235615/235640 (99.99%)
				fallback_url?: string, // 235615/235640 (99.99%)
				has_audio?: boolean, // 234273/235640 (99.42%)
				height: number|null,
				hls_url?: string, // 235615/235640 (99.99%)
				is_gif?: boolean, // 235615/235640 (99.99%)
				scrubber_media_url?: string, // 235615/235640 (99.99%)
				transcoding_message?: string, // 25/235640 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 235640/751533 (31.35%)
			type?: string, // 515893/751533 (68.65%)
		},
		media_embed: {
			content?: string, // 515868/3458786 (14.91%)
			height?: number, // 515868/3458786 (14.91%)
			scrolling?: boolean, // 515868/3458786 (14.91%)
			width?: number, // 515868/3458786 (14.91%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3421/4292576 (0.08%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 4288376/4292576 (99.90%)
				hlsUrl?: string, // 3421/4292576 (0.08%)
				id?: string, // 4288376/4292576 (99.90%)
				isGif?: boolean, // 3421/4292576 (0.08%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 4284955/4292576 (99.82%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2862907/4292576 (66.69%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 4284955/4292576 (99.82%)
				s?: {
					gif?: string, // 160696/4284955 (3.75%)
					mp4?: string, // 160696/4284955 (3.75%)
					u?: string, // 4124259/4284955 (96.25%)
					x: number,
					y: number,
				}, // 4284955/4292576 (99.82%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 3421/4292576 (0.08%)
				y?: number, // 3421/4292576 (0.08%)
			},
		}|null, // 786088/3458786 (22.73%)
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
		}, // 222/3458786 (0.01%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 177/8947 (1.98%)
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
		}|boolean|null, // 4656/3458786 (0.13%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1861325/3458786 (53.81%)
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
					}, // 11880/1861325 (0.64%)
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
					}, // 11880/1861325 (0.64%)
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
					}, // 1041840/1861325 (55.97%)
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
					}, // 1047754/1861325 (56.29%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 469355/469411 (99.99%)
				dash_url?: string, // 469381/469411 (99.99%)
				duration?: number, // 469381/469411 (99.99%)
				fallback_url?: string, // 469381/469411 (99.99%)
				has_audio?: boolean, // 433428/469411 (92.33%)
				height: number|null,
				hls_url?: string, // 469381/469411 (99.99%)
				is_gif?: boolean, // 469381/469411 (99.99%)
				scrubber_media_url?: string, // 469381/469411 (99.99%)
				transcoding_message?: string, // 30/469411 (0.01%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 469411/1861325 (25.22%)
		}, // 1861325/3458786 (53.81%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 45081/515893 (8.74%)
				author_url?: string, // 45071/515893 (8.74%)
				cache_age?: number, // 5/515893 (0.00%)
				description?: string, // 2034/515893 (0.39%)
				height?: number|null, // 515868/515893 (100.00%)
				html: string,
				mean_alpha?: number, // 2/515893 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 499598/515893 (96.84%)
				thumbnail_url?: string, // 515786/515893 (99.98%)
				thumbnail_width?: number, // 499598/515893 (96.84%)
				title?: string, // 515860/515893 (99.99%)
				type: "video"|"rich"|"photo",
				url?: string, // 31/515893 (0.01%)
				version: "1.0",
				width?: number, // 515868/515893 (100.00%)
			}, // 515893/751533 (68.65%)
			reddit_video?: {
				bitrate_kbps?: number, // 235371/235640 (99.89%)
				dash_url?: string, // 235615/235640 (99.99%)
				duration?: number, // 235615/235640 (99.99%)
				fallback_url?: string, // 235615/235640 (99.99%)
				has_audio?: boolean, // 234273/235640 (99.42%)
				height: number|null,
				hls_url?: string, // 235615/235640 (99.99%)
				is_gif?: boolean, // 235615/235640 (99.99%)
				scrubber_media_url?: string, // 235615/235640 (99.99%)
				transcoding_message?: string, // 25/235640 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 235640/751533 (31.35%)
			type?: string, // 515893/751533 (68.65%)
		},
		secure_media_embed: {
			content?: string, // 515868/3458786 (14.91%)
			height?: number, // 515868/3458786 (14.91%)
			media_domain_url?: string, // 515868/3458786 (14.91%)
			scrolling?: boolean, // 515868/3458786 (14.91%)
			width?: number, // 515868/3458786 (14.91%)
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
		thumbnail_height?: number|null, // 3456584/3458786 (99.94%)
		thumbnail_width?: number|null, // 3456584/3458786 (99.94%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2584410/3458786 (74.72%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url?: string, // 261/3458786 (0.01%)
		wls: null|number,
	}[], // 3460897/45737584 (7.57%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 556887/45737584 (1.22%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 556887/45737584 (1.22%)
	embed_url?: null|string, // 556887/45737584 (1.22%)
	events?: [], // 556887/45737584 (1.22%)
	eventsOnRender?: [], // 556887/45737584 (1.22%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 104100/22364812 (0.47%)
			caption?: string, // 7003223/22364812 (31.31%)
			display_url?: string, // 121752/22364812 (0.54%)
			id: number,
			is_deleted?: boolean, // 4044434/22364812 (18.08%)
			media_id: string,
			outbound_url?: string, // 142914/22364812 (0.64%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 12848/22364812 (0.06%)
		}[],
	}|null, // 5913775/45737584 (12.93%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 556887/45737584 (1.22%)
	id: string,
	impression_id?: null, // 556887/45737584 (1.22%)
	impression_id_str?: null, // 556887/45737584 (1.22%)
	is_blank?: boolean, // 556887/45737584 (1.22%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 5913775/45737584 (12.93%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 556887/45737584 (1.22%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1303336/10352647 (12.59%)
		e: "text"|"emoji",
		t?: string, // 9049311/10352647 (87.41%)
		u?: string, // 1303336/10352647 (12.59%)
	}[],
	link_flair_template_id?: string, // 20670223/45737584 (45.19%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat?: null, // 25699882/45737584 (56.19%)
	location_long?: null, // 25699882/45737584 (56.19%)
	location_name?: null, // 25699882/45737584 (56.19%)
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 638707/3893756 (16.40%)
			author_url?: string, // 706637/3893756 (18.15%)
			cache_age?: number, // 26/3893756 (0.00%)
			description?: string, // 32321/3893756 (0.83%)
			height?: number|null, // 3893339/3893756 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3835804/3893756 (98.51%)
			thumbnail_url?: string, // 3893721/3893756 (100.00%)
			thumbnail_width?: number, // 3835804/3893756 (98.51%)
			title?: string, // 3893256/3893756 (99.99%)
			type: "video"|"rich"|"photo",
			url?: string, // 1932/3893756 (0.05%)
			version: "1.0",
			width?: number, // 3893339/3893756 (99.99%)
		}, // 3893756/5362036 (72.62%)
		reddit_video?: {
			bitrate_kbps?: number, // 1462393/1468280 (99.60%)
			dash_url?: string, // 1462393/1468280 (99.60%)
			duration?: number, // 1462393/1468280 (99.60%)
			fallback_url?: string, // 1462393/1468280 (99.60%)
			has_audio?: boolean, // 1462341/1468280 (99.60%)
			height: number|null,
			hls_url?: string, // 1462393/1468280 (99.60%)
			is_gif?: boolean, // 1462393/1468280 (99.60%)
			scrubber_media_url?: string, // 1462393/1468280 (99.60%)
			transcoding_message?: string, // 5887/1468280 (0.40%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1468280/5362036 (27.38%)
		type?: string, // 3893756/5362036 (72.62%)
	},
	media_embed: {
		content?: string, // 3892132/45737584 (8.51%)
		height?: number, // 3892132/45737584 (8.51%)
		scrolling?: boolean, // 3892132/45737584 (8.51%)
		width?: number, // 3892132/45737584 (8.51%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 26464/22954489 (0.12%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 22837357/22954489 (99.49%)
			hlsUrl?: string, // 26464/22954489 (0.12%)
			id?: string, // 22837357/22954489 (99.49%)
			isGif?: boolean, // 26464/22954489 (0.12%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 22810893/22954489 (99.37%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 11823094/22954489 (51.51%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 22810893/22954489 (99.37%)
			s?: {
				gif?: string, // 476012/22810893 (2.09%)
				mp4?: string, // 476012/22810893 (2.09%)
				u?: string, // 22334881/22810893 (97.91%)
				x: number,
				y: number,
			}, // 22810893/22954489 (99.37%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 26464/22954489 (0.12%)
			y?: number, // 26464/22954489 (0.12%)
		},
	}|null, // 6361310/45737584 (13.91%)
	media_only: boolean,
	mobile_ad_url?: string, // 556887/45737584 (1.22%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 556887/45737584 (1.22%)
	outbound_link?: {
		created?: null|number, // 16102509/16659396 (96.66%)
		expiration?: null|number, // 16102509/16659396 (96.66%)
		url?: string, // 16102509/16659396 (96.66%)
	}, // 16659396/45737584 (36.42%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 13308/119279 (11.16%)
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
	}|null, // 2821973/45737584 (6.17%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 21093346/45737584 (46.12%)
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
				}, // 450259/21125906 (2.13%)
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
				}, // 450259/21125906 (2.13%)
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
				}, // 10850346/21125906 (51.36%)
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
				}, // 10947263/21125906 (51.82%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 3126341/3127858 (99.95%)
			dash_url?: string, // 3126367/3127858 (99.95%)
			duration?: number, // 3126367/3127858 (99.95%)
			fallback_url?: string, // 3126367/3127858 (99.95%)
			has_audio?: boolean, // 3090452/3127858 (98.80%)
			height: number|null,
			hls_url?: string, // 3126367/3127858 (99.95%)
			is_gif?: boolean, // 3126367/3127858 (99.95%)
			scrubber_media_url?: string, // 3126367/3127858 (99.95%)
			transcoding_message?: string, // 1491/3127858 (0.05%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 3127858/21125906 (14.81%)
	}, // 21125906/45737584 (46.19%)
	priority_id?: null, // 556887/45737584 (1.22%)
	product_ids?: [], // 556887/45737584 (1.22%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 556887/45737584 (1.22%)
	promoted?: boolean, // 556887/45737584 (1.22%)
	promoted_by?: null, // 556887/45737584 (1.22%)
	promoted_display_name?: null, // 556887/45737584 (1.22%)
	promoted_url?: null, // 556887/45737584 (1.22%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"copyright_takedown"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 638707/3893756 (16.40%)
			author_url?: string, // 706637/3893756 (18.15%)
			cache_age?: number, // 26/3893756 (0.00%)
			description?: string, // 32321/3893756 (0.83%)
			height?: number|null, // 3893339/3893756 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3835804/3893756 (98.51%)
			thumbnail_url?: string, // 3893721/3893756 (100.00%)
			thumbnail_width?: number, // 3835804/3893756 (98.51%)
			title?: string, // 3893256/3893756 (99.99%)
			type: "video"|"rich"|"photo",
			url?: string, // 1932/3893756 (0.05%)
			version: "1.0",
			width?: number, // 3893339/3893756 (99.99%)
		}, // 3893756/5362036 (72.62%)
		reddit_video?: {
			bitrate_kbps?: number, // 1462393/1468280 (99.60%)
			dash_url?: string, // 1462393/1468280 (99.60%)
			duration?: number, // 1462393/1468280 (99.60%)
			fallback_url?: string, // 1462393/1468280 (99.60%)
			has_audio?: boolean, // 1462341/1468280 (99.60%)
			height: number|null,
			hls_url?: string, // 1462393/1468280 (99.60%)
			is_gif?: boolean, // 1462393/1468280 (99.60%)
			scrubber_media_url?: string, // 1462393/1468280 (99.60%)
			transcoding_message?: string, // 5887/1468280 (0.40%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1468280/5362036 (27.38%)
		type?: string, // 3893756/5362036 (72.62%)
	},
	secure_media_embed: {
		content?: string, // 3892132/45737584 (8.51%)
		height?: number, // 3892132/45737584 (8.51%)
		media_domain_url?: string, // 3892132/45737584 (8.51%)
		scrolling?: boolean, // 3892132/45737584 (8.51%)
		width?: number, // 3892132/45737584 (8.51%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 556887/45737584 (1.22%)
	sk_ad_network_data?: null, // 556887/45737584 (1.22%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 12408/45737584 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted"|"private",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"controversial"|"live"|"random",
	third_party_trackers?: [], // 556887/45737584 (1.22%)
	third_party_tracking?: null, // 556887/45737584 (1.22%)
	third_party_tracking_2?: null, // 556887/45737584 (1.22%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 45314760/45737584 (99.08%)
	thumbnail_width?: number|null, // 45314760/45737584 (99.08%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 29245538/45737584 (63.94%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url?: string, // 25699882/45737584 (56.19%)
	wls: null|number,
}