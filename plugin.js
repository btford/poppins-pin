
module.exports = function initPlugin (poppins) {
  poppins.plugins.pin = {
    message: function (issue) {
      return "Thanks for the contribution!";
    }
  };

  poppins.on('issueOpened', comment);

  function comment (issue) {
    poppins.createComment(number, poppins.plugins.pin.message(issue));
  }
};
