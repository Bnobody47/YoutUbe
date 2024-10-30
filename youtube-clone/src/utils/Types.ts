export interface HomeVideoCardType {
    videoId:string
    videoTitle:string
    videoThumbnail:string
    videoDuration:string
    videoViews:string
    videoAge:string
    channelInfo:{
        id:string
        image?:string
        name:string
    }
}