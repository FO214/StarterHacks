import requests
import os

#MAKE IT PROMPTED 

# OpenAI API Key
api_key = os.environ.get("OPENAI_API_KEY")

def get_item(base64_image):
  headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
  }

  payload = {
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "What is the one food that you see in this picture, please ONLY return what the food is, for example, if you see apples, please just return \"apples\"."
          },
          {
            "type": "image_url",
            "image_url": {
              "url": f"data:image/jpeg;base64,{base64_image}"
            }
          }
        ]
      }
    ],
    "max_tokens": 300
  }

  response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

  return response.json()