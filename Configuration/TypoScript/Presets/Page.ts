plugin.tx_rest.settings {
	paths {
		2015 {
			path = VirtualObject-Page
			read = deny
			write = deny
		}
	}
	
	aliases {
		#	page = VirtualObject-Page
	}
		
	virtualObjects {
		Page {
			mapping {
				identifier = id
				tableName = pages
				skipUnknownProperties = true
					
				properties{
					id {
						column = uid
						type = int
					}
					pageIdentifier {
						column = pid
						type = int
					}
#					t3ver_oid {
#						column = t3ver_oid
#						type = int
#					}
#					t3ver_id {
#						column = t3ver_id
#						type = int
#					}
#					t3ver_wsid {
#						column = t3ver_wsid
#						type = int
#					}
#					t3ver_label {
#						column = t3ver_label
#						type = string
#					}
#					t3ver_state {
#						column = t3ver_state
#						type = integer
#					}
#					t3ver_stage {
#						column = t3ver_stage
#						type = int
#					}
#					t3ver_count {
#						column = t3ver_count
#						type = int
#					}
#					t3ver_tstamp {
#						column = t3ver_tstamp
#						type = int
#					}
#					t3ver_move_id {
#						column = t3ver_move_id
#						type = int
#					}
#					t3_origuid {
#						column = t3_origuid
#						type = int
#					}
					modificationDate {
						column = tstamp
						type = int
					}
					creationDate {
						column = crdate
						type = int
					}
					creationUserId {
						column = cruser_id
						type = int
					}
					sorting {
						column = sorting
						type = int
					}
					deleted {
						column = deleted
						type = bool
					}
#					permissionUserId {
#						column = perms_userid
#						type = int
#					}
#					permissionGroupId {
#						column = perms_groupid
#						type = int
#					}
#					permissionUser {
#						column = perms_user
#						type = integer
#					}
#					permissionGroup {
#						column = perms_group
#						type = integer
#					}
#					permissionEverybody {
#						column = perms_everybody
#						type = integer
#					}
					editLock {
						column = editlock
						type = boolean
					}
					hidden {
						column = hidden
						type = bool
					}		
					title {
						column = title
						type = string
					}
					doktype {
						column = doktype
						type = integer
					}
#					TSconfig {
#						column = TSconfig
#						type = string
#					}
					storagePageIdentifier {
						column = storage_pid
						type = int
					}
					isSiteRoot {
						column = is_siteroot
						type = bool
					}
					phpTreeStop {
						column = php_tree_stop
						type = boolean
					}
#					tx_impexp_origuid {
#						column = tx_impexp_origuid
#						type = int
#					}
					url {
						column = url
						type = string
					}
					startTime {
						column = starttime
						type = int
					}
					endTime {
						column = endtime
						type = int
					}
					urlType {
						column = urltype
						type = integer
					}
					shortcut {
						column = shortcut
						type = int
					}
					shortcutMode {
						column = shortcut_mode
						type = int
					}
					noCache {
						column = no_cache
						type = int
					}
					feGroup {
						column = fe_group
						type = string
					}
					subtitle {
						column = subtitle
						type = string
					}
					layout {
						column = layout
						type = integer
					}
					urlScheme {
						column = url_scheme
						type = integer
					}
					target {
						column = target
						type = string
					}
					media {
						column = media
						type = string
					}
					lastUpdated {
						column = lastUpdated
						type = int
					}
					keywords {
						column = keywords
						type = string
					}
					cacheTimeout {
						column = cache_timeout
						type = int
					}
					newUntil {
						column = newUntil
						type = int
					}
					description {
						column = description
						type = string
					}
					noSearch {
						column = no_search
						type = integer
					}
#					SYS_LASTCHANGED {
#						column = SYS_LASTCHANGED
#						type = int
#					}
					abstract {
						column = abstract
						type = string
					}
					module {
						column = module
						type = string
					}
					extendToSubpages {
						column = extendToSubpages
						type = integer
					}
					author {
						column = author
						type = string
					}
					authorEmail {
						column = author_email
						type = string
					}
					navigationTitle {
						column = nav_title
						type = string
					}
					navigationHide {
						column = nav_hide
						type = integer
					}
					contentFromPageIdentifier {
						column = content_from_pid
						type = int
					}
					mountPageIdentifier {
						column = mount_pid
						type = int
					}
					mountPageIdentifierOL {
						column = mount_pid_ol
						type = integer
					}
					alias {
						column = alias
						type = string
					}
#					l18n_cfg {
#						column = l18n_cfg
#						type = integer
#					}
					feLoginMode {
						column = fe_login_mode
						type = integer
					}
					backendLayout {
						column = backend_layout
						type = int
					}
					backendLayoutNextLevel {
						column = backend_layout_next_level
						type = int
					}
#					tx_realurl_pathsegment {
#						column = tx_realurl_pathsegment
#						type = string
#					}
#					tx_realurl_pathoverride {
#						column = tx_realurl_pathoverride
#						type = int
#					}
#					tx_realurl_exclude {
#						column = tx_realurl_exclude
#						type = int
#					}
#					tx_realurl_nocache {
#						column = tx_realurl_nocache
#						type = int
#					}
#					tx_seo_titletag {
#						column = tx_seo_titletag
#						type = string
#					}
#					tx_seo_canonicaltag {
#						column = tx_seo_canonicaltag
#						type = string
#					}
#					t3ver_swapmode {
#						column = t3ver_swapmode
#						type = integer
#					}
				}
			}
		}
	}
}
