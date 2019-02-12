users
  * id
  * email null false unique
  * age
  * gender (male, female, custom)
  * first_name
  * last_name
  * image_url
  * password_digest
  * location

boards
  * id
  * title null false
  * description
  * user_id
  * category
  * Time Created

pins
  * id
  * title
  * description
  * link_url
  * image_url
  * user_id
  * board_id
  * original_poster_id
  * Time Created

# BACKEND
### USERS
```
/api/users/ - POST - creates a new user
/api/users/:id - GET - gets one user
/api/users/:id/pins - GET - gets all pins for a user
/api/users/:id/boards - GET - all boards for a user
/api/users/:id - DELETE - deletes a user
/api/users/:id - PATCH - updates a user

### BOARDS
/api/boards - POST - creates new board
/api/boards/:id - GET - gets one board
/api/boards/:id/pins - GET - all pins for a board (add a limit option)
/api/boards/:id - PATCH - updates a board
/api/boards/:id - DELETE - removes a board and all linked pins

### PINS
/api/pins - POST - creates a new pin
/api/pins - GET - gets all pins grouped by image_url (no repeats)
/api/pins/:id - GET - gets one pin
/api/pins/:id - DELETE - deletes pin  
/api/pins/:id - PATCH - updates a pin  

/api/pins/search (category and title)
```
# FRONTEND
```
/login
/signup
/ - Shows numerous pins  
/:user/boards
/:user/:board
/:user/pins
/pin/:pin_id
/:user/search

```










//
