# charmed
League of legends dating

https://joeyvigil.github.io/charmed/

[www.charmed.lol](https://www.charmed.lol/)

## API
This project uses the [Riot Games API](https://developer.riotgames.com/).

## MVP 

### Views
- Home 🏠
  - advertisement for site
  - features
  - payment (coming soon)
 
- Profile 👤
  - view and edit profile information
  - add league accounts (most of info from api)
  - Rank / Season Peak (Bronze → Challenger 😎)
  - Main Role (Top / Jungle / Mid / ADC / Support)
  - Favorite Champions (shows icons)
  - Region (NA, EUW, etc.)
  - Bio

- Settings ⚙️
  - change password
  - change email
  - delete account
  - change notification settings

- Matches 💕
    - view people near you
    - view people near rank

- Chat 💬
    - real-time messaging with other users
    - notifications for new messages
    - bans

- Login / Signup 🔐
    - create account
    - login to existing account

- 404 ❌
    - page not found
    - redirect to home

- Admin Dashboard 📊
    - manage users
    - view site analytics

- About Us ℹ️
    - information about the site
    - contact information
  
- FAQ ❓
    - frequently asked questions
    - 
- Terms of Service 📜
    - legal information about using the site

- Privacy Policy 🔒
    - information about data collection and usage


## Riot API requests + responses

### Get account by Riot ID 'ACCOUNTS-V1'
request:
```
GET https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/DANKEY%20KANG/banan
```

header:
```json
{
"X-Riot-Token": "RGAPI-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

response (200):
```json
{
    "puuid": "JLRJcLcMp5B_mw9Eu1Q_b5u5DeLkak3UlUZfevYYL8DCORwMwIwZsIAaCUf7xuf_3duGKBrs2ImDZA",
    "gameName": "DANKEY KANG",
    "tagLine": "banan"
}
```

### more to come...

## Tech Stack
- Frontend: React, Bootstrap, CSS, HTML, JavaScript, JSX, react-router-dom
- Backend: Flask, SQLAlchemy, Python, flask-cors, flask-marshmallow, marshmallow-sqlalchemy, requests, flask-limiter, flask-caching, python-jose, flask-swagger, flask-swagger-ui, gunicorn, Werkzeug
- Database: PostgreSQL
- Hosting: GitHub Pages (frontend), porkbun (domain), Render web service & PostgreSQL (backend)
- APIs: Riot Games API
- Other Tools: Postman, Git, GitHub


