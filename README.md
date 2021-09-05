# Credence_Node.js_Asssignment
This is a full featured API back-end built with Node.js and MongoDB.  
Features include:

- Pagination of server responses to avoid slow page load times.
- Full CRUD features for Movie instances.

## API USAGE

All HTTP requests can be made from software such as [Postman](www.getpostman.com). Postman is free and exists for all major operating systems.

## API details

[Published on Postman](https://documenter.getpostman.com/view/15786084/U16gP7NY)

## ENDPOINTS

  * Create movie                     - `POST /movies`
  * Read movies                      - `GET /movies`
    * limit           - `Number`
    * skip            - `Number`
  * Read movie                       - `GET /movies/:id`
  * Update movie                     - `PATCH /movies/:id`
  * Delete movie                     - `DELETE /movies/:id`
