import requests
from bs4 import BeautifulSoup

url = "https://weather.com/weather/today"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
print (soup.prettify())

# extract weather data
temperature = soup.find("span", class_="CurrentConditions--tempValue--zUBSz").text
print(f"Today's temperature: {temperature}")
