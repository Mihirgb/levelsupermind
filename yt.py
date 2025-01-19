from googleapiclient.discovery import build
# from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound, VideoUnavailable

# Replace with your YouTube Data API key
api_key = "AIzaSyB2SEqkWRg0f-4CqZzHpK53FbOyvWmR2EA"

# Initialize YouTube API client
youtube = build('youtube', 'v3', developerKey=api_key)

# Function to search for videos on YouTube
def search_videos(query, max_results=10):
    search_response = youtube.search().list(
        q=query,
        part='id,snippet',
        maxResults=max_results,
        order='relevance',  # Order by view count
        publishedAfter='2020-01-01T00:00:00Z'
    ).execute()

    return search_response['items']

# Function to get video details
def get_video_details(video_id):
    video_response = youtube.videos().list(
        part='snippet,contentDetails,statistics',
        id=video_id
    ).execute()

    return video_response['items'][0]

# Function to get comments from a video
def get_comments(video_id, max_comments=500):
    comments = []
    request = youtube.commentThreads().list(
        part='snippet',
        videoId=video_id,
        maxResults=100  # Maximum allowed per page by the API
    )
    
    while request and len(comments) < max_comments:
        comment_response = request.execute()
        
        for item in comment_response['items']:
            comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
            comments.append(comment)
            
            # Stop if we've reached the desired max_comments
            if len(comments) >= max_comments:
                break

        # Get the next page token if available
        request = youtube.commentThreads().list_next(request, comment_response)

    return comments

# Function to get captions for a video
def get_caption(video_id):
    try:
        # Fetch available transcripts
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
        
        # Try to get the official English transcript
        try:
            transcript = transcript_list.find_transcript(['en'])
        except NoTranscriptFound:
            # If no official English transcript is found, try auto-generated
            try:
                transcript = transcript_list.find_generated_transcript(['en'])
            except NoTranscriptFound:
                return "No captions"

        # Fetch and process the transcript text
        script = [i["text"] for i in transcript.fetch()]
        return " ".join(script)
    
    except TranscriptsDisabled:
        return "No captions (transcripts are disabled for this video)"
    except VideoUnavailable:
        return "No captions (video is unavailable)"
    except Exception as e:
        print(f"Error fetching captions: {str(e)}")
        return "No captions"

# New function to get all video data in a dictionary
def get_video_data(query , api =youtube , max_results=3):
    videos_data = []
    videos = search_videos(query, max_results)

    for video in videos:
        video_id = video['id']['videoId']
        title = video['snippet']['title']
        video_url = f"https://www.youtube.com/watch?v={video_id}"

        # Get video details
        details = get_video_details(video_id)
        description = details['snippet'].get('description', '')
        views = details['statistics'].get('viewCount', '')
        likes = details['statistics'].get('likeCount', '')  # Handle cases where likes are disabled
        comment_count = details['statistics'].get('commentCount', '')

        # Get comments
        comments = get_comments(video_id, max_comments=5) if comment_count and int(comment_count) > 0 else []

        # Get captions
        captions = get_caption(video_id) if get_caption(video_id) else ''

        # Store data in dictionary format
        video_data = {
            "Video ID": video_id,
            "Title": title,
            "URL": video_url,
            "Description": description,
            "Views": views,
            "Likes": likes,
            "Comment Count": comment_count,
            "Comments": comments,
            "Captions": captions
        }

        videos_data.append(video_data)

    return videos_data

# # Example usage
# if __name__ == "__main__":
#     # query = "nike shoes ads"
#     max_results = 5

#     # Get all video data
#     video_data = get_video_data(query)

#     # Print the results
#     for data in video_data:
#         print(data)
#         print("-" * 50)
