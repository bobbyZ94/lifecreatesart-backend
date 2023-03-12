# lifecreatesart-backend

## Problems encounterd:
- When creating user on local db and then mongodum/mongorestore on production server and try to acess admin panel -> Incorrect password
  - fixed by creating new user and deleting old one on local machine while connected to new db with monogorestored data

- When creating global collections with versions/drafts you have to fill em once before enabling drafts, so it wont bug out! best case -> only drafts on normal collection!

- Images are stored locally (not in DB!) -> fixed with cloudinary plugin

## How to implement paypal?
### Frontend
- User clicks buy after typing in all information (validated)
- Buy Popup from Paypal appears
  - WHEN USER CLICKS PAY CHECK IF ARTICLE STILL IN STORE, THEN -1 ARTICLE IN DB, THEN ENABLE PAYMENT -> If payment successfull do nothing -> if unsuccessfull restore article +1 to db
- Send confirmation email
### Backend