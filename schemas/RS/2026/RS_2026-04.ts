interface RedditPost {
	_meta?: {
		edited_title?: string, // 2454192/42099997 (5.83%)
		is_edited?: boolean, // 1652347/42099997 (3.92%)
		removal_type?: "deleted"|"moderator"|"reddit"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops"|"anti_evil_ops", // 8903970/42099997 (21.15%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 8208717/42099997 (19.50%)
		was_initially_deleted?: boolean, // 695257/42099997 (1.65%)
	}, // 42099997/44966495 (93.63%)
	ad_business?: null, // 544269/44966495 (1.21%)
	ad_promoted_user_posts?: null, // 544269/44966495 (1.21%)
	ad_supplementary_text_md?: null|string, // 544269/44966495 (1.21%)
	ad_user_targeting?: null, // 544269/44966495 (1.21%)
	adserver_click_url?: null, // 544269/44966495 (1.21%)
	adserver_imp_pixel?: null, // 544269/44966495 (1.21%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 544269/44966495 (1.21%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 112894/44966495 (0.25%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1010442/2795025 (36.15%)
		e: "text"|"emoji",
		t?: string, // 1784583/2795025 (63.85%)
		u?: string, // 1010442/2795025 (36.15%)
	}[], // 44038077/44966495 (97.94%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 44038077/44966495 (97.94%)
	author_fullname?: string, // 44038077/44966495 (97.94%)
	author_id?: string|null, // 544269/44966495 (1.21%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 44038077/44966495 (97.94%)
	author_premium?: boolean, // 44038077/44966495 (97.94%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 463106/44966495 (1.03%)
	campaign_id?: null, // 544269/44966495 (1.21%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"entertainment"|"diy_and_crafts"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3477620/44966495 (7.73%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 10369/3475648 (0.30%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 69247/195075 (35.50%)
			e: "text"|"emoji",
			t?: string, // 125828/195075 (64.50%)
			u?: string, // 69247/195075 (35.50%)
		}[], // 3457083/3475648 (99.47%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 3457083/3475648 (99.47%)
		author_fullname?: string, // 3457083/3475648 (99.47%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3457083/3475648 (99.47%)
		author_premium?: boolean, // 3457083/3475648 (99.47%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"gaming",
		clicked: boolean,
		content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"comics"|"diy_and_crafts"|"entertainment"|"writing"|"music"|"videos")[],
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
				caption?: string, // 1275668/4245800 (30.05%)
				id: number,
				is_deleted: boolean,
				media_id: string,
				outbound_url?: string, // 10841/4245800 (0.26%)
			}[],
		}|null, // 750522/3475648 (21.59%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 750522/3475648 (21.59%)
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
			a?: string, // 76648/583491 (13.14%)
			e: "text"|"emoji",
			t?: string, // 506843/583491 (86.86%)
			u?: string, // 76648/583491 (13.14%)
		}[],
		link_flair_template_id?: string, // 1455592/3475648 (41.88%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat?: null|number, // 1912025/3475648 (55.01%)
		location_long?: null|number, // 1912025/3475648 (55.01%)
		location_name?: null|"London, Greater London"|"Norway", // 1912025/3475648 (55.01%)
		locked: boolean,
		media: null|{
			oembed?: {
				author_name?: string, // 43819/551879 (7.94%)
				author_url?: string, // 43807/551879 (7.94%)
				cache_age?: number, // 2/551879 (0.00%)
				description?: string, // 1933/551879 (0.35%)
				height?: number|null, // 551813/551879 (99.99%)
				html: string,
				mean_alpha?: number, // 3/551879 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 526021/551879 (95.31%)
				thumbnail_url?: string, // 551807/551879 (99.99%)
				thumbnail_width?: number, // 526021/551879 (95.31%)
				title?: string, // 551841/551879 (99.99%)
				type: "video"|"rich",
				url?: string, // 50/551879 (0.01%)
				version: "1.0",
				width?: number, // 551813/551879 (99.99%)
			}, // 551879/768377 (71.82%)
			reddit_video?: {
				bitrate_kbps?: number, // 216268/216498 (99.89%)
				dash_url?: string, // 216484/216498 (99.99%)
				duration?: number, // 216484/216498 (99.99%)
				fallback_url?: string, // 216484/216498 (99.99%)
				has_audio?: boolean, // 215321/216498 (99.46%)
				height: number|null,
				hls_url?: string, // 216484/216498 (99.99%)
				is_gif?: boolean, // 216484/216498 (99.99%)
				scrubber_media_url?: string, // 216484/216498 (99.99%)
				transcoding_message?: string, // 14/216498 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 216498/768377 (28.18%)
			type?: string, // 551879/768377 (71.82%)
		},
		media_embed: {
			content?: string, // 551813/3475648 (15.88%)
			height?: number, // 551813/3475648 (15.88%)
			scrolling?: boolean, // 551813/3475648 (15.88%)
			width?: number, // 551813/3475648 (15.88%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3543/4320478 (0.08%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 4317906/4320478 (99.94%)
				hlsUrl?: string, // 3543/4320478 (0.08%)
				id?: string, // 4317906/4320478 (99.94%)
				isGif?: boolean, // 3543/4320478 (0.08%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 4314363/4320478 (99.86%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2937081/4320478 (67.98%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 4314363/4320478 (99.86%)
				s?: {
					gif?: string, // 172107/4314363 (3.99%)
					mp4?: string, // 172107/4314363 (3.99%)
					u?: string, // 4142256/4314363 (96.01%)
					x: number,
					y: number,
				}, // 4314363/4320478 (99.86%)
				status: "valid"|"failed"|"unprocessed",
				x?: number, // 3543/4320478 (0.08%)
				y?: number, // 3543/4320478 (0.08%)
			},
		}|null, // 785745/3475648 (22.61%)
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
		}, // 1425183/3475648 (41.00%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 249/9845 (2.53%)
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
		}|boolean|null, // 5173/3475648 (0.15%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1862659/3475648 (53.59%)
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
					}, // 11482/1862659 (0.62%)
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
					}, // 11482/1862659 (0.62%)
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
					}, // 1099241/1862659 (59.01%)
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
					}, // 1105045/1862659 (59.33%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 505833/505871 (99.99%)
				dash_url?: string, // 505850/505871 (100.00%)
				duration?: number, // 505850/505871 (100.00%)
				fallback_url?: string, // 505850/505871 (100.00%)
				has_audio?: boolean, // 479200/505871 (94.73%)
				height: number|null,
				hls_url?: string, // 505850/505871 (100.00%)
				is_gif?: boolean, // 505850/505871 (100.00%)
				scrubber_media_url?: string, // 505850/505871 (100.00%)
				transcoding_message?: string, // 21/505871 (0.00%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 505871/1862659 (27.16%)
		}, // 1862659/3475648 (53.59%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown"|"community_ops",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			oembed?: {
				author_name?: string, // 43819/551879 (7.94%)
				author_url?: string, // 43807/551879 (7.94%)
				cache_age?: number, // 2/551879 (0.00%)
				description?: string, // 1933/551879 (0.35%)
				height?: number|null, // 551813/551879 (99.99%)
				html: string,
				mean_alpha?: number, // 3/551879 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 526021/551879 (95.31%)
				thumbnail_url?: string, // 551807/551879 (99.99%)
				thumbnail_width?: number, // 526021/551879 (95.31%)
				title?: string, // 551841/551879 (99.99%)
				type: "video"|"rich",
				url?: string, // 50/551879 (0.01%)
				version: "1.0",
				width?: number, // 551813/551879 (99.99%)
			}, // 551879/768377 (71.82%)
			reddit_video?: {
				bitrate_kbps?: number, // 216268/216498 (99.89%)
				dash_url?: string, // 216484/216498 (99.99%)
				duration?: number, // 216484/216498 (99.99%)
				fallback_url?: string, // 216484/216498 (99.99%)
				has_audio?: boolean, // 215321/216498 (99.46%)
				height: number|null,
				hls_url?: string, // 216484/216498 (99.99%)
				is_gif?: boolean, // 216484/216498 (99.99%)
				scrubber_media_url?: string, // 216484/216498 (99.99%)
				transcoding_message?: string, // 14/216498 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 216498/768377 (28.18%)
			type?: string, // 551879/768377 (71.82%)
		},
		secure_media_embed: {
			content?: string, // 551813/3475648 (15.88%)
			height?: number, // 551813/3475648 (15.88%)
			media_domain_url?: string, // 551813/3475648 (15.88%)
			scrolling?: boolean, // 551813/3475648 (15.88%)
			width?: number, // 551813/3475648 (15.88%)
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
		suggested_sort: null|"qa"|"confidence"|"top"|"new"|"old"|"controversial"|"live"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 3473080/3475648 (99.93%)
		thumbnail_width?: number|null, // 3473080/3475648 (99.93%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2588596/3475648 (74.48%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url?: string, // 1912025/3475648 (55.01%)
		wls: null|number,
	}[], // 3477620/44966495 (7.73%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 544269/44966495 (1.21%)
	downs: number,
	edited: boolean|number,
	embed_type?: null|"scrape", // 544269/44966495 (1.21%)
	embed_url?: null|string, // 544269/44966495 (1.21%)
	events?: [], // 544269/44966495 (1.21%)
	eventsOnRender?: [], // 544269/44966495 (1.21%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 108084/22540284 (0.48%)
			caption?: string, // 7006952/22540284 (31.09%)
			display_url?: string, // 120867/22540284 (0.54%)
			id: number,
			is_deleted: boolean,
			media_id: string,
			outbound_url?: string, // 145598/22540284 (0.65%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 22666/22540284 (0.10%)
		}[],
	}|null, // 6067127/44966495 (13.49%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 544269/44966495 (1.21%)
	id: string,
	impression_id?: null, // 544269/44966495 (1.21%)
	impression_id_str?: null, // 544269/44966495 (1.21%)
	is_blank?: boolean, // 544269/44966495 (1.21%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 6067127/44966495 (13.49%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 544269/44966495 (1.21%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1234652/9876482 (12.50%)
		e: "text"|"emoji",
		t?: string, // 8641830/9876482 (87.50%)
		u?: string, // 1234652/9876482 (12.50%)
	}[],
	link_flair_template_id?: string, // 20148471/44966495 (44.81%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat?: null, // 35299124/44966495 (78.50%)
	location_long?: null, // 35299124/44966495 (78.50%)
	location_name?: null, // 35299124/44966495 (78.50%)
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 594685/3887405 (15.30%)
			author_url?: string, // 607856/3887405 (15.64%)
			cache_age?: number, // 27/3887405 (0.00%)
			description?: string, // 19911/3887405 (0.51%)
			height?: number|null, // 3886983/3887405 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3820171/3887405 (98.27%)
			thumbnail_url?: string, // 3887399/3887405 (100.00%)
			thumbnail_width?: number, // 3820171/3887405 (98.27%)
			title?: string, // 3886807/3887405 (99.98%)
			type: "video"|"rich",
			url?: string, // 1427/3887405 (0.04%)
			version: "1.0",
			width?: number, // 3886983/3887405 (99.99%)
		}, // 3887405/5284856 (73.56%)
		reddit_video?: {
			bitrate_kbps?: number, // 1391754/1397451 (99.59%)
			dash_url?: string, // 1391754/1397451 (99.59%)
			duration?: number, // 1391754/1397451 (99.59%)
			fallback_url?: string, // 1391754/1397451 (99.59%)
			has_audio?: boolean, // 1391743/1397451 (99.59%)
			height: number|null,
			hls_url?: string, // 1391754/1397451 (99.59%)
			is_gif?: boolean, // 1391754/1397451 (99.59%)
			scrubber_media_url?: string, // 1391754/1397451 (99.59%)
			transcoding_message?: string, // 5697/1397451 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1397451/5284856 (26.44%)
		type?: string, // 3887405/5284856 (73.56%)
	},
	media_embed: {
		content?: string, // 3885621/44966495 (8.64%)
		height?: number, // 3885621/44966495 (8.64%)
		scrolling?: boolean, // 3885621/44966495 (8.64%)
		width?: number, // 3885621/44966495 (8.64%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 24041/23100766 (0.10%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 22994947/23100766 (99.54%)
			hlsUrl?: string, // 24041/23100766 (0.10%)
			id?: string, // 22994947/23100766 (99.54%)
			isGif?: boolean, // 24041/23100766 (0.10%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 22970906/23100766 (99.44%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 12426416/23100766 (53.79%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 22970906/23100766 (99.44%)
			s?: {
				gif?: string, // 464008/22970906 (2.02%)
				mp4?: string, // 464008/22970906 (2.02%)
				u?: string, // 22506898/22970906 (97.98%)
				x: number,
				y: number,
			}, // 22970906/23100766 (99.44%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 24041/23100766 (0.10%)
			y?: number, // 24041/23100766 (0.10%)
		},
	}|null, // 6492031/44966495 (14.44%)
	media_only: boolean,
	mobile_ad_url?: string, // 544269/44966495 (1.21%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 544269/44966495 (1.21%)
	outbound_link?: {
		created?: null|number, // 22076807/22621076 (97.59%)
		expiration?: null|number, // 22076807/22621076 (97.59%)
		url?: string, // 22076807/22621076 (97.59%)
	}, // 22621076/44966495 (50.31%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 15869/141943 (11.18%)
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
	}|null, // 2636436/44966495 (5.86%)
	post_hint?: "image"|"rich:video"|"link"|"hosted:video"|"self"|"video", // 20419539/44966495 (45.41%)
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
				}, // 433777/20500254 (2.12%)
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
				}, // 433777/20500254 (2.12%)
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
				}, // 10758352/20500254 (52.48%)
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
				}, // 10852443/20500254 (52.94%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 3220096/3221296 (99.96%)
			dash_url?: string, // 3220113/3221296 (99.96%)
			duration?: number, // 3220113/3221296 (99.96%)
			fallback_url?: string, // 3220113/3221296 (99.96%)
			has_audio?: boolean, // 3193491/3221296 (99.14%)
			height: number|null,
			hls_url?: string, // 3220113/3221296 (99.96%)
			is_gif?: boolean, // 3220113/3221296 (99.96%)
			scrubber_media_url?: string, // 3220113/3221296 (99.96%)
			transcoding_message?: string, // 1183/3221296 (0.04%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 3221296/20500254 (15.71%)
	}, // 20500254/44966495 (45.59%)
	priority_id?: null, // 544269/44966495 (1.21%)
	product_ids?: [], // 544269/44966495 (1.21%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 544269/44966495 (1.21%)
	promoted?: boolean, // 544269/44966495 (1.21%)
	promoted_by?: null, // 544269/44966495 (1.21%)
	promoted_display_name?: null, // 544269/44966495 (1.21%)
	promoted_url?: null, // 544269/44966495 (1.21%)
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
			author_name?: string, // 594685/3887405 (15.30%)
			author_url?: string, // 607856/3887405 (15.64%)
			cache_age?: number, // 27/3887405 (0.00%)
			description?: string, // 19911/3887405 (0.51%)
			height?: number|null, // 3886983/3887405 (99.99%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 3820171/3887405 (98.27%)
			thumbnail_url?: string, // 3887399/3887405 (100.00%)
			thumbnail_width?: number, // 3820171/3887405 (98.27%)
			title?: string, // 3886807/3887405 (99.98%)
			type: "video"|"rich",
			url?: string, // 1427/3887405 (0.04%)
			version: "1.0",
			width?: number, // 3886983/3887405 (99.99%)
		}, // 3887405/5284856 (73.56%)
		reddit_video?: {
			bitrate_kbps?: number, // 1391754/1397451 (99.59%)
			dash_url?: string, // 1391754/1397451 (99.59%)
			duration?: number, // 1391754/1397451 (99.59%)
			fallback_url?: string, // 1391754/1397451 (99.59%)
			has_audio?: boolean, // 1391743/1397451 (99.59%)
			height: number|null,
			hls_url?: string, // 1391754/1397451 (99.59%)
			is_gif?: boolean, // 1391754/1397451 (99.59%)
			scrubber_media_url?: string, // 1391754/1397451 (99.59%)
			transcoding_message?: string, // 5697/1397451 (0.41%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1397451/5284856 (26.44%)
		type?: string, // 3887405/5284856 (73.56%)
	},
	secure_media_embed: {
		content?: string, // 3885621/44966495 (8.64%)
		height?: number, // 3885621/44966495 (8.64%)
		media_domain_url?: string, // 3885621/44966495 (8.64%)
		scrolling?: boolean, // 3885621/44966495 (8.64%)
		width?: number, // 3885621/44966495 (8.64%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 544269/44966495 (1.21%)
	sk_ad_network_data?: null, // 544269/44966495 (1.21%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 14540/44966495 (0.03%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 544269/44966495 (1.21%)
	third_party_tracking?: null, // 544269/44966495 (1.21%)
	third_party_tracking_2?: null, // 544269/44966495 (1.21%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 44587163/44966495 (99.16%)
	thumbnail_width?: number|null, // 44587163/44966495 (99.16%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 28670974/44966495 (63.76%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url?: string, // 35299124/44966495 (78.50%)
	wls: null|number,
}