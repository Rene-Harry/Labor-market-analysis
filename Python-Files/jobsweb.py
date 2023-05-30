from bs4 import BeautifulSoup
import requests
import csv

url = "https://jobwebkenya.com/jobs/page/{}/"

rows = []
for page in range(2,400):  
    newurl = url.format(page) 
    page = requests.get(newurl)

    soup = BeautifulSoup(page.content, 'html.parser')
    lists = soup.find_all('li', class_='job')

    for list in lists:
        title = list.find('a').text
        date = list.find('span', class_='year').text
        link = list.find('a')['href']

        url2 = link
        page2 = requests.get(url2)

        soup2 = BeautifulSoup(page2.content, 'html.parser')
        lists2 = soup2.find('div', class_='section_content')
        
        company = lists2.find('a', {'rel': 'nofollow'}).text


        info = [title, date, link, company]
        rows.append(info)

        

with open('jobswebdata.csv', 'w', newline='' , encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(['Title', 'Date', 'Link', 'Company'])
    writer.writerows(rows)
