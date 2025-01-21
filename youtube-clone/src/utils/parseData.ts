import { ChannelPlaylistType, CommentBodyType, HomeVideoCardType } from "./Types";


export const parseVideosdata = (itmes: any[]): HomeVideoCardType[] => {
    return itmes.map((item: any) => ({
        videoId: item.id,
        videoTitle: item.snippet.title,
        videoDescription: item.snippet.description,
        videoThumbnail: item.snippet.thumbnails.standard?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
        videoDuration: item.contentDetails?.duration || 'N/A',
        videoViews: item.statistics?.viewCount || '0',
        videoLikes: item.statistics.likeCount,
        videoAge: item.snippet.publishedAt,
        channelInfo: {
            id: item.snippet.channelId,
            name: item.snippet.channelTitle,
            subCount: item.statistics?.subscriberCount
        }
    }))
}

export const parseChannelPlayllists = ((items: any[]): ChannelPlaylistType[] => {
    return items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.standard?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
        videoCount: item.contentDetails.itemCount,
    }))
})


export const parseComments = (items: any[]): CommentBodyType[] => {
    return items.map((comment: any) => ({
        commentId: comment.id,
        authorChannelId: comment.snippet.topLevelComment.snippet.authorChannelId?.value || "",
        authorProfile: comment.snippet.topLevelComment.snippet.authorProfileImageUrl || "",
        authorName: comment.snippet.topLevelComment.snippet.authorDisplayName || "Anonymous",
        commentText: comment.snippet.topLevelComment.snippet.textOriginal || "",
        commentLikes: comment.snippet.topLevelComment.snippet.likeCount || 0,
        commentRepliesCount: comment.snippet.totalReplyCount
    }))
}

export const parseReplies = (items: any[]): CommentBodyType[] => {
    return items.map((item: any) => ({
        commentId: item.id,
        authorChannelId: item.snippet.authorChannelId?.value || '',
        authorProfile: item.snippet.authorProfileImageUrl || '',
        authorName: item.snippet.authorDisplayName || 'Anonymous',
        commentText: item.snippet.textOriginal || '',
        commentLikes: item.snippet.likeCount || 0,
    }))
}

export const parsePlaylistInfo = (item: any) => ({
    id: item.id,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.standard?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
})