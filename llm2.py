
import google.generativeai as genai
import os
import json
from yt import get_video_data
GOOGLE_API_KEY = "AIzaSyCjP_xDqySccL27EnCkIWeJ9_3asxILmg8"  # Replace with your actual key

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel(model_name='gemini-1.0-pro') #No need for tools

chat = model.start_chat() #No need for enable_automatic_function_calling

def get_top_companies(userinput):
    prompt =  f"""You are an AI assistant that identifies product types from user input and provides a list of top companies associated with that product type.
    "user input" = {userinput}
    **Instructions:**

    1.  **Receive User Input:** Take the user's input as text. This input can be a single word, a phrase, or a sentence describing a product or a need.
    2.  **Identify Product Type:** Analyze the user input and determine the most likely product type. Focus on broad categories like:
        *   Car
        *   Milk
        *   Bike (Motorcycle or Bicycle)
        *   Mobile (Mobile Phone)
        *   Laptop
        *   Television
        *   Shoes
        *   Clothing (Be specific if possible, e.g., "Jeans," "T-shirts")
        *   Software (Be specific, e.g., "Antivirus Software," "Photo Editing Software")
        *   Food (Be specific, e.g., "Breakfast Cereal," "Snacks")
    3.  **Provide Top 4 Companies:** Once the product type is identified, provide a list of the top 4 companies commonly associated with that product type. These should be well-known and generally considered leaders in their respective markets. Prioritize global brands if applicable.
    4.  **JSON Output:** Return the response in the following JSON format:

    
    
    "companies": ["Company 1", "Company 2", "Company 3", "Company 4"],
    "product_type": "Identified Product Type"
    
    """
    response = chat.send_message(prompt)
    map=[]
    print(response.text)
    map = json.loads(response.text)
    return ",".join([i+" "+map["product_type"] for i in map["companies"]])

# user = "i want to buy milk in india"
result = get_top_companies(user)
print(type(result),result)
result = result.split(",")
# query = "nike shoes ads"
output_data =[]

for company in result :
    query=f"recent {company} ads"
    print(query)
    output_data.extend(get_video_data(query))
for i in output_data:
    print("=="*40)
    print(i)
    print("=="*40)

promt2=""" You are a marketing and user-experience analysis expert.

I have data related to a video, including its transcription, comments, and metadata. Your task is to analyze this data and provide the following insights:

Trigger Points:

Identify specific elements in the transcription or comments that emotionally engage users (e.g., humor, surprise, relevance, or value proposition).
Highlight moments that capture attention or drive excitement.
Call to Action (CTA):

Find any explicit or implicit calls to action, whether stated in the transcription or suggested by user comments (e.g., "buy now," "try this feature," or recommendations for action).
Suggest potential CTAs that could resonate with the audience based on their engagement.
Pain Points:

Highlight areas of frustration, confusion, or criticism mentioned in the comments.
Extract negative feedback or gaps in user expectations that the company or product could address.

Please ensure the output is presented in a clear, structured format as follows:

Example Input:
Video Metadata:

Title: "This Volkswagen system will SAVE your LIFE!😳🆘 #volkswagen #vw #safety"
URL: Video Link
Transcription: "This new Volkswagen safety system ensures drivers remain alert at all times. If it detects inactivity, it will safely stop the car and alert emergency services."
Comments:
"If you use it in England, it just put you in the fast lane. 😂"
"Muito bom, aqui nós temos o VW gol que vem com isso de fábrica.😂😂😂"
"First of all, how will someone just pass out? Can someone explain?"
"BMW can do that too!"
"In our country, we produce more corrupt politicians than safe cars. 😢"

Example Output Format:
1. Trigger Points:

Volkswagen: Humor about regional traffic rules in England, relatability of "fast lane" in the comments.
2. Call to Action (CTA):

Volkswagen: Implicit suggestion to consider the Volkswagen Virtus GT and Taigun GT as sporty and adventurous options.
3. Pain Points:

Volkswagen: Frustration over lack of GT badges for 1.0GT buyers, as promised in advertisements.

"""

output_data = [str(i) for i in output_data]
query2 = promt2 + ' '.join(output_data)
response = chat.send_message(query2)
print("Second responce +="+ response.text)
# a = open("data.txt","w")
# a.write(str(output_data))
# a.close()
