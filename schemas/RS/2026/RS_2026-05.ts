interface RedditPost {
	_meta?: {
		edited_title?: string, // 2674236/45408385 (5.89%)
		is_edited?: boolean, // 1840485/45408385 (4.05%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 9600318/45408385 (21.14%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 8878355/45408385 (19.55%)
		was_initially_deleted?: boolean, // 721975/45408385 (1.59%)
	}, // 45408385/47453180 (95.69%)
	ad_business?: null, // 678507/47453180 (1.43%)
	ad_promoted_user_posts?: null, // 678507/47453180 (1.43%)
	ad_supplementary_text_md?: null|string, // 678507/47453180 (1.43%)
	ad_user_targeting?: null, // 678507/47453180 (1.43%)
	adserver_click_url?: null, // 678507/47453180 (1.43%)
	adserver_imp_pixel?: null, // 678507/47453180 (1.43%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 678507/47453180 (1.43%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 115804/47453180 (0.24%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1051252/2916632 (36.04%)
		e: "text"|"emoji",
		t?: string, // 1865380/2916632 (63.96%)
		u?: string, // 1051252/2916632 (36.04%)
	}[], // 46464373/47453180 (97.92%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 46464373/47453180 (97.92%)
	author_fullname?: string, // 46464371/47453180 (97.92%)
	author_id?: string|null, // 678507/47453180 (1.43%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 46464373/47453180 (97.92%)
	author_premium?: boolean, // 46464373/47453180 (97.92%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 580824/47453180 (1.22%)
	campaign_id?: null, // 678507/47453180 (1.43%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"entertainment"|"photography"|"diy_and_crafts"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3670619/47453180 (7.74%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 10014/3668584 (0.27%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 73130/203629 (35.91%)
			e: "text"|"emoji",
			t?: string, // 130499/203629 (64.09%)
			u?: string, // 73130/203629 (35.91%)
		}[], // 3651516/3668584 (99.53%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 3651516/3668584 (99.53%)
		author_fullname?: string, // 3651516/3668584 (99.53%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3651516/3668584 (99.53%)
		author_premium?: boolean, // 3651516/3668584 (99.53%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"drawing_and_painting"|"gaming"|"entertainment",
		clicked: boolean,
		content_categories: null|("drawing_and_painting"|"gaming"|"photography"|"comics"|"entertainment"|"diy_and_crafts"|"writing"|"music"|"videos")[],
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
				caption?: string, // 1357785/4626053 (29.35%)
				id: number,
				is_deleted: boolean,
				media_id: string,
				outbound_url?: string, // 11079/4626053 (0.24%)
			}[],
		}|null, // 821215/3668584 (22.39%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 821215/3668584 (22.39%)
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
			a?: string, // 86642/629510 (13.76%)
			e: "text"|"emoji",
			t?: string, // 542868/629510 (86.24%)
			u?: string, // 86642/629510 (13.76%)
		}[],
		link_flair_template_id?: string, // 1538435/3668584 (41.94%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat?: null|number, // 2674394/3668584 (72.90%)
		location_long?: null|number, // 2674394/3668584 (72.90%)
		location_name?: null|"Venice (Venezia), Veneto"|"Houston, TX", // 2674394/3668584 (72.90%)
		locked: boolean,
		media: null|{
			event_id?: "1gb1jdg62n0id", // 1/777089 (0.00%)
			oembed?: {
				author_name?: string, // 47141/554599 (8.50%)
				author_url?: string, // 47135/554599 (8.50%)
				cache_age?: number, // 10/554599 (0.00%)
				description?: string, // 2085/554599 (0.38%)
				height?: number|null, // 554554/554599 (99.99%)
				html: string,
				mean_alpha?: number, // 5/554599 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 543018/554599 (97.91%)
				thumbnail_url?: string, // 554509/554599 (99.98%)
				thumbnail_width?: number, // 543018/554599 (97.91%)
				title?: string, // 554538/554599 (99.99%)
				type: "video"|"rich",
				url?: string, // 31/554599 (0.01%)
				version: "1.0",
				width?: number, // 554554/554599 (99.99%)
			}, // 554599/777089 (71.37%)
			reddit_video?: {
				bitrate_kbps?: number, // 222215/222489 (99.88%)
				dash_url?: string, // 222473/222489 (99.99%)
				duration?: number, // 222473/222489 (99.99%)
				fallback_url?: string, // 222473/222489 (99.99%)
				has_audio?: boolean, // 221251/222489 (99.44%)
				height: number|null,
				hls_url?: string, // 222473/222489 (99.99%)
				is_gif?: boolean, // 222473/222489 (99.99%)
				scrubber_media_url?: string, // 222473/222489 (99.99%)
				transcoding_message?: string, // 16/222489 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 222489/777089 (28.63%)
			type?: string, // 554600/777089 (71.37%)
		},
		media_embed: {
			content?: string, // 554555/3668584 (15.12%)
			height?: number, // 554555/3668584 (15.12%)
			scrolling?: boolean, // 554555/3668584 (15.12%)
			width?: number, // 554555/3668584 (15.12%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3446/4706349 (0.07%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 4701579/4706349 (99.90%)
				hlsUrl?: string, // 3446/4706349 (0.07%)
				id?: string, // 4701579/4706349 (99.90%)
				isGif?: boolean, // 3446/4706349 (0.07%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 4698133/4706349 (99.83%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 3207525/4706349 (68.15%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 4698133/4706349 (99.83%)
				s?: {
					gif?: string, // 179707/4698133 (3.83%)
					mp4?: string, // 179707/4698133 (3.83%)
					u?: string, // 4518426/4698133 (96.17%)
					x: number,
					y: number,
				}, // 4698133/4706349 (99.83%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 3446/4706349 (0.07%)
				y?: number, // 3446/4706349 (0.07%)
			},
		}|null, // 859746/3668584 (23.44%)
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
		}, // 1973441/3668584 (53.79%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 356/13824 (2.58%)
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
		}|boolean|null, // 5761/3668584 (0.16%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1912610/3668584 (52.13%)
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
					}, // 20371/1912610 (1.07%)
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
					}, // 20371/1912610 (1.07%)
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
					}, // 1113170/1912610 (58.20%)
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
					}, // 1119411/1912610 (58.53%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 504294/504345 (99.99%)
				dash_url?: string, // 504318/504345 (99.99%)
				duration?: number, // 504318/504345 (99.99%)
				fallback_url?: string, // 504318/504345 (99.99%)
				has_audio?: boolean, // 480897/504345 (95.35%)
				height: number|null,
				hls_url?: string, // 504318/504345 (99.99%)
				is_gif?: boolean, // 504318/504345 (99.99%)
				scrubber_media_url?: string, // 504318/504345 (99.99%)
				transcoding_message?: string, // 27/504345 (0.01%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 504345/1912610 (26.37%)
		}, // 1912610/3668584 (52.13%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "1gb1jdg62n0id", // 1/777089 (0.00%)
			oembed?: {
				author_name?: string, // 47141/554599 (8.50%)
				author_url?: string, // 47135/554599 (8.50%)
				cache_age?: number, // 10/554599 (0.00%)
				description?: string, // 2085/554599 (0.38%)
				height?: number|null, // 554554/554599 (99.99%)
				html: string,
				mean_alpha?: number, // 5/554599 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 543018/554599 (97.91%)
				thumbnail_url?: string, // 554509/554599 (99.98%)
				thumbnail_width?: number, // 543018/554599 (97.91%)
				title?: string, // 554538/554599 (99.99%)
				type: "video"|"rich",
				url?: string, // 31/554599 (0.01%)
				version: "1.0",
				width?: number, // 554554/554599 (99.99%)
			}, // 554599/777089 (71.37%)
			reddit_video?: {
				bitrate_kbps?: number, // 222215/222489 (99.88%)
				dash_url?: string, // 222473/222489 (99.99%)
				duration?: number, // 222473/222489 (99.99%)
				fallback_url?: string, // 222473/222489 (99.99%)
				has_audio?: boolean, // 221251/222489 (99.44%)
				height: number|null,
				hls_url?: string, // 222473/222489 (99.99%)
				is_gif?: boolean, // 222473/222489 (99.99%)
				scrubber_media_url?: string, // 222473/222489 (99.99%)
				transcoding_message?: string, // 16/222489 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 222489/777089 (28.63%)
			type?: string, // 554600/777089 (71.37%)
		},
		secure_media_embed: {
			content?: string, // 554555/3668584 (15.12%)
			height?: number, // 554555/3668584 (15.12%)
			media_domain_url?: string, // 554555/3668584 (15.12%)
			scrolling?: boolean, // 554555/3668584 (15.12%)
			width?: number, // 554555/3668584 (15.12%)
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
		thumbnail_height?: number|null, // 3666452/3668584 (99.94%)
		thumbnail_width?: number|null, // 3666452/3668584 (99.94%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2705575/3668584 (73.75%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url?: string, // 2674394/3668584 (72.90%)
		wls: null|number,
	}[], // 3670619/47453180 (7.74%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: string|null, // 678507/47453180 (1.43%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 678507/47453180 (1.43%)
	embed_url?: null|string, // 678507/47453180 (1.43%)
	events?: [], // 678507/47453180 (1.43%)
	eventsOnRender?: [], // 678507/47453180 (1.43%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 139365/24094633 (0.58%)
			caption?: string, // 7414427/24094633 (30.77%)
			display_url?: string, // 151688/24094633 (0.63%)
			id: number,
			is_deleted: boolean,
			media_id: string,
			outbound_url?: string, // 177018/24094633 (0.73%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 31092/24094633 (0.13%)
		}[],
	}|null, // 6556048/47453180 (13.82%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 678507/47453180 (1.43%)
	id: string,
	impression_id?: null, // 678507/47453180 (1.43%)
	impression_id_str?: null, // 678507/47453180 (1.43%)
	is_blank?: boolean, // 678507/47453180 (1.43%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 6556048/47453180 (13.82%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 678507/47453180 (1.43%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1337283/10410933 (12.84%)
		e: "text"|"emoji",
		t?: string, // 9073650/10410933 (87.16%)
		u?: string, // 1337283/10410933 (12.84%)
	}[],
	link_flair_template_id?: string, // 21182412/47453180 (44.64%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat?: null, // 42699510/47453180 (89.98%)
	location_long?: null, // 42699510/47453180 (89.98%)
	location_name?: null, // 42699510/47453180 (89.98%)
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 610244/4019553 (15.18%)
			author_url?: string, // 610251/4019553 (15.18%)
			cache_age?: number, // 26/4019553 (0.00%)
			description?: string, // 20931/4019553 (0.52%)
			height?: number, // 4019056/4019553 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3987068/4019553 (99.19%)
			thumbnail_url: string,
			thumbnail_width?: number, // 3987068/4019553 (99.19%)
			title?: string, // 4018886/4019553 (99.98%)
			type: "video"|"rich",
			url?: string, // 1232/4019553 (0.03%)
			version: "1.0",
			width?: number, // 4019056/4019553 (99.99%)
		}, // 4019553/5506606 (73.00%)
		reddit_video?: {
			bitrate_kbps?: number, // 1481279/1487053 (99.61%)
			dash_url?: string, // 1481279/1487053 (99.61%)
			duration?: number, // 1481279/1487053 (99.61%)
			fallback_url?: string, // 1481279/1487053 (99.61%)
			has_audio?: boolean, // 1481275/1487053 (99.61%)
			height: number|null,
			hls_url?: string, // 1481279/1487053 (99.61%)
			is_gif?: boolean, // 1481279/1487053 (99.61%)
			scrubber_media_url?: string, // 1481279/1487053 (99.61%)
			transcoding_message?: string, // 5774/1487053 (0.39%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1487053/5506606 (27.00%)
		type?: string, // 4019553/5506606 (73.00%)
	},
	media_embed: {
		content?: string, // 4017642/47453180 (8.47%)
		height?: number, // 4017642/47453180 (8.47%)
		scrolling?: boolean, // 4017642/47453180 (8.47%)
		width?: number, // 4017642/47453180 (8.47%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 23256/24681549 (0.09%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 24550304/24681549 (99.47%)
			hlsUrl?: string, // 23256/24681549 (0.09%)
			id?: string, // 24550304/24681549 (99.47%)
			isGif?: boolean, // 23256/24681549 (0.09%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 24527048/24681549 (99.37%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 13382410/24681549 (54.22%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 24527048/24681549 (99.37%)
			s?: {
				gif?: string, // 470382/24527048 (1.92%)
				mp4?: string, // 470382/24527048 (1.92%)
				u?: string, // 24056666/24527048 (98.08%)
				x: number,
				y: number,
			}, // 24527048/24681549 (99.37%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 23256/24681549 (0.09%)
			y?: number, // 23256/24681549 (0.09%)
		},
	}|null, // 6992536/47453180 (14.74%)
	media_only: boolean,
	mobile_ad_url?: string, // 678507/47453180 (1.43%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 678507/47453180 (1.43%)
	outbound_link?: {
		created?: null|number, // 26500278/27178785 (97.50%)
		expiration?: null|number, // 26500278/27178785 (97.50%)
		url?: string, // 26500278/27178785 (97.50%)
	}, // 27178785/47453180 (57.27%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 14855/169354 (8.77%)
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
	}|null, // 2776175/47453180 (5.85%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 21275766/47453180 (44.84%)
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
				}, // 454970/21329303 (2.13%)
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
				}, // 454970/21329303 (2.13%)
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
				}, // 11129233/21329303 (52.18%)
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
				}, // 11225145/21329303 (52.63%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 3321376/3322850 (99.96%)
			dash_url?: string, // 3321400/3322850 (99.96%)
			duration?: number, // 3321400/3322850 (99.96%)
			fallback_url?: string, // 3321400/3322850 (99.96%)
			has_audio?: boolean, // 3297980/3322850 (99.25%)
			height: number|null,
			hls_url?: string, // 3321400/3322850 (99.96%)
			is_gif?: boolean, // 3321400/3322850 (99.96%)
			scrubber_media_url?: string, // 3321400/3322850 (99.96%)
			transcoding_message?: string, // 1450/3322850 (0.04%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 3322850/21329303 (15.58%)
	}, // 21329303/47453180 (44.95%)
	priority_id?: null, // 678507/47453180 (1.43%)
	product_ids?: [], // 678507/47453180 (1.43%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 678507/47453180 (1.43%)
	promoted?: boolean, // 678507/47453180 (1.43%)
	promoted_by?: null, // 678507/47453180 (1.43%)
	promoted_display_name?: null, // 678507/47453180 (1.43%)
	promoted_url?: null, // 678507/47453180 (1.43%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops"|"copyright_takedown",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 610244/4019553 (15.18%)
			author_url?: string, // 610251/4019553 (15.18%)
			cache_age?: number, // 26/4019553 (0.00%)
			description?: string, // 20931/4019553 (0.52%)
			height?: number, // 4019056/4019553 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3987068/4019553 (99.19%)
			thumbnail_url: string,
			thumbnail_width?: number, // 3987068/4019553 (99.19%)
			title?: string, // 4018886/4019553 (99.98%)
			type: "video"|"rich",
			url?: string, // 1232/4019553 (0.03%)
			version: "1.0",
			width?: number, // 4019056/4019553 (99.99%)
		}, // 4019553/5506606 (73.00%)
		reddit_video?: {
			bitrate_kbps?: number, // 1481279/1487053 (99.61%)
			dash_url?: string, // 1481279/1487053 (99.61%)
			duration?: number, // 1481279/1487053 (99.61%)
			fallback_url?: string, // 1481279/1487053 (99.61%)
			has_audio?: boolean, // 1481275/1487053 (99.61%)
			height: number|null,
			hls_url?: string, // 1481279/1487053 (99.61%)
			is_gif?: boolean, // 1481279/1487053 (99.61%)
			scrubber_media_url?: string, // 1481279/1487053 (99.61%)
			transcoding_message?: string, // 5774/1487053 (0.39%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1487053/5506606 (27.00%)
		type?: string, // 4019553/5506606 (73.00%)
	},
	secure_media_embed: {
		content?: string, // 4017642/47453180 (8.47%)
		height?: number, // 4017642/47453180 (8.47%)
		media_domain_url?: string, // 4017642/47453180 (8.47%)
		scrolling?: boolean, // 4017642/47453180 (8.47%)
		width?: number, // 4017642/47453180 (8.47%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 678507/47453180 (1.43%)
	sk_ad_network_data?: null, // 678507/47453180 (1.43%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 13010/47453180 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 678507/47453180 (1.43%)
	third_party_tracking?: null, // 678507/47453180 (1.43%)
	third_party_tracking_2?: null, // 678507/47453180 (1.43%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 47099958/47453180 (99.26%)
	thumbnail_width?: number|null, // 47099958/47453180 (99.26%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 30134138/47453180 (63.50%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url?: string, // 42699510/47453180 (89.98%)
	wls: null|number,
}