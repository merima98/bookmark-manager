export interface BookmarkFolder {
    bookmark_name: string
    created_at: string
    id: number
    user_id: string
}


export interface Bookmark {

    bookmark_folder_id: number
    bookmark_name: string
    bookmark_url: string
    created_at: string
    id: number
}
