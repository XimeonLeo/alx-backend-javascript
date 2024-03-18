/**
 * Contains the extra route handlers.
 * @author Ximeon Leo <https://github.com/XimeonLeo>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
